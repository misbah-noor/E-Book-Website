/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        moveDown: {
         '0%, 100%': { transform: 'translateY(-2px)' }, 
          '50%': { transform: 'translateY(8px)' },  
        },
      },
      animation: {
        moveDown: 'moveDown 2s ease-in-out infinite', 
      },

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