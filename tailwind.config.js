/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}