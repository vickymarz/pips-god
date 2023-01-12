/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-pattern.png')",
        'hero-pattern-mobile': "url('/src/assets/images/hero-pattern-mobile.png')",
        'overlayImg': "url('/src/assets/images/planet.gif')"
      }
    },
  },
  plugins: [],
}
