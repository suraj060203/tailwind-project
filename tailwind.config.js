/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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