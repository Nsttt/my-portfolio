module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        tabWidth: 2,
        semi: true,
        trailingComma: "es5",
        parser: "astro",
      },
    },
  ],
};
