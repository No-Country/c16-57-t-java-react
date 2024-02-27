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
          "primary-content": "#FFFFFF",
          "secondary": "#FEBE98",
          "secondary-content": "#FFFFFF",
          "neutral": "#A9C5AE",
          "neutral-content": "#095012",
          "neutral-100": "#D5DFD7",
          "accent": "#095012",
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
        custom:['Montserrat','sans-serif']
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  plugins: [
    require(".pnpm/daisyui@4.7.2_postcss@8.4.35/node_modules/daisyui"),
    require("tailwindcss-animate"),
  ],
}

  