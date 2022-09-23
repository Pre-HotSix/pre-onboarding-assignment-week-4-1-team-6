module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '24px': '1.5rem',
      '1/2': '50%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
