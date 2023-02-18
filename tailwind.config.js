/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#3f51b5',
      'primary-dark': '2c387e',
      'primary-light': '#6573c3',
      secondary: '#f500057',
      'secondary-dark': '#ab003c',
      'secondary-light': '#f73378',
      border: '#cdced2',
      gray: '#6b6b6b',
      black: '#000000',
      white: '#ffffff',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '32px',
    },
    letterSpacing: {
      tighter: '0.06px',
      tight: '0.07px',
      normal: '0.08px',
      wide: '0.09px',
      wider: '0.1px',
      widest: '0.1px',
    },
    lineHeight: {
      tighter: '17px',
      tight: '19px',
      snug: '22px',
      normal: '26px',
      relaxed: '28px',
      loose: '37px',
      none: '43px',
    },
    spacing: {
      0: '0px',
      1: '8px',
      2: '16px',
      3: '32px',
      4: '64px',
      small: '8px',
      medium: '16px',
      large: '32px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
