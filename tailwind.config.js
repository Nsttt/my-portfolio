/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      bebas: ['"Bebas Neue"'],
    },
    extend: {
      colors: {
        'deep-purple': '#301934',
        'light-purple': '#432349',
        'bright-pink': '#d11c54',
        'very-bright-pink': '#ed2e61',
      },
    },
  },
  plugins: [],
};
