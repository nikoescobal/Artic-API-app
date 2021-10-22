module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
        exo: ['"Exo"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};