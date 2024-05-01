/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",

      },
    },
    fontFamily: {
      sans: [ '"Mona Sans"', '"Plus Jakarta Sans"',"sans-serif"],
      'mona-sans': ['"Mona Sans"', "sans-serif"],
      'plus-jakarta-sans': ['"Plus Jakarta Sans"', "sans-serif"],
  
    },
  },
  plugins: [require("daisyui")],
}