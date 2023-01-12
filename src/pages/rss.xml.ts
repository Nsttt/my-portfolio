import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Néstor's Blog",
    description: "",
    site: import.meta.env.SITE,
    items: import.meta.glob("./blog/**/*.{md,mdx}"),
  });
