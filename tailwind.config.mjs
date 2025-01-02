/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-color': '#1456A2'
			},
			container: {
				center: true, // Centers the container by adding auto margin
				padding: {
					DEFAULT: '0.5rem', // Default padding for all screens
					sm: '2rem',      // Padding for small screens
					lg: '4rem',      // Padding for large screens
					xl: '5rem',      // Padding for extra-large screens
					'2xl': '6rem',   // Padding for 2xl screens
				},
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1440px',
				},
			},
			animation: {
				fade: 'fadeInUp 1s both',
			  },
		
			  keyframes: {
				fadeInUp: {
				  '0%': { opacity: 0, transform: 'translateY(2rem)' },
				  '100%': { opacity: 1, transform: 'translateY(0)' },
				},
			  },
		},
	},
	plugins: [
	],
}
