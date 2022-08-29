module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        printWidth: 80,
        useTabs: false,
        tabWidth: 2,
        semi: true,
        trailingComma: "all",
        parser: "astro",
      },
    },
  ],
};
