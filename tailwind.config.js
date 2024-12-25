/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #01B4E4, #0D253F)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: '2px 0px 90px 4px #6100C2', // X, Y, Blur, Spread, Color
      },
    },
  },
  plugins: [],
}