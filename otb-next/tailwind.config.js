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
    },
    fontFamily: {
      inter: ["Monserrat", "sans-serif"],
    },
  },
  plugins: [],
};
