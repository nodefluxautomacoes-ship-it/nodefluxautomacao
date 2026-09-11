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
          bg: '#060a16',
          'bg-soft': '#0a0f1e',
          'bg-card': 'rgba(255, 255, 255, 0.035)',
          'bg-card-hover': 'rgba(255, 255, 255, 0.07)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(59, 130, 246, 0.4)',
          blue: '#3b82f6',
          cyan: '#22d3ee',
          purple: '#8b5cf6',
          green: '#22c55e',
          text: '#f8fafc',
          'text-dim': '#94a3b8',
          'text-mute': '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(59, 130, 246, 0.45)',
        'glow-cyan': '0 0 35px -8px rgba(34, 211, 238, 0.4)',
        'glow-purple': '0 0 40px -10px rgba(139, 92, 246, 0.45)',
        'card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
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
