/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#F3E5AB',
          500: '#D4AF37',
          600: '#AA7C11',
          700: '#856006',
        },
        crimson: {
          800: '#580A14',
          900: '#38050C',
        },
        royal: {
          obsidian: '#090709',
          deep: '#0F0B0C',
          surface: '#181214',
          surfaceLight: '#241B1E',
          accent: '#E5C158',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(212, 175, 55, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
