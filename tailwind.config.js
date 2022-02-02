module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '360px'
      },
      colors: {
        primary: '#D36666',
        gray: {
          900: '#202225',
          800: '#2f3136'
        }
      }
    },
  },
  plugins: [],
}
