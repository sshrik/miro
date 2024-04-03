import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"character-walk": {
					"0%": { transform: "rotate(0)" },
					"12.5%": { transform: "rotate(10deg)" },
					"37.5%": { transform: "rotate(-10deg)" },
					"52.5%": { transform: "rotate(10deg)" },
					"77.5%": { transform: "rotate(-10deg)" },
					"100%": { transform: "rotate(0)" },
				},
				"character-blocked-up": {
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
					"100%": { transform: "translateY(0)" },
				},
				"character-blocked-down": {
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(10px)" },
					"100%": { transform: "translateY(0)" },
				},
				"character-blocked-left": {
					"0%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(-10px)" },
					"100%": { transform: "translateX(0)" },
				},
				"character-blocked-right": {
					"0%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(10px)" },
					"100%": { transform: "translateX(0)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"character-walk": "character-walk 0.5s",
				"character-blocked-up": "character-blocked-up 0.5s",
				"character-blocked-down": "character-blocked-down 0.5s",
				"character-blocked-left": "character-blocked-left 0.5s",
				"character-blocked-right": "character-blocked-right 0.5s",
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
