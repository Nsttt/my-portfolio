import type { APIRoute } from "astro";

const getRobotsTxt = (site: URL) => `\
User-agent: *
Allow: /

Sitemap: ${new URL("sitemap.xml", site).href}
Sitemap: ${new URL("sitemap-index.xml", site).href}
`;

export const GET: APIRoute = ({ site }) => {
  const baseURL = site ?? new URL("https://nstlopez.com");

  return new Response(getRobotsTxt(baseURL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
