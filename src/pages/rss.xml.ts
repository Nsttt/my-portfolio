import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export const get = async () =>
  rss({
    title: "Néstor's Blog",
    description: "",
    site: import.meta.env.SITE,
    items: await pagesGlobToRssItems(import.meta.glob("./blog/**/*.{md,mdx}")),
  });
