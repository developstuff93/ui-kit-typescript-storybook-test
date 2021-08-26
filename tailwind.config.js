module.exports = {
  purge: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      base: "#1b1b1b",
      blue: {
        light: "#59679D",
        dark: "#0076d6",
      },
      gray: {
        light: "#dfe1e2",
        dark: "#a9aeb1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
