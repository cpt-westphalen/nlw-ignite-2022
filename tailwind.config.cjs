/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "420px",
			...defaultTheme.screens,
		},
		extend: {
			backgroundImage: {
				"gradient-theme":
					"linear-gradient(90deg, #9572FC 20%, #43E7AD 60%, #E1D55D)",
				"overlay-theme":
					"linear-gradient(to bottom, transparent, black)",
				"gradient-theme-border":
					"linear-gradient(to top, #2A2634, #2A2634),linear-gradient(90deg, #9572FC 20%, #43E7AD 60%, #E1D55D)",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},
			letterSpacing: {
				"tracking-xsm": "-0.02rem",
			},
			borderRadius: {
				50: "50%",
			},
			animation: {
				"fadein-top": "fade 0.2s ease-out 1 forwards",
				"slidein-top": "slide 0.4s ease-out 1 forwards",
			},
			keyframes: {
				fade: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slide: {
					"0%": { transform: "translateY(-35%)" },
					"100%": { transform: "translateY(0)" },
				},
			},
		},
	},
	plugins: [],
};
