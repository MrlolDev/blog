/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				theme: {
					background: "#09090b",
					foreground:"#fafafa",
					border: "#27272a",
					ring: "#d4d4d8",
					destructive: "#7f1d1d",
				},
				brand: {
					primary:"#fafbfb",
					secondary: "#27262b",
				}
			}
		},
	},
	plugins: [],
}
