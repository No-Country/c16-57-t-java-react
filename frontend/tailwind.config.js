/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:['Rubik','sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

  