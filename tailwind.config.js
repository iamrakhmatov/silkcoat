module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FDEDCC",
          100: "#FDE4B3",
          200: "#FCDB99",
          300: "#FCD380",
          400: "#FBCA67",
          500: "#FAC14D",
          600: "#FAB834",
          700: "#F9AF1B",
          800: "#F9A702",
          900: "#E09601",
        },
        secondary: "#373C44",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
