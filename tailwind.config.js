module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
    inset: {
      0: 0,
      230: "230px",
      700: "700px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
