/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        galaxy: "url('./bg-galaxy.png')",
        "gradient-theme": "linear-gradient(90deg, #9572FC 13.08%, #43E7AD 78.94%, #E1D55D 10.57%)",
        "overlay-theme": "linear-gradient(to bottom, transparent, black)"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      letterSpacing: {
        'tracking-xsm': '-0.02rem'
      }
      
    },
  },
  plugins: [],
}
