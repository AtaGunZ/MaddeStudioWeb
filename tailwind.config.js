/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        madde: {
          black: '#121212',
          white: '#F5F5F7',
          paper: '#E2E1E1',   // page background of the light theme
          gray: '#888888'
        }
      },
      // clients strip: one set's width (a third of the tripled list), looped
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-33.333%)' } },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    }
  },
  plugins: [],
}
