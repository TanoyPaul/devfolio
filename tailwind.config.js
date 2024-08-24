/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
     fontFamily: {
      'machina': ['NeueMachina', 'sans-serif'],
      'monster': ['MontserratAlternates', 'sans-serif']
     }
    },
  },
  plugins: [],
}

