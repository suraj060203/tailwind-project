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
      },
      keyframes: {
        rocket: {
          '0%': { transform: 'translateY(0) rotate(0)', opacity: 1 },
          '25%': { transform: 'translateY(-40px) translateX(10px) rotate(5deg)' },
          '100%': { transform: 'translateY(-120px) translateX(30px) rotate(8deg)', opacity: 0 },
        },
      },
      animation: {
        rocket: 'rocket 3s ease-out forwards',
      },
      
    },
  },
  plugins: [],
}