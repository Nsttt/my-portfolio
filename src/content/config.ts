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
      image: image().refine((img) => img.width >= 1080, {
        message: "Image width must be at least 1080px",
      }),
      tags: z.array(z.string()),
    }),
});

const postCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().refine((img) => img.width >= 1080, {
        message: "Image width must be at least 1080px",
      }),
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

export const collections = {
  projects: projectCollection,
  posts: postCollection,
};
