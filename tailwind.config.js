module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        primary: ['Josefin Sans', 'sans-serif'],
      },
    },
    colors: {
      black: '#0D0D0D',
      purple: '#8B008B',
      shade: '#200020',
      white: '#FFF',
      red: '#FF0000',
      green: '#7FFF00',
    },
    fontSize: {
      web_normal: ['16px'],
      web_large: ['30px'],
      web_title: ['75px'],
      mobile_normal: ['14px'],
      mobile_large: ['24px'],
      mobile_title: ['60px'],
    },
  },
  plugins: [],
};
