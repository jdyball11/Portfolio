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
        'transparent-b': 'rgba(0, 0, 0, 0.5)'
      },
      fontFamily: {
        'patrick-hand': ['"Patrick Hand"', 'cursive']
      }
    },
  },
  plugins: [],
}
