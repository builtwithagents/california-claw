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
          emerald: '#10b981',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 60% 0%, rgba(253,181,21,0.12) 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(0,50,98,0.4) 0%, transparent 50%), linear-gradient(to bottom, #001833, #002f5f)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(253,181,21,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(253,181,21,0.6)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
