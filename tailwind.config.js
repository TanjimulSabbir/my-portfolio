/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '800px',
      'mid-lg': '1000px',
      'lg': '1200px',
      'xl': '1460px',
      '2xl': '1660px',
    },
    extend: {
      fontFamily:{
        "Calibre":"Heebo, sans-serif",
        "Fira-Mono":"Fira Mono, monospace",
      },
      colors: {
        custom: {
          BgColor:"#8892b0",
          TitleColor: '#ccd6f6',
          SubTitleColor:"#8892b0",
          highLightTextColor:"#64ffda",
          InfoBgColor:"#a8b2d1",
          afterHoverTextColor:"#64ffda"
        },
      },
    },
  },
  plugins: [require("daisyui")],
}