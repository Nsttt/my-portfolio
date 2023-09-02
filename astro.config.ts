import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
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
  integrations: [
    tailwind({
      configFile: "./tailwind.config.cjs",
    }),
    sitemap(),
    prefetch(),
    mdx(),
    solidJs(),
  ],
};

// https://astro.build/config
export default defineConfig(config);
