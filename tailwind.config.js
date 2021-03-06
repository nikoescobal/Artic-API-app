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
        italianno: ['"Italianno"', 'cursive'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};