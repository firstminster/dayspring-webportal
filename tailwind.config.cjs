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
        "blue-primary": "#149AF6",
        "blue-dark": "#107bc4",
        "blue-light": "#D8EEFF",
        jet: "#333",
        "sonic-silver": "#6c757d",
        "maximum-yellow-red": "#fdbb38",
        "navajo-white": "#FFDCA1",
        "misty-rose": "#fde2d9",
        "outrageous-orange": "#F46941",
        "lavender-web": "#E2E1FE",
        "medium-slate-blue": "#6D6BF9",
      },
      fontFamily: {
        sans: ["Work Sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
