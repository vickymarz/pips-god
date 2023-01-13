/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-pattern.png')",
        'hero-pattern-mobile': "url('/src/assets/images/hero-pattern-mobile.png')",
        'overlayImg': "url('/src/assets/images/planet.gif')",
        'vector': "url('/src/assets/images/vector.png')",
        'flashes': "url('/src/assets/images/flashes.png')",
        'stars': "url('/src/assets/images/stars.png')",
        'mentors': "url('/src/assets/images/mentors.png')",
        'cap': "url('/src/assets/images/cap.png')"
      },
      dropShadow: {
        'mentorShadow': '5.30801px 2.654px 1.76934px rgba(29, 30, 44, 0.25)',
      }

    },
  },
  plugins: [],
}
