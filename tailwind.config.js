module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        microphone: "url('./img/microphone.svg')",
        gear: "url('./img/gear.svg')",
      },
    },
    colors: {
      blue: '#4369B2',
      blue2: '#598AE7',
      'blue-dark': '#3B5A9A',
      'odd-blue': '#4268B1',
      'even-blue': '#3F62A4',
    },
  },
  plugins: [],
};
