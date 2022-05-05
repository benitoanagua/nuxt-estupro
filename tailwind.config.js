// const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./assets/**/*.scss",
    "./assets/**/*.css",
  ],
  theme: {
    fontSize: {
      xs: ["0.75rem", "155%"],
      sm: ["0.875rem", "150%"],
      base: ["1rem", "145%"],
      lg: ["1.125rem", "140%"],
      xl: ["1.25rem", "135%"],
      "2xl": ["1.5rem", "130%"],
      "3xl": ["1.875rem", "125%"],
      "4xl": ["2rem", "120%"],
      "5xl": ["2.25rem", "115%"],
      "6xl": ["2.5rem", "110%"],
      "7xl": ["2.75rem", "105%"],
      "8xl": ["3rem", "100%"],
    },
    extend: {
      fontFamily: {
        sans: ["Monda", ...defaultTheme.fontFamily.sans],
        serif: ["Inika", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
