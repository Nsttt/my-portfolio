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

const talkCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      place: z.string(),
      lang: z.string(),
      mainImage: image().refine((img) => img.width >= 1080, {
        message: "Image width must be at least 1080px",
      }),
      images: z.array(
        image().refine((img) => img.width >= 1080, {
          message: "Image width must be at least 1080px",
        }),
      ),
      pubDate: z.string(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  projects: projectCollection,
  posts: postCollection,
  talks: talkCollection,
};
