/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./src/*.{html, js}",
    "./src/js/*.js",
    "./src/pages/*.{html, js}"
  ],
  theme: {

    screens: {
      'desk': '1650px',
      ...defaultTheme.screens
    },


    extend: {},

    fontFamily: {
      'Grtsk': ['Grtsk']
    }
  },
  plugins: [],
}

