/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*"
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1296px'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xsm:'480px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1296px'
      },
    },
    extend: {
      fontFamily:{
        "playfair" : ["Playfair Display", "serif"],
        "dm_sans":  ["Work Sans", "serif"],
      },
      padding:{
        "10px":"10px",
        "30px":"30px",
      },
      colors:{
        "dark_green":"#474747",
        "full_light":"#F9F9F7"
      },
      height:{
        "18px":"18px"
      },
      width:{
        "18px":"18px",
      }
    },
  },
  plugins: [],
}

