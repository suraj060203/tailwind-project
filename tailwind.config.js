/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'primary': '#3238F2',
      },
      fontFamily: {
        'display':['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      }
      
    },
  },
  plugins: [],
}