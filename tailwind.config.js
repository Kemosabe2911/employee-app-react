module.exports = {
  purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'alice-blue': '#EAF9FF',
        'button-blue':'#03AEEE',
      },
    },
  },
  variants: {
    extend: {},
  },
  
  plugins: [],
  
};
