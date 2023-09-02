import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
const parser = new MarkdownIt();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(context: any) {
  const blog = await getCollection("posts");

  return rss({
    title: "Néstor's Blog",
    description: "Writting about software development in Typescript and Rust.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDate),
      link: `/blog/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
  });
}
