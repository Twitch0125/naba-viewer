const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui:{
    themes: ['winter'],
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui"), require('@headlessui/tailwindcss')],
};
