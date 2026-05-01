import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import type { AstroUserConfig } from "astro";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import astroLlmsTxt from "./src/integrations/llms-txt";
import { remarkReadingTime } from "./src/utils/getReadingTime";
import { withZephyr } from "zephyr-astro-integration";

const config: AstroUserConfig = {
  site: "https://nstlopez.com",
  output: "server",
  adapter: cloudflare({
    imageService: { build: "compile", runtime: "cloudflare-binding" },
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      rehypeSlug,
      // @ts-ignore
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
    shikiConfig: {
      theme: "vitesse-dark",
    },
  },
  integrations: [
    sitemap(),
    prefetch(),
    mdx(),
    solidJs(),
    astroLlmsTxt(),
    process.env.ZE ? withZephyr() : undefined,
  ],
  vite: {
    plugins: [tailwindcss()],
  },
};

export default defineConfig(config);
