/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./src/**/*.tsx",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
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
      },
      secondary: {
        50: '#FAE8E2',
        100: '#F5D0C6',
        200: '#F0B9A9',
        300: '#EBA18C',
        400: '#E68970',
        500: '#E17253',
        600: '#D94E27',
        700: '#AF3E1E',
        800: '#832F17',
        900: '#571F0F'
      },
      success: {
        50: '#ECFDF5',
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#10B981',
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B'
      },
      error: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D'
      },
      white: '#FFFFFF'
    },
    fontSize: {
      xm: ['14px', '18px'],
      sm: ['16px', '18px'],
      base: ['18px', '20px'],
      lg: ['20px', '24px'],
      xl: ['22px', '26px'],
      '2xl': ['24px', '28px'],
      '3xl': ['26px', '30px']
    }
  },
  plugins: [],
}