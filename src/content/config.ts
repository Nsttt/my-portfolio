import { defineCollection, z } from "astro:content";
// Define a schema for each collection you'd like to validate.
const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subtitle: z.string(),
    link: z.string(),
    source: z.string(),
    pubDate: z.string(),
    image: z.string(),
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
      draft: z.boolean(),
    }),
});

export const collections = {
  projects: projectCollection,
  posts: postCollection,
};
