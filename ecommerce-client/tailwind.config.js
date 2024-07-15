/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#7e33e0",
        "primary-dark1": "#2f1ac4",
        "primary-dark": "#151875",
        "primary-darker": "#0d0e43",
        "pramary-light": "#8A8FB9",
        secondary: "#FB2E86",
      }
      
    },
  },
  plugins: [],
}