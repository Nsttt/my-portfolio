import { defineCollection, z } from "astro:content";
// Define a schema for each collection you'd like to validate.
const projectCollection = defineCollection({
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    subtitle: z.string(),
    slug: z.string(),
    link: z.string(),
    source: z.string(),
    pubDate: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectCollection,
};
