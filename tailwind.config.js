/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "25": "#252525",
        "30": "#303030",
        "f5": "#f5f5f5",
        "c6": "#c6c6c6",
        "semiBlue": "#3a99ad",
      },
      fontFamily: {
        "sans": ['manrope', 'sans-serif']
      },
      fontSize: {
        "4.5xl": "38px"
      }
    },
  },
  plugins: [],
};
