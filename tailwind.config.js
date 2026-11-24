/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { bg: '#0b0c0f', surface: '#16171c', brand: '#14915a', star: '#facc15' },
    },
  },
  plugins: [],
};
