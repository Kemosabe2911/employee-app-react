module.exports = {
  purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aliceBlue:'#EAF9FF',
        teaGreen:'#D3F4BE',
        paleRose:'#FFBFBF',
        brightCelurean:'#03AEEE',
        brightsCelurean:'#1DACD6',
        regentGrey:'#8B8D9D',
        lapisBlue:'#183072',
    },
    keyframes: {
      wiggle: {
          '0%, 100%': {
              transform: 'rotate(-9deg)'
          },
          '50%': {
              transform: 'rotate(7deg)'
          },
      },
      reverseSpin:{
        '0%':{
          transform: 'rotate(0deg)'
        },
        '50%':{
          transform: 'rotate(-180deg)'
        },
        '100%':{
          transform: 'rotate(-360deg)'
        }
      }
  },
  animation: {
      wiggle: 'wiggle 0.4s ease-in-out infinite',
      spinReverse: 'reverseSpin 1s linear infinite'
  }

  
  },
  variants: {
    extend: {},
  },
  
  plugins: [],
  
}
};

   