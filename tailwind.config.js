/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "white": "#fffffe",
      "gray": "#eff0f3",
      "black": "#0d0d0d",
      "brown": "#2a2a2a",
      "headline": "#0d0d0d",
      "paragraph": "#2a2a2a",
      "button": "#ff8e3c",
      "button-focus":"#ea580c",
      "focus": "#ff8e3c"
    },
    extend: {
      gridTemplateRows: {
        '3': '50px 1fr 50px'
      }, gridTemplateColumns: {
        '3': '2px 1fr 2px'
      }
    },
  },
  plugins: [],
}
