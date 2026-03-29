import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      subtitle: z.string(),
      link: z.string(),
      source: z.string(),
      pubDate: z.string(),
      image: image(),
      tags: z.array(z.string()),
    }),
});

const postCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      pubDate: z.string(),
      expectedReadTime: z.number(),
      tags: z.array(z.string()),
      revised_by: z
        .array(
          z.object({
            name: z.string(),
            link: z.string(),
          }),
        )
        .optional(),
      draft: z.boolean(),
    }),
});

const talkCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/talks" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      place: z.string(),
      lang: z.string(),
      mainImage: image().optional(),
      images: z.array(image()).optional(),
      pubDate: z.string(),
      tags: z.array(z.string()),
    }),
});

const tipsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/tips" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectCollection,
  posts: postCollection,
  talks: talkCollection,
  tips: tipsCollection,
};
