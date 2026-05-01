import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

type SitemapEntry = {
  path: string;
  lastmod: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
};

const xmlEscape = (value: string) =>
  value.replace(
    /[<>&'"]/g,
    (character) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[character] ?? character,
  );

const buildDate = new Date();

const toLastmodDate = (value: Date | string) => {
  const date = value instanceof Date ? value : new Date(value);
  const lastmod = date > buildDate ? buildDate : date;

  return lastmod.toISOString().slice(0, 10);
};

const latestDate = (entries: SitemapEntry[]) =>
  entries.map((entry) => entry.lastmod).sort((a, b) => b.localeCompare(a))[0] ??
  toLastmodDate(buildDate);

const renderURL = (baseURL: URL, entry: SitemapEntry) => {
  const loc = new URL(entry.path, baseURL).href;
  const changefreq = entry.changefreq
    ? `\n    <changefreq>${entry.changefreq}</changefreq>`
    : "";
  const priority = entry.priority
    ? `\n    <priority>${entry.priority}</priority>`
    : "";

  return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>${changefreq}${priority}
  </url>`;
};

export const GET: APIRoute = async ({ site }) => {
  const baseURL = site ?? new URL("https://nstlopez.com");
  const [posts, projects, talks, tips] = await Promise.all([
    getCollection("posts", ({ data }) => !data.draft),
    getCollection("projects"),
    getCollection("talks"),
    getCollection("tips"),
  ]);

  const contentEntries: SitemapEntry[] = [
    ...posts.map((post) => ({
      path: `/blog/${post.id}/`,
      lastmod: toLastmodDate(post.data.pubDate),
      changefreq: "monthly" as const,
    })),
    ...projects.map((project) => ({
      path: `/projects/${project.id}/`,
      lastmod: toLastmodDate(project.data.pubDate),
      changefreq: "monthly" as const,
    })),
    ...talks.map((talk) => ({
      path: `/talks/${talk.id}/`,
      lastmod: toLastmodDate(talk.data.pubDate),
      changefreq: "monthly" as const,
    })),
    ...tips.map((tip) => ({
      path: `/tips/${tip.id}/`,
      lastmod: toLastmodDate(tip.data.date),
      changefreq: "monthly" as const,
    })),
  ];

  const indexLastmod = latestDate(contentEntries);
  const entries: SitemapEntry[] = [
    {
      path: "/",
      lastmod: indexLastmod,
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      path: "/blog/",
      lastmod: indexLastmod,
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      path: "/talks/",
      lastmod: indexLastmod,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      path: "/projects/",
      lastmod: indexLastmod,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      path: "/tips/",
      lastmod: indexLastmod,
      changefreq: "weekly",
      priority: "0.8",
    },
    ...contentEntries,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((entry) => renderURL(baseURL, entry)).join("\n")}
</urlset>
`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
