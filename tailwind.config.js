/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
      },
      colors: {
        gb: "#09090b",
        card: "#18181b",
        border: "#27272a",
        text: "#f4f4f5",
        muted: "#a1a1aa",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}