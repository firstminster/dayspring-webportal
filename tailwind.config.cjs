/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./dist/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#149AF6",
      },
      fontFamily: {
        sans: ["Work Sans"],
      },
    },
  },
  plugins: [],
};
