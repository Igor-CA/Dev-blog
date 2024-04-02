/** @type {import('tailwindcss').Config} */

const disabledCss = {
	"blockquote p:first-of-type::before": false,
	"blockquote p:last-of-type::after": false,
	pre: false,
	code: false,
	"pre code": false,
};

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			typography: {
				DEFAULT: { css: disabledCss },
				sm: { css: disabledCss },
				lg: { css: disabledCss },
				xl: { css: disabledCss },
				"2xl": { css: disabledCss },
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
