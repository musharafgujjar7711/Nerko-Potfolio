/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'], 
          Grotesk: ['Space Grotesk', 'sans-serif'],
        },
     
      colors:{
         jamo:"#741ff5",
         text1:"#7A7A7A",
         text2:"#7B7583",
         text3: "#7e22ce",
         text4:"#2600fc",
         text5:"#d946ef"
      },

      container: {
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem"
        },
        screens :{
          
          md:"1440px",
          lg:"1440px",
          xl:"1440px",
          "2xl":"1440px"
        }
    },
  
  }
  },
  plugins: [],
}
