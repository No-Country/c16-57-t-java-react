/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        "light": {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#677B58",
          "secondary": "#FEBE98",
          "accent": "#095012",
          "neutral": "#2D3748",
          "primary-content": "#FFFFFF",
          "background": "#F6F6F6",
        },
      },
    ],
  },
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

  