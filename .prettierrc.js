module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
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
