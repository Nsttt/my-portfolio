import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import type { AstroUserConfig } from "astro";
import { defineConfig } from "astro/config";
import path from "path";

const config: AstroUserConfig = {
  // outDir: './dist',       // When running `astro build`, path to final static output
  // publicDir: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  site: "https://nstlopez.com",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
  ],
  vite: {
    plugins: [],
    resolve: {
      alias: {
        "@constants": path.resolve("./src/constants"),
        "@components": path.resolve("./src/components"),
        "@layouts": path.resolve("./src/layouts"),
        "@pages": path.resolve("./src/pages"),
        "@styles": path.resolve("./src/styles"),
        "@utils": path.resolve("./src/utils"),
        "@store": path.resolve("./src/store"),
      },
    },
  },
};

export default defineConfig(config);
