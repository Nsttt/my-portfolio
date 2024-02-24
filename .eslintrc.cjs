/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "plugin:astro/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["@typescript-eslint", "tailwindcss", "simple-import-sort"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    extraFileExtensions: [".astro"],
  },
  settings: {
    tailwindcss: {
      config: "tailwind.config.cjs",
    },
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "^Props",
      },
    ],
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      files: ["*.mjs", "*.cjs"],
      // rules: {
      //   "@typescript-eslint/require-await": "off",
      //   "@typescript-eslint/restrict-plus-operands": "off",
      //   "@typescript-eslint/restrict-template-expressions": "off",
      //   "@typescript-eslint/unbound-method": "off",
      //   "@typescript-eslint/no-implied-eval": "off",
      //   "@typescript-eslint/no-misused-promises": "off",
      //   "@typescript-eslint/no-unnecessary-type-assertion": "off",
      //   "@typescript-eslint/await-thenable": "off",
      //   "@typescript-eslint/no-floating-promises": "off",
      //   "@typescript-eslint/prefer-nullish-coalescing": "off",
      //   "@typescript-eslint/prefer-optional-chain": "off",
      //   "@typescript-eslint/prefer-reduce-type-parameter": "off",
      //   "@typescript-eslint/prefer-return-this-type": "off",
      //   "@typescript-eslint/prefer-string-starts-ends-with": "off",
      //   "@typescript-eslint/prefer-includes": "off",
      //   "@typescript-eslint/non-nullable-type-assertion-style": "off",
      //   "@typescript-eslint/no-throw-literal": "off",
      //   "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
      //   "@typescript-eslint/no-unnecessary-condition": "off",
      //   "@typescript-eslint/no-unnecessary-type-arguments": "off",
      //   "@typescript-eslint/no-meaningless-void-operator": "off",
      //   "@typescript-eslint/dot-notation": "off",
      //   "@typescript-eslint/no-base-to-string": "off",
      // },
    },
  ],
};
