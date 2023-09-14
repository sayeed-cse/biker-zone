/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        clifford: "#da373d",
        bikePrimary: "#E76F51",
        sliderBackground:"rgba(231, 111, 81, 0.10)",
      } 

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["aqua", "dark", "light"],
  },
}

