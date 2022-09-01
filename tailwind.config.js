/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./Components/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'safety-red':'#e92127',
        'calm-blue': '#293862',
        'notebook': '#BEBBBB'
      }
    },
  },
  plugins: [],
}
