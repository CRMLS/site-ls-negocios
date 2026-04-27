/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ls-dark': '#111A21',
        'ls-deep': '#090e12',
        'ls-beige': '#E4DBD3',
        'ls-beige-dark': '#c9b9ac',
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}
