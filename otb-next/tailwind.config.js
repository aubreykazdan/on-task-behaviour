module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    namedGroups: ["one", "two", "three"],
    colors: {
      black: "#000000",
      // headings
      purple: "#9588A8",
      // background colour
      beige: "#F5EDD6",
      lightPurple: "#F5F5FF",
      lightGray: "#f2f2f2",
      white: "#ffffff",
    },
    fontFamily: {
      inter: ["Monserrat", "sans-serif"],
    },
    extend: {
      maxWidth: {
        600: 600,
      },
      maxHeight: {
        600: 600,
      },
      minWidth: {
        600: 600,
      },
      minHeight: {
        300: 300,
        500: 500,
        600: 600,
      },
    },
  },
  plugins: [],
};
