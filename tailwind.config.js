/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#01C3CC",
        secondary: "#02367F"
      }
    },
  },
  plugins: [],
}