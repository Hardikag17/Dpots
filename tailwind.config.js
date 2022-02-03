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
      black: '#313131',
    },
  },
  plugins: [],
};
