const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  important: true,
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
      'xs': '375px',
      ...defaultTheme.screens,
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
