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
				DEFAULT: '#F5F8FA',  // Fondo claro más suave
				dark: '#263238',  // No cambia para el modo oscuro
				light: '#F5F8FA',  // Fondo neutro suave
			},
			text: {
				DEFAULT: '#4A4A4A',  // Texto en modo claro más suave
				dark: '#ECEFF1',  // No cambia para modo oscuro
				light: '#4A4A4A',  // Texto en modo claro
			},
  			foreground: 'hsl(var(--foreground))',
			card: {
				light: '#CFF5F4',
				light_: '#F5F8FA',
				dark: '#263F38',
				dark_: '#263F58',
				foreground: 'hsl(var(--card-foreground))'
			},
  			popover: {
				DEFAULT: '#80C6B2',  // Verde más suave
				dark: '#388E3C',  // No cambia en modo oscuro
				foreground: '#FFFFFF',  // Mantener el blanco para texto sobre verde
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
				DEFAULT: '#0077B6',       // Rojo claro
				dark: '#D32F2F',          // Rojo oscuro
				foreground: '#FFFFFF',    // Texto sobre color secundario
			},
  			muted: {
				DEFAULT: '#FFD54F',       // Amarillo para acentos
				foreground: '#FFFFFF',    // Texto sobre color de acento
					},
  			accent: {
				DEFAULT: '#FFE8A1',  // Amarillo más suave
				foreground: '#FFFFFF',  // Texto sobre el color de acento
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
			border: '#E0E0E0',  // Borde más suave
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
