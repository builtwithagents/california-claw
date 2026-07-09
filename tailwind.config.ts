import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#003262',
          'navy-dark': '#001833',
          'navy-mid': '#002244',
          'navy-light': '#004d99',
          gold: '#FDB515',
          'gold-light': '#FFD060',
          'gold-dark': '#CC8800',
          cream: '#FFF9EF',
          coral: '#FF6B5E',
          sky: '#B8E3F5',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-baloo)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'claw-drop': 'claw-drop 4s ease-in-out infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'claw-drop': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(14px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
