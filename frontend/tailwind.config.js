// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        global_yellow: "#FCB600",
        global_green: "#20D472",
        global_silver: "#EDEFF3",
        global_text_color: "#2D3A45",
      },
      fontFamily: {
        Noto: "Noto Sans",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
