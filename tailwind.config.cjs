/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#6664FF',
        'premium': '#FAB819'
      },
      fontFamily: [
        "poppins"
      ]
    },
  },
  plugins: [],
}
