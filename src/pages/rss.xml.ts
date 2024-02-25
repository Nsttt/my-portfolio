import rss, { type RSSOptions } from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export async function GET(context: RSSOptions) {
  const blog = await getCollection("posts");
  const projects = await getCollection("projects");

  const combined = [...blog, ...projects].sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
  );

  // Sort combined array by pubDate
  return rss({
    title: "Néstor's Blog",
    description: "Writing about software development in TypeScript and Rust.",
    site: context.site,
    items: combined.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: new Date(item.data.pubDate),
      link:
        item.collection === "posts"
          ? `/blog/${item.slug}`
          : `/projects/${item.slug}`,
      content: sanitizeHtml(parser.render(item.body)),
    })),
  });
}
