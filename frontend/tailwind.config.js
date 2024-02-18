/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        '#095012':'#095012',
      },
      fontFamily:{
        custom:['Rubik','sans-serif']
      }
    },
  },
  plugins: [require(".pnpm/daisyui@4.7.2_postcss@8.4.35/node_modules/daisyui")],
}

  