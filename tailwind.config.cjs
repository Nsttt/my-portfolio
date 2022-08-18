const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.html", "./src/**/*.{astro,js,ts}"],
  safelist: ["dark"],
  theme: {
    colors: {
      ...colors,
      primary: colors.purple[700],
      primaryDark: colors.purple[300],
      primarySecondary: colors.purple[800],
      primarySecondaryDark: colors.purple[500],
    },
    fontFamily: {
      sans: ["Iter", ...fontFamily.sans],
    },
    extend: {
      typography: (/** @type {(arg0: string) => any} */ theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.200"),
          },
        },
        "deep-purple": "#301934",
        "light-purple": "#432349",
        "bright-pink": "#d11c54",
        "very-bright-pink": "#ed2e61",
      }),
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [
    // @ts-ignore
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // @ts-ignore
    require("@tailwindcss/line-clamp"),
    // @ts-ignore
    require("@tailwindcss/aspect-ratio"),
  ],
};
