import { POSTHOG_PROXY_PATH } from "./utils/posthog";

const POSTHOG_ROUTE = new RegExp(`^${POSTHOG_PROXY_PATH}/(eu|us)(/.*)?$`);

const DISCOVERY_LINKS = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</.well-known/openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</llms.txt>; rel="service-doc"; type="text/markdown"',
  '</.well-known/agent-skills/index.json>; rel="describedby"; type="application/json"',
].join(", ");

const HTML_ENTITIES: Record<string, string> = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: '"',
};

const wantsMarkdown = (request: Request) =>
  request.headers
    .get("accept")
    ?.split(",")
    .some((value) => value.trim().toLowerCase().startsWith("text/markdown")) ??
  false;

const isHTML = (response: Response) =>
  response.headers.get("content-type")?.includes("text/html") ?? false;

const contentTypeForPath = (pathname: string) => {
  if (pathname === "/.well-known/api-catalog") {
    return "application/linkset+json; charset=utf-8";
  }

  if (pathname.endsWith("/SKILL.md")) {
    return "text/markdown; charset=utf-8";
  }

  return undefined;
};

const decodeEntities = (value: string) =>
  value.replace(/&(#x[0-9a-f]+|#[0-9]+|[a-z]+);/gi, (entity, code) => {
    const normalized = String(code).toLowerCase();

    if (normalized.startsWith("#x")) {
      return String.fromCodePoint(Number.parseInt(normalized.slice(2), 16));
    }

    if (normalized.startsWith("#")) {
      return String.fromCodePoint(Number.parseInt(normalized.slice(1), 10));
    }

    return HTML_ENTITIES[normalized] ?? entity;
  });

const stripTags = (html: string) =>
  decodeEntities(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

const absolutizeURL = (href: string, baseURL: URL) => {
  try {
    return new URL(href, baseURL).href;
  } catch {
    return href;
  }
};

const inlineMarkdown = (html: string, baseURL: URL) =>
  stripTags(
    html
      .replace(
        /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
        (_, href: string, label: string) => {
          const text = stripTags(label);
          return text ? `[${text}](${absolutizeURL(href, baseURL)})` : "";
        },
      )
      .replace(
        /<img\b[^>]*alt=["']([^"']*)["'][^>]*>/gi,
        (_, alt: string) => (alt ? ` ${alt} ` : " "),
      ),
  );

const extractTitle = (html: string) =>
  stripTags(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");

const extractDescription = (html: string) =>
  decodeEntities(
    html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i)?.[1] ??
      "",
  );

const htmlToMarkdown = (html: string, requestURL: URL) => {
  const title = extractTitle(html);
  const description = extractDescription(html);
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  const withoutNoise = main
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");

  const markdown = withoutNoise
    .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level: string, body: string) => {
      return `\n\n${"#".repeat(Number(level))} ${inlineMarkdown(body, requestURL)}\n\n`;
    })
    .replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_, body: string) => {
      return `\n\n${inlineMarkdown(body, requestURL)}\n\n`;
    })
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, body: string) => {
      return `\n- ${inlineMarkdown(body, requestURL)}`;
    })
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(section|article|div|ul|ol|nav|header|footer)>/gi, "\n\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return [
    "---",
    `title: ${JSON.stringify(title || "Nestor Lopez")}`,
    `url: ${JSON.stringify(requestURL.href)}`,
    description ? `description: ${JSON.stringify(description)}` : undefined,
    "---",
    "",
    markdown,
    "",
  ]
    .filter((line): line is string => line !== undefined)
    .join("\n");
};

const withDiscoveryHeaders = (request: Request, response: Response) => {
  const headers = new Headers(response.headers);
  const contentType = contentTypeForPath(new URL(request.url).pathname);

  headers.set("Link", DISCOVERY_LINKS);
  headers.set("Content-Signal", "ai-train=no, search=yes, ai-input=yes");
  if (contentType) {
    headers.set("Content-Type", contentType);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

const markdownResponse = async (request: Request, response: Response) => {
  const requestURL = new URL(request.url);
  const markdown = htmlToMarkdown(await response.text(), requestURL);
  const headers = new Headers(response.headers);

  headers.set("Content-Type", "text/markdown; charset=utf-8");
  headers.set("Vary", "Accept");
  headers.set("Link", DISCOVERY_LINKS);
  headers.set("Content-Signal", "ai-train=no, search=yes, ai-input=yes");
  headers.set("X-Markdown-Tokens", String(markdown.split(/\s+/).filter(Boolean).length));
  headers.delete("Content-Length");

  return new Response(markdown, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

interface PosthogUpstream {
  url: string;
  isAsset: boolean;
}

const posthogUpstream = (requestURL: URL): PosthogUpstream | undefined => {
  const [, region, path = "/"] = requestURL.pathname.match(POSTHOG_ROUTE) ?? [];

  if (!region) {
    return undefined;
  }

  // The SDK bundle and remote config live on PostHog's asset host; everything
  // else (events, flags) goes to the ingestion host.
  const isAsset = path.startsWith("/static/") || path.startsWith("/array/");
  const host = isAsset
    ? `${region}-assets.i.posthog.com`
    : `${region}.i.posthog.com`;

  return { url: `https://${host}${path}${requestURL.search}`, isAsset };
};

const proxyPosthog = async (
  request: Request,
  upstream: PosthogUpstream,
  ctx: ExecutionContext,
) => {
  if (upstream.isAsset && request.method === "GET") {
    // tsconfig loads DOM types next to the Workers ones, and DOM's
    // CacheStorage has no `default`.
    const edgeCache = (caches as unknown as { default: Cache }).default;
    const cached = await edgeCache.match(request);

    if (cached) {
      return cached;
    }

    const response = await fetch(upstream.url);

    if (response.ok) {
      ctx.waitUntil(edgeCache.put(request, response.clone()));
    }

    return response;
  }

  const headers = new Headers(request.headers);
  const hasBody = request.method !== "GET" && request.method !== "HEAD";

  // Site cookies and credentials are none of PostHog's business.
  headers.delete("cookie");
  if (!/^Bearer ph[csx]_/.test(headers.get("authorization") ?? "")) {
    headers.delete("authorization");
  }
  // Cookieless mode counts visitors from a server-side hash of the client IP,
  // so PostHog has to see the visitor's address rather than the Worker's.
  headers.set("X-Forwarded-For", request.headers.get("CF-Connecting-IP") ?? "");

  return fetch(upstream.url, {
    method: request.method,
    headers,
    body: hasBody ? await request.arrayBuffer() : null,
    redirect: request.redirect,
  });
};

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const upstream = posthogUpstream(new URL(request.url));

    if (upstream) {
      return proxyPosthog(request, upstream, ctx);
    }

    const response = await env.ASSETS.fetch(request);

    if (wantsMarkdown(request) && isHTML(response)) {
      return markdownResponse(request, response);
    }

    return withDiscoveryHeaders(request, response);
  },
};
