module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          dark: "#355070",
          DEFAULT: "#e56b6f",
          hover: "#6D597A",
          light: "#e56b6f",
          lightest: "#eaac8b",
          blue: "#548cd2",
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
