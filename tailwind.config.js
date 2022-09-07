/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    fontFamily:{
      'body':['"League Spartan"', ],
      'display':['"Antonio"', ]
    },
    
    extend: {
      backgroundImage:{
        'star-cover':"url(../public/images/background-stars.svg)"
      }
    },
  },
  plugins: [],
}