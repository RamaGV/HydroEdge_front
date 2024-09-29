import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: {
				DEFAULT: '#E3E5D8',
				dark: '#263238',  // Fondo oscuro
				light: '#ECEFF1',
			},
			text: {
				DEFAULT: '#2E3A45', // Texto en modo claro
				dark: '#ECEFF1',  // Texto en modo oscuro
				light: '#2E3A45',
			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: '#00A86B',       // Verde claro
				dark: '#388E3C',          // Verde oscuro
				foreground: '#FFFFFF',    // Texto sobre color primario
			},
			complementary: {
				DEFAULT: '#0077B6',       // Rojo claro
				dark: '#D32F2F',          // Rojo oscuro
				foreground: '#FFFFFF',    // Texto sobre color secundario
			},
			secondary: {
				DEFAULT: '#E57373',       // Rojo claro
				dark: '#D32F2F',          // Rojo oscuro
				foreground: '#FFFFFF',    // Texto sobre color secundario
			},
  			muted: {
				DEFAULT: '#FFD54F',       // Amarillo para acentos
				foreground: '#FFFFFF',    // Texto sobre color de acento
					},
  			accent: {
  				DEFAULT: '#FFD166',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
			success: {
				DEFAULT: '#06D6A0',
			},
			warning: {
			  DEFAULT: '#FFA500',
			},
			error: {
			  DEFAULT: '#EF476F',
			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
