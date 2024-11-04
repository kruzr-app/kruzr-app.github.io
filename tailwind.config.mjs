/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

	},
  plugins: [
	plugin(function({ addVariant }) {
		addVariant('valid', '&:user-valid');
		addVariant('invalid', '&:user-invalid');
		addVariant('hocus', ['&:focus', '&:hover']);
		addVariant('ndis', '&:not(disabled)');
	  })
  ],
}
