/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '10%' : '10%',  
    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'], 
      barlow : ['Barlow', 'sans-serif'],
      londrina : ["Londrina Outline", 'sans-serif'],
      roboto : ['Roboto', 'sans-serif']
    },
  },
  },
  plugins: [],
}