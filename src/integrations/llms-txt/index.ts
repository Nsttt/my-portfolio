import fs from "node:fs/promises";
import path from "node:path";
import type { AstroConfig, AstroIntegration } from "astro";
import { JSDOM } from "jsdom";
import micromatch from "micromatch";
import { entryToSimpleMarkdown } from "./entryToSimpleMarkdown";

interface DocSet {
  title: string;
  description: string;
  url: string;
  include: string[];
  promote?: string[];
  demote?: string[];
  onlyStructure?: boolean;
  mainSelector?: string;
  ignoreSelectors?: string[];
}

interface LlmsConfig {
  title?: string;
  description?: string;
  details?: string;
  optionalLinks?: Array<{ label: string; url: string; description?: string }>;
  docSet?: DocSet[];
  notes?: string;
  pageSeparator?: string;
  autoDetect?: boolean;
}

interface PluginContext {
  config: LlmsConfig;
  astroConfig: AstroConfig;
  distDir: string;
  pages: { pathname: string }[];
}

/**
 * Astro integration to generate a llms.txt file containing documentation sets.
 * @param configOptions
 * @returns
 */
export default function astroLlmsTxt(
  configOptions: LlmsConfig = {},
): AstroIntegration {
  let astroConfig: AstroConfig;
  let logger: any;

  return {
    name: "astro-llms-txt",
    hooks: {
      "astro:config:setup": ({ config, logger: astroLogger }) => {
        astroConfig = config;
        logger = astroLogger;
      },
      "astro:build:done": async ({ dir, pages }) => {
        // Set defaults
        const config = {
          autoDetect: true,
          pageSeparator: "\n\n---\n\n",
          title: extractSiteTitle(astroConfig),
          description: `Personal website and blog`,
          details: `Content optimized for LLM consumption`,
          notes:
            "This content includes technical content, code examples, and project documentation.",
          ...configOptions,
        };

        // Auto-detect content structure if enabled
        if (config.autoDetect && !config.docSet?.length) {
          config.docSet = autoDetectDocSets(
            pages.map((p) => ({ pathname: p.pathname })),
          );
        }

        const context: PluginContext = {
          config,
          astroConfig,
          distDir: dir.pathname,
          pages: pages.map((page) => ({ pathname: page.pathname })),
        };

        // Generate all three files
        await generateLlmsFiles(context, logger);
      },
    },
  };
}

/**
 * Extract site title from Astro config
 */
function extractSiteTitle(astroConfig: AstroConfig): string {
  if (astroConfig.site) {
    const url = new URL(astroConfig.site);
    const domain = url.hostname.replace(/^www\./, "");
    const domainPart = domain.split(".")[0];
    if (domainPart) {
      return (
        domainPart.charAt(0).toUpperCase() +
        domainPart.slice(1) +
        "'s Blog"
      );
    }
  }
  return "Personal Blog";
}

/**
 * Auto-detect content structure based on page paths
 */
function autoDetectDocSets(pages: { pathname: string }[]): DocSet[] {
  const pathGroups = new Map<string, string[]>();

  // Group pages by their first path segment
  pages.forEach((page) => {
    const segments = page.pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      const group = segments[0];
      if (group && !pathGroups.has(group)) {
        pathGroups.set(group, []);
      }
      if (group) {
        pathGroups.get(group)!.push(page.pathname);
      }
    }
  });

  const docSets: DocSet[] = [];
  const commonSettings = {
    mainSelector: "main",
    ignoreSelectors: ["nav", ".breadcrumb", "footer", "header"],
  };

  // Convert path groups to doc sets
  pathGroups.forEach((paths, group) => {
    if (paths.length > 1) {
      // Only create doc sets for groups with multiple pages
      const title = capitalize(group);
      const description = getDescriptionForGroup(group);

      docSets.push({
        title,
        description,
        url: `/${group}-content.txt`,
        include: [`/${group}/*`],
        promote: getPromotePatterns(group, paths),
        ...commonSettings,
      });
    }
  });

  return docSets;
}

/**
 * Capitalize a string
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Get description for a content group
 */
function getDescriptionForGroup(group: string): string {
  const descriptions: Record<string, string> = {
    blog: "Technical blog posts and articles",
    posts: "Blog posts and articles",
    articles: "Articles and written content",
    projects: "Software development projects and case studies",
    talks: "Conference talks and presentations",
    speaking: "Speaking engagements and presentations",
    docs: "Documentation and guides",
    tutorials: "Tutorials and how-to guides",
    about: "About and personal information",
  };

  return descriptions[group] || `${capitalize(group)} content`;
}

/**
 * Get promote patterns for a group to prioritize important content
 */
function getPromotePatterns(_group: string, paths: string[]): string[] {
  // Look for common important patterns
  const important = paths.filter(
    (path) =>
      path.includes("getting-started") ||
      path.includes("introduction") ||
      path.includes("overview") ||
      path.includes("featured") ||
      path.includes("main"),
  );

  return important;
}

/**
 * Auto-detect external links from the home page
 */
async function autoDetectExternalLinks(
  distDir: string,
): Promise<Array<{ label: string; url: string; description?: string }>> {
  try {
    const homePagePath = path.join(distDir, "index.html");
    await fs.access(homePagePath);

    const html = await fs.readFile(homePagePath, "utf-8");
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const externalLinks: Array<{
      label: string;
      url: string;
      description?: string;
    }> = [];

    // Look for external links in common locations (footer, header, nav)
    const linkElements = doc.querySelectorAll('a[href^="http"]');

    const platformMappings = [
      {
        domain: "github.com",
        label: "GitHub",
        description: "Source code and open source projects",
      },
      {
        domain: "linkedin.com",
        label: "LinkedIn",
        description: "Professional profile and experience",
      },
      {
        domain: "twitter.com",
        label: "Twitter",
        description: "Updates and thoughts",
      },
      { domain: "x.com", label: "X", description: "Updates and thoughts" },
      {
        domain: "instagram.com",
        label: "Instagram",
        description: "Photos and stories",
      },
      {
        domain: "youtube.com",
        label: "YouTube",
        description: "Videos and tutorials",
      },
      { domain: "mastodon", label: "Mastodon", description: "Social updates" },
      { domain: "dev.to", label: "DEV", description: "Technical articles" },
      {
        domain: "medium.com",
        label: "Medium",
        description: "Articles and essays",
      },
    ];

    const seenDomains = new Set<string>();

    linkElements.forEach((link) => {
      try {
        const url = link.getAttribute("href");
        if (!url) return;

        const urlObj = new URL(url);
        const domain = urlObj.hostname.replace(/^www\./, "");

        // Skip if we've already seen this domain
        if (seenDomains.has(domain)) return;

        // Find matching platform
        const platform = platformMappings.find((p) =>
          domain.includes(p.domain),
        );
        if (platform) {
          seenDomains.add(domain);
          externalLinks.push({
            label: platform.label,
            url: url,
            description: platform.description,
          });
        }
      } catch (error) {
        // Skip invalid URLs
      }
    });

    return externalLinks;
  } catch (error) {
    return [];
  }
}

/**
 * Generate all three llms files
 */
async function generateLlmsFiles(
  context: PluginContext,
  logger: any,
): Promise<void> {
  const { config, astroConfig, distDir, pages } = context;
  const collator = new Intl.Collator(astroConfig.i18n?.defaultLocale || "en");

  // Collect all content pages (excluding index pages)
  const contentPages = pages
    .filter((p) => {
      const segments = p.pathname.split("/").filter(Boolean);
      return segments.length > 1; // Has at least one path segment beyond root
    })
    .sort((a, b) => {
      const pa = prioritizePathname(a.pathname, [], []);
      const pb = prioritizePathname(b.pathname, [], []);
      return collator.compare(pa, pb);
    });

  // Auto-detect external links from the home page
  const homePageLinks = await autoDetectExternalLinks(distDir);
  config.optionalLinks = homePageLinks;

  // Process all pages to get both full and structure-only content
  const pageEntries: Array<{
    pathname: string;
    title: string;
    description: string;
    fullContent: string;
    structureContent: string;
  }> = [];

  for (const page of contentPages) {
    const htmlPath = path.join(
      distDir,
      page.pathname.replace(/\/$/, ""),
      "index.html",
    );
    try {
      await fs.access(htmlPath);
      const fullEntry = await buildEntryFromHtml(
        htmlPath,
        "main",
        ["nav", ".breadcrumb", "footer", "header"],
        false,
      );
      const structureEntry = await buildEntryFromHtml(
        htmlPath,
        "main",
        ["nav", ".breadcrumb", "footer", "header"],
        true,
      );

      // Extract title from the full entry
      const titleMatch = fullEntry.match(/^# (.+)/m);
      const title = titleMatch?.[1] ?? "Untitled";

      // Extract description from meta
      const html = await fs.readFile(htmlPath, "utf-8");
      const dom = new JSDOM(html);
      const doc = dom.window.document;
      const metaDesc =
        doc
          .querySelector('meta[name="description"]')
          ?.getAttribute("content")
          ?.trim() || "";

      pageEntries.push({
        pathname: page.pathname,
        title,
        description: metaDesc,
        fullContent: fullEntry,
        structureContent: structureEntry,
      });
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  // 1. Generate llms.txt - primary index
  const indexContent = buildPrimaryIndex(config, astroConfig, pageEntries);
  await fs.writeFile(path.join(distDir, "llms.txt"), indexContent, "utf-8");

  // 2. Generate llms-small.txt - structure only
  const smallContent = buildStructureFile(config, pageEntries);
  await fs.writeFile(
    path.join(distDir, "llms-small.txt"),
    smallContent,
    "utf-8",
  );

  // 3. Generate llms-full.txt - all content
  const fullContent = buildFullFile(config, pageEntries);
  await fs.writeFile(path.join(distDir, "llms-full.txt"), fullContent, "utf-8");

  logger.info("Generated llms.txt, llms-small.txt, and llms-full.txt");
}

/**
 * Build a single entry from an HTML file.
 * @param htmlPath
 * @param onlyStructure
 * @returns
 */
async function buildEntryFromHtml(
  htmlPath: string,
  mainSelector: string = "main",
  ignoreSelectors: string[] = [],
  onlyStructure: boolean,
): Promise<string> {
  const html = await fs.readFile(htmlPath, "utf-8");
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const main = doc.querySelector(mainSelector);
  if (!main) {
    throw new Error(`Missing main selector <${mainSelector}> in ${htmlPath}`);
  }

  const h1 = main.querySelector("h1");
  const title = h1?.textContent?.trim() ?? "Untitled";
  if (h1) h1.remove();

  const metaDesc = doc
    .querySelector('meta[name="description"]')
    ?.getAttribute("content")
    ?.trim();

  const markdown = await entryToSimpleMarkdown(
    main.innerHTML.trim(),
    ["h1", "footer", "header", ...ignoreSelectors],
    onlyStructure,
  );

  const parts = [`# ${title}`];
  if (metaDesc) parts.push(`> ${metaDesc}`);
  parts.push(markdown.trim());

  return parts.join("\n\n");
}

/**
 * Build the primary index file (llms.txt)
 */
function buildPrimaryIndex(
  config: LlmsConfig,
  astroConfig: AstroConfig,
  pageEntries: Array<{
    pathname: string;
    title: string;
    description: string;
    fullContent: string;
    structureContent: string;
  }>,
): string {
  const lines: string[] = [
    `# ${config.title}`,
    config.description ? `> ${config.description}` : "",
    config.details ?? "",
  ];

  // Add structured links to other llms files
  lines.push("## Available Formats");
  lines.push(
    `- [llms-small.txt](${new URL("/llms-small.txt", astroConfig.site)}): Ultra-compact page structure (titles, lists)`,
  );
  lines.push(
    `- [llms-full.txt](${new URL("/llms-full.txt", astroConfig.site)}): Complete documentation in a single file`,
  );

  // Group pages by section
  const sections = new Map<string, typeof pageEntries>();
  pageEntries.forEach((entry) => {
    const section = entry.pathname.split("/")[1];
    if (section && !sections.has(section)) {
      sections.set(section, []);
    }
    if (section) {
      sections.get(section)!.push(entry);
    }
  });

  // Add structured content links
  if (sections.size > 0) {
    lines.push("## Content Structure");
    sections.forEach((entries, section) => {
      const sectionTitle = capitalize(section);
      const description = getDescriptionForGroup(section);
      lines.push(`\n### ${sectionTitle}`);
      lines.push(`> ${description}`);
      entries.forEach((entry) => {
        lines.push(
          `- [${entry.title}](${new URL(entry.pathname, astroConfig.site)}): ${entry.description || "No description"}`,
        );
      });
    });
  }

  if (config.notes) {
    lines.push("## Notes\n\n" + config.notes);
  }

  if (config.optionalLinks?.length) {
    lines.push(
      "## Links\n\n" +
        config.optionalLinks
          .map(
            (l) =>
              `- [${l.label}](${l.url})${l.description ? `: ${l.description}` : ""}`,
          )
          .join("\n"),
    );
  }

  return lines.filter(Boolean).join("\n\n");
}

/**
 * Build the structure-only file (llms-small.txt)
 */
function buildStructureFile(
  config: LlmsConfig,
  pageEntries: Array<{
    pathname: string;
    title: string;
    description: string;
    fullContent: string;
    structureContent: string;
  }>,
): string {
  const lines: string[] = [
    `# ${config.title} - Structure`,
    "Ultra-compact page structure containing only titles, headings, and lists.",
  ];

  pageEntries.forEach((entry) => {
    if (entry.structureContent.trim()) {
      lines.push(entry.structureContent);
      lines.push("---");
    }
  });

  return lines.join("\n\n");
}

/**
 * Build the full content file (llms-full.txt)
 */
function buildFullFile(
  config: LlmsConfig,
  pageEntries: Array<{
    pathname: string;
    title: string;
    description: string;
    fullContent: string;
    structureContent: string;
  }>,
): string {
  const lines: string[] = [
    `# ${config.title} - Complete Documentation`,
    config.description ? `> ${config.description}` : "",
    "This file contains the complete documentation in Markdown format.",
  ];

  pageEntries.forEach((entry) => {
    if (entry.fullContent.trim()) {
      lines.push(entry.fullContent);
      lines.push("---");
    }
  });

  return lines.join("\n\n");
}

/**
 * Prioritize a pathname based on promotion and demotion patterns.
 * @param id
 * @param promote
 * @param demote
 * @returns
 */
function prioritizePathname(
  id: string,
  promote: string[] = [],
  demote: string[] = [],
) {
  const demoted = demote.findIndex((expr) => micromatch.isMatch(id, expr));
  const promoted =
    demoted > -1
      ? -1
      : promote.findIndex((expr) => micromatch.isMatch(id, expr));
  const prefixLength =
    (promoted > -1 ? promote.length - promoted : 0) +
    demote.length -
    demoted -
    1;
  return "_".repeat(prefixLength) + id;
}
