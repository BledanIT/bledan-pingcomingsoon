/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        buttonCol: 'hsl(223, 87%, 63%)',
        paleblue: 'hsl(223, 100%, 88%)',
        errorCol: 'hsl(354, 100%, 66%)',
        textCol2: 'hsl(0, 0%, 59%)',
        textCol1: 'hsl(209, 33%, 12%)',
      },
      fontFamily:{
        librefranklin: ['Libre Franklin','serif'],
      },
      fontSize:{
        '2xs': '0.6rem',
      },
    },
  },
  plugins: [],
}

