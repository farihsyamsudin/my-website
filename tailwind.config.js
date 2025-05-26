/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#83B4FF",
        'secondary':"#5A72A0",
        'thirdry':"#FDFFE2",
        'fourthry':"#1A2130",
        'pallete-5':"#FFE2E2",
      },
      fontFamily:{
        'fredoka':["Fredoka"],
        'oswald':["Oswald"],
        'pt-sans':["PT Sans"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

