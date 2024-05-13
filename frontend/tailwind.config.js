/** @type {import('tailwindcss').Config} */
import { dark, light } from "@mui/material/styles/createPalette";
import keepPreset from "keep-react/preset";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        lightcolor:"#ffffff",
        darkcolor:"#333333",
      },
    },
    fontFamily: {
      sans: [ '"Mona Sans"', '"Plus Jakarta Sans"',"sans-serif"],
      'mona-sans': ['"Mona Sans"', "sans-serif"],
      'plus-jakarta-sans': ['"Plus Jakarta Sans"', "sans-serif"],
  
    },
  },
  plugins: [require("daisyui")],
  presets: [keepPreset],
}