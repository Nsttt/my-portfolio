import rss from "@astrojs/rss";
import type { MarkdownInstance } from "astro";
import dayjs from "dayjs";

import type { PostFrontmatter } from "../types/post.domain";

const postImportResult = import.meta.glob("../content/posts/*.md", {
  eager: true,
});

const posts = Object.values(
  postImportResult,
) as MarkdownInstance<PostFrontmatter>[];

export const get = () =>
  rss({
    title: "Néstor's Blog",
    description: "A humble Astronaut’s guide to the stars",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: `blog/${post.frontmatter.slug}`,
      title: post.frontmatter.title,
      pubDate: dayjs(post.frontmatter.date).toDate(),
    })),
  });
