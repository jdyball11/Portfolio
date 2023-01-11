/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown-rgba': 'rgba(205,178,161,1.00)',
        'db-rgba': 'rgba(81, 70, 68, 1)',
        'yb-rgba': 'rgba(163, 132, 44, 1)',
        'transparent-b': 'rgba(0, 0, 0, 0.5)',
        'green-rgba': 'rgba(203, 209, 143, 1)',
        'yellowish': 'rgba(227, 180, 72, 1)',
        'orange': 'rgba(255, 163, 81, 1)',
        'tan': 'rgba(224, 169, 109, 1)',
        'peach': 'rgba(241, 172, 136, 1)',
        'apple': 'rgba(120, 57, 55, 1)',
        'coral': 'rgba(252, 118, 106, 1)',
        'sage': 'rgba(58, 107, 53, 1)',
        'brown-black': 'rgba(32, 30, 32, 1)',
        'dark-brown': 'rgba(181, 123, 69, 1)'
        
      },
      fontFamily: {
        'Source-code': ['"Amatic SC"', 'cursive']
      }
    },
  },
  plugins: [],
}
