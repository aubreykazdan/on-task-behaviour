module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        // headings
        purple: "#9588A8",
        // background colour
        beige: "#F5EDD6",
        lightPurple: "#F5F5FF",
        lightGray: "#f2f2f2",
        white: "#ffffff",
        accent: {
          darkest: "#3F223B",
          dark: "#6D2964",
          DEFAULT: "#252028",
          hover: "#4C1C69",
          light: "#F49FE8",
          lightest: "#f9fafb",
        },
      },
      fontFamily: {
        inter: ["Monserrat", "sans-serif"],
      },
      maxWidth: {
        600: 600,
        1000: 1000,
      },
      maxHeight: {
        600: 600,
        1000: 1000,
      },
      minWidth: {
        500: 500,
        600: 600,
      },
      minHeight: {
        300: 300,
        500: 500,
        600: 600,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
