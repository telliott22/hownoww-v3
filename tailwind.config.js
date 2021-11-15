module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'earth': '#D06A47',
        'orange': '#F06636',
        'blue': {
         default: '#75B8CE',
         light: '#75B8CE',
         bright: '#22C4FA'
        },
        yellow: '#DAB45B',
        purple: '#8B5894',
        black: '#1B1B1B',
        grey: {
          lighter: '#F1F1F1',
          light: '#C1C1C1',
          default: '#C1C1C1',
          dark: '#777777',
          darker: '#525252',
        }
      },
      spacing: {
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tighter: 1.1,
        tight: 1.15,
      },
      fontSize: {
        '14px': '14px',
        '3.5xl': '2rem',
        '3.5xl': ['2rem', {
          lineHeight: '2.4rem',
        }],
        'xs': '0.625rem',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '3.5rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      fontFamily:{
        'sans': ['visuelt', 'sans-serif'],
      },
      screens: {
        'xxl': '1600px',
      },
      zIndex: {
        '-1': '-1'
      },
      keyframes:{
        'fade-in-up-delay': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px) translateX(-50%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) translateX(-50%)'
          }
        },
      },
      animation:{
        'fade-in-up': 'fade-in-up 0.25s ease-out',
        'fade-in-up-delay': 'fade-in-up-delay 0.2s linear 0.2s both',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}