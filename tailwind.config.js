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
        "92px":"92px",
        "120px":"120px",
        "34px":"34px",
        "3px":"3px",
        "1px":"1px",
        "50px":"50px",
        "45px" :"45px",
        "35px":"35px",
        "98px":"98px",
        "135px":"135px",
        "137px":"137px",
        "15px":"15px",
        "85px":"85px",
      },
      margin:{
        "30px":"30px",
        "50px":"50px",
      },
      colors:{
        "dark_green":"#474747",
        "full_light":"#F9F9F7",
        "primary":"#2C2F24",
        "nav":"#DBDFD0",
        "dark_black_btn":"#182226",
        "hover_bg":"#AD343E",
        "secondary":"#414536",
        "light_green" : "#737865",
        "md_light_green":"#ADB29E"
      },
      height:{
        "18px":"18px",
        "100px":"100px",
        "30px":"30px",
        "70px":"70px",
        "56px":"56px",
      },
      width:{
        "18px":"18px",
        "100px":"100px",
        "30px":"30px",
        "70px":"70px",
        "56px":"56px"
      },
      borderWidth:{
        "1.5px":"1.5px"
      },
      fontSize:{
        "42px":"42px",
        "100px":"100px",
        "55px":"55px",
        "32px":"32px",
        "22px":"22px"
      },
      lineHeight:{
        "30px":"30px",
        "96px":"96px",
        "60px":"60px",
        "26px":"26px",
        "20px":"20px,",
        "50px":"50px",
      },
      letterSpacing:{
        "0.4px":"0.4px",
        "3%": "0.03em",
      },
      borderRadius:{
        "34px":"34px",
        "118px":"118px",
        "12px":"12px",
      },
      gap:{
        "90px":"90px",
      },
      inset:{
        "50px":"50px"
      },
      minHeight:{
        "154px":"154px",
      }
    },
  },
  plugins: [],
}

