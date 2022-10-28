/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./dist/*.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
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
        "green-pantone": "#27AE48",
        honeydew: "#E0EFE6",
        "medium-orchid": "#B14AED",
        "rusty-red": "#D83246",
        "jungle-green": "#00B18A",
        "gray-x-11-gray": "#BDBDBD",
        "light-sky-blue": "#99D5FF",
      },
      fontFamily: {
        sans: ["Work Sans"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
  ],
};
