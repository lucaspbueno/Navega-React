/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '14px': '14px',
        '15px': '15px',
      },
      height: {
        '1349px': '1349px',
      },
      colors: {
        'other-blue': '#0e142f',
      },
    },
  },
  plugins: [require("daisyui")],
}