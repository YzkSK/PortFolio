/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0c0c0c',
        'accent-yellow': '#ebff5a',
        'accent-green': '#2db865',
        'accent-purple': '#a78bfa',
      },
    },
  },
  plugins: [],
}

