import rss, { type RSSOptions } from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export async function GET(context: RSSOptions) {
  const blog = await getCollection("posts");
  const projects = await getCollection("projects");
  const talks = await getCollection("talks");

  const combined = [...blog, ...projects, ...talks].sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
  );

  // Sort combined array by pubDate
  return rss({
    title: "Néstor's Blog",
    description:
      "Writing about software architecture, functional programming, and systems design.",
    site: context.site,
    items: combined.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: new Date(item.data.pubDate),
      link:
        item.collection === "posts"
          ? `/blog/${item.slug}`
          : item.collection === "projects"
            ? `/projects/${item.slug}`
            : `/talks/${item.slug}`,
      content: item.body ? sanitizeHtml(parser.render(item.body)) : item.data.description,
    })),
  });
}
