/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      primary: '#F8C700',
      secondary: '#24D37F',
      text1: '#2E3E5C',
      text2: '#9FA5C0',
      outline: '#D0DBEA',
      form: '#F4F5F7',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
