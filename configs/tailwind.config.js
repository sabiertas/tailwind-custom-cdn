const FluidType = require('tailwindcss-fluid-type');
const FluidSpace = require('tailwindcss-fluid-spacing');
const AspectRatio = require('@tailwindcss/aspect-ratio');
const Forms = require('@tailwindcss/forms');
const GridResponsive = require('@shrutibalasa/tailwind-grid-auto-fit');

module.exports = {
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {				
				'body': ['Helvetica', 'Arial', 'sans-serif'],
				'display': ['Tahoma', 'Arial', 'sans-serif'],
			},
			colors: {
				"primary": {
					50: "#EDEDF3",
					100: "#DDDFE8",
					200: "#BCBED2",
					300: "#979BB9",
					400: "#767BA3",
					500: "#5A5F86",
					600: "#484C6B",
					700: "#35384F",
					800: "#252737",
					900: "#12141B"
				},
				"secondary": {
					50: "#F8F8E2",
					100: "#F0F2C5",
					200: "#E1E48B",
					300: "#D1D64D",
					400: "#ADB229",
					500: "#75781C",
					600: "#5D5F16",
					700: "#454610",
					800: "#30320C",
					900: "#181906"
				},
			},
			
			gridAutoFit: {
			 'xxs': '10rem',
			 '2xl': '24rem',
		   },
			
			// ...
		},
		
	},
	plugins: [
		FluidType({
		// your fluid type settings
		// works only with unitless numbers
		// This numbers are the defaults settings
		settings: {
		  fontSizeMin: 1, // 1.125rem === 18px
		  fontSizeMax: 1.1, // 1.25rem === 20px
		  ratioMin: 1.125, // Multiplicator Min
		  ratioMax: 1.175, // Multiplicator Max
		  screenMin: 20, // 20rem === 320px
		  screenMax: 96, // 96rem === 1536px
		  unit: 'rem',
		  prefix: ''
		},
		values: {
			'xs': [-2, 1.6],
			'sm': [-1, 1.6],
			'base': [0, 1.6],
			'lg': [1, 1.6],
			'xl': [2, 1.2],
			'2xl': [3, 1.2],
			'3xl': [4, 1.2],
			'4xl': [5, 1.1],
			'5xl': [6, 1.1],
			'6xl': [7, 1.1],
			'7xl': [8, 1],
			'8xl': [9, 1],
			'9xl': [10, 1],
	   },
	}),
		FluidSpace,
		AspectRatio,
		Forms,
		GridResponsive,
	],
	corePlugins: {
		preflight: true,
	}
}