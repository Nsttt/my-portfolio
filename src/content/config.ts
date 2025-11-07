import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
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
  type: "content",
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
