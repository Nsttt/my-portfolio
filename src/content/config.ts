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
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    pubDate: z.string(),
    expectedReadTime: z.number(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectCollection,
  posts: postCollection,
};
