/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      neutral: {
        50: '#f5f5f4',
        100: '#e1e0df',
        200: '#cecbca',
        300: '#bab6b5',
        400: '#a6a29f',
        500: '#938d8a',
        600: '#7e7875',
        700: '#696462',
        800: '#54504E',
        900: '#43403e'
      },
      primary: {
        50: '#FEF6F0',
        100: '#FBE5D1',
        200: '#F8D4B3',
        300: '#F5C395',
        400: '#F2B176',
        500: '#EFA058',
        600: '#EA8426',
        700: '#C76913',
        800: '#954F0E',
        900: '#63340A'
      }
    }
  },
  plugins: [],
}