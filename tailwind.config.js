import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { transform: '1' },
        }
      },
      animation: {
        appear: 'appear 1s ease-in-out linear'
      }
    },
  },
  plugins: [
    daisyui,
  ],
}