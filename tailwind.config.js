/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E3D4C2',
        'primary-light': '#DADFDB',
        'primary-dark': '#8F907E',
        secondary: '#B89178',
        'text-dark': '#654C37',
        'accent-dark': '#383B26',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
} 