/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-pattern.png')",
        'hero-pattern-mobile': "url('/src/assets/images/hero-pattern-mobile.png')",
        'networkDark': "url('/src/assets/images/network-dark.gif')",
        'vector': "url('/src/assets/images/vector.png')",
        'flashes': "url('/src/assets/images/flashes.png')",
        'flashesMobile': "url('/src/assets/images/flashes-mobile.png')",
        'stars': "url('/src/assets/images/stars.png')",
        'mentors': "url('/src/assets/images/mentors.png')",
        'cap': "url('/src/assets/images/cap.png')",
        'arrow': "url('/src/assets/images/arrow.png')",
        'hill': "url('/src/assets/images/hill.png')",
        'leftHill': "url('/src/assets/images/left-hill.png'), url('/src/assets/images/right-hill.png') bg-right",
        'hillMobile': "url('/src/assets/images/left-hill.png'), url('/src/assets/images/hill-moblie.png')",
        'rightHill': "url('/src/assets/images/right-hill.png')",
        'authImg': "url('/src/assets/images/auth-image.png')",
        'authDesktop': "url('/src/assets/images/auth-desktop.png')",
        'gifLoader': "url('/src/assets/images/200w.gif')",
      },
      dropShadow: {
        'mentorShadow': '5.30801px 2.654px 1.76934px rgba(29, 30, 44, 0.25)',
      },
      boxShadow: {
        'textShadowMobile': '0px 1.64362px 1.64362px rgba(0, 0, 0, 0.15)',
        'textShadow': '0px 4px 4px rgba(0, 0, 0, 0.15);',
        'cardShadow': '2px 4px 4px rgba(0, 0, 0, 0.25)',
        'cardShadowMobile': '0.984621px 1.96924px 1.96924px rgba(0, 0, 0, 0.25)',
        'headerShadow': '0px 4px 4px rgba(13, 20, 46, 0.25)'
      },
      fontFamily: {
        synonymRegular: ["SYNONYM_REGULAR", 'sans-serif'],
        productSans: ["PRODUCT_SANS", 'sans-serif']
      }
    },
  },
  plugins: [],
}
