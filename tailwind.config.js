const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,}",
    "./src/sections/**/*.{js,ts,jsx,tsx,}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        Cblue: "#1165F6",
      },
      fontSize: {
        C4xl: ["35px", "40px"],
      },
      borderRadius: {
        Cradiu: "5px",
      },
      backgroundImage: {
        backGround: "url('./backGround.webp')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
