/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7444FD',
          dark: '#5E30E6',
          light: '#8F68FF',
        },
        secondary: {
          DEFAULT: '#16C784',
          dark: '#10A36B',
          light: '#34D399',
        },
        niotech: {
          purple: '#7444FD',
          dark: '#282C32',
          gray: '#858585',
          lavender: '#FAF8FF',
          pill: '#EFEAFF',
          green: '#16C784',
          orange: '#FF7A00',
        },
      },
      fontFamily: {
        sans: ['Urbanist', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Urbanist', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}
