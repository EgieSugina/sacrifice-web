const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  plugins: [require("flowbite/plugin")],
  content: [
    // ...
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  purge: ["./src/**/*.js", "./public/index.html"],
  // purge: {
  //   enabled: true,
  //   content: [
  //     "./public/**/*.html",
  //     "./public/*.html",
  //     "./src/**/*.js",
  //     "./src/*.js",
  //     "./src/**/*.html",
  //     "./src/*.html",
  //     "./public/**/*.js",
  //     "./public/*.js",
  //   ],
  //   options: {
  //     safelist: [],
  //   },
  // },
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
