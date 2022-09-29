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
        'raisin-black': '#1F2233',
        'laurel': '#BAD2B2',
        'mountbatten': '#94849B'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
