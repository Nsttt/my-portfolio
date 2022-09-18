const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.html", "./src/**/*.{astro,js,ts}"],
  safelist: ["dark"],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", ...fontFamily.sans],
    },
    extend: {
      colors: {
        "black-primary": "#141628",
        "black-secondary": "#1A1D31",
        "feat-primary": "#F8426E",
        "feat-secondary": "#FC96AF",
      },
      typography: (/** @type {(arg0: string) => any} */ theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.200"),
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [
    // @ts-ignore
    require("@tailwindcss/typography"),
  ],
};
