/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nf: {
          bg: '#F4F7FD',
          'bg-soft': '#FFFFFF',
          'bg-surface': '#FFFFFF',
          'bg-card': '#FFFFFF',
          'bg-card-hover': '#FFFFFF',
          border: '#E2E8F0',
          'border-hover': 'rgba(14, 67, 251, 0.4)',
          blue: '#0E43FB',
          'blue-dark': '#0830C8',
          'blue-vibrant': '#0047FF',
          'blue-light': '#EEF4FF',
          'blue-top': '#0A24A5',
          green: '#00B060',
          'green-neon': '#00D060',
          cyan: '#0284C7',
          text: '#0F172A',
          'text-dim': '#475569',
          'text-mute': '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 10px 25px -5px rgba(14, 67, 251, 0.35)',
        'glow-green': '0 10px 25px -5px rgba(0, 176, 96, 0.3)',
        'card': '0 10px 30px -5px rgba(15, 23, 42, 0.07)',
        'card-hover': '0 20px 40px -10px rgba(14, 67, 251, 0.12)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
