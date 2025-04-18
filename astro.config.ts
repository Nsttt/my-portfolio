import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import type { AstroUserConfig } from "astro";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkReadingTime } from "./src/utils/getReadingTime";

const config: AstroUserConfig = {
  site: "https://nstlopez.com",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypeAutolinkHeadings],
    shikiConfig: {
      theme: "vitesse-dark",
    },
  },
  integrations: [sitemap(), prefetch(), mdx(), solidJs()],
  vite: {
    plugins: [tailwindcss()],
  },
};

export default defineConfig(config);
