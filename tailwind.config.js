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
          DEFAULT: '#0E43FB',
          dark: '#0832C9',
          light: '#3B6BFF',
        },
        secondary: {
          DEFAULT: '#00A859',
          dark: '#007D44',
          light: '#10B981',
        },
        niotech: {
          purple: '#0E43FB',
          blue: '#0E43FB',
          dark: '#0F172A',
          gray: '#5B6576',
          lavender: '#F5F8FF',
          ice: '#F5F8FF',
          pill: '#E8F0FF',
          green: '#00A859',
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
