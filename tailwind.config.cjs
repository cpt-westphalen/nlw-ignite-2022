/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "gradient-theme": "linear-gradient(90deg, #9572FC 20%, #43E7AD 60%, #E1D55D)",
        "overlay-theme": "linear-gradient(to bottom, transparent, black)",
        "gradient-theme-border": "linear-gradient(to top, #2A2634, #2A2634),linear-gradient(90deg, #9572FC 20%, #43E7AD 60%, #E1D55D)"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      letterSpacing: {
        'tracking-xsm': '-0.02rem'
      },
      borderRadius: {
        '50': '50%'
      }
    },
  },
  plugins: [],
}
