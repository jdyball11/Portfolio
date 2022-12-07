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
        'db-rgba': 'rgba(81, 70, 68, 1)'
      },
      fontFamily: {
        'patrick-hand': ['"Patrick Hand"', 'cursive']
      }
    },
  },
  plugins: [],
}
