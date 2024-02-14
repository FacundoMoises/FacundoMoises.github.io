/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '576px',
        md: '832px',
      },
    },
    fontSize: {
      sm: '.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '3rem',
      '5xl': '4rem',
    }
  },
  plugins: [],
}