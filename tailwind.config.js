/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./src/*.{html, js}",
    "./src/js/*.js",
    "./src/pages/*.{html, js}"
  ],
  theme: {

    listStyleType: {
      square: 'square',
    },

    screens: {
      '3xl': '1700px',
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

