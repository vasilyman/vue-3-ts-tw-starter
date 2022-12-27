/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      white: '#fff',
      gray: '#E4E4E4',
      gray2: '#959595',
      red: '#FF6B00',
    },
    extend: {},
  },
  plugins: [],
}