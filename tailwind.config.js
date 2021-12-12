module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        leftside : '#F1F6F9',
        pinkColor : '#FFC7E7',
        titleColor : '#404D61',
        blueColor : '#4E73F8',
        greenColor : '#0DA68A',
        borderColor : '#E5E7EB',
        grayColor : '#AEB2BA',
        welcomColor : '#DCE1E5'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
