/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./js/main.js"],
  theme: {
    extend: {
      fontFamily: {
        'circular': ['Circular Std', 'sans-serif'],
      },
      colors: {
        'primary': '#F0544C',
        'secondary': '#5454D4',
        'indigo': '#5454D4'
      }
    }

  },
  plugins: [],
};
