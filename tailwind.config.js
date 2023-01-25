/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "safety-red": "#e92127",
        "space-caddet": {
          dark: "#293862",
          light: "#D4D7E0",
        },
        "raisin-black": "#1F2233",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
