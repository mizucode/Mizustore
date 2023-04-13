/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			fontFamily: {
				poppins: ["Poppins"],
			},
			colors: {
				biru: "#62deff",
				birumuda: "#97deff",
				abu: "#454545",
				kuning: "#ffd93d",
				dark: "#232323",
			},
			screens: {
				"2xl": "1320px",
			},
		},
		plugins: [],
	},
};
