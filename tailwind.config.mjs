/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			'primary': {
				'50': '#edfefd',
				'100': '#d1fcfc',
				'200': '#aaf7f7',
				'300': '#6feff1',
				'400': '#2ddde3',
				'500': '#10b9c1',
				'600': '#119ba9',
				'700': '#157c89',
				'800': '#1a6470',
				'900': '#1a535f',
				'950': '#0b3741',
			}
		},
	},
	plugins: [],
}
