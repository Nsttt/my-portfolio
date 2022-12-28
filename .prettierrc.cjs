/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        arrowParens: "always",
        printWidth: 80,
        singleQuote: false,
        jsxSingleQuote: false,
        semi: true,
        trailingComma: "all",
        tabWidth: 2,
        parser: "astro",
      },
    },
  ],
  tailwindConfig: "./tailwind.config.cjs",
};
