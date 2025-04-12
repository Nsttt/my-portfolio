import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

// Get all collections
const postsEntries = await getCollection("posts", ({ data }) => !data.draft);
const projectsEntries = await getCollection("projects");
const talksEntries = await getCollection("talks");

// Combine all entries into a pages object
const pages: Record<string, any> = {};

// Add posts
postsEntries.forEach(({ slug, data }) => {
  pages[`blog/${slug}`] = {
    title: data.title,
    description: data.description,
    type: "post",
    image: data.image,
  };
});

// Add projects
projectsEntries.forEach(({ slug, data }) => {
  pages[`projects/${slug}`] = {
    title: data.title,
    description: data.description,
    type: "project",
    image: data.image,
  };
});

// Add talks
talksEntries.forEach(({ slug, data }) => {
  pages[`talks/${slug}`] = {
    title: data.title,
    description: data.description,
    type: "talk",
    image: data.mainImage || (data.images && data.images[0]),
  };
});

// Add index and collection pages
pages["index"] = {
  title: "Néstor López",
  description: "Software Engineer & Tech Speaker",
  type: "home",
};

pages["blog"] = {
  title: "Blog",
  description: "Thoughts, tutorials and insights",
  type: "collection",
};

pages["projects"] = {
  title: "Projects",
  description: "What I've been building",
  type: "collection",
};

pages["talks"] = {
  title: "Talks",
  description: "Conferences and presentations",
  type: "collection",
};

// Generate OG images for all pages
export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages,
  getImageOptions: (_route, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: "./public/logo.svg",
      size: [80],
    },
    bgGradient: [[0, 0, 0]], // Black background
    border: {
      color: [255, 255, 255], // White border
      width: 4,
      side: "inline-start",
    },
    padding: 60,
    font: {
      title: {
        families: ["Satoshi"],
        size: 70,
        weight: "Bold",
        color: [255, 255, 255],
      },
      description: {
        families: ["Satoshi"],
        size: 40,
        weight: "Normal",
        color: [200, 200, 200],
      },
    },
    fonts: [
      "./public/fonts/Satoshi-Variable.woff2",
    ],
  }),
});