/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'primary': {
					'50': '#f1f9fe',
					'100': '#e1f1fd',
					'200': '#bde3fa',
					'300': '#83cef6',
					'400': '#39b2ef',
					'500': '#189bdf',
					'600': '#0b7cbe',
					'700': '#0a639a',
					'800': '#0d547f',
					'900': '#10466a',
					'950': '#0b2c46',
				},
			},
			keyframes: {
				open: {
					'0%': {left: '-100%'},
					'100%': {left: '0'},
				},
				close: {
					'0%': {left: '0'},
					'100%': {left: '-100%'},
				}
			},
			animation: {
				'open-sidebar': 'open 0.5s ease-in-out forwards',
				'close-sidebar': 'close 0.5s ease-in-out forwards',
			}
		},
	},
	plugins: [],
}
