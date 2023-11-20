/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Montserrat: "Montserrat"
    },
    extend: {
      colors: {
        navBg: "#ffffff",
        gray: "#F4F4F4",
        starGray: "D9D9D9",
        bluePrimary: "#04989E",
        blueSecondary: "#00C9DA",
        yellow: "#FFD15C",
        navClr: "rgba(255, 255, 255, 0.50);"
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      // keyframes: {
      //   slide: {
      //     "0%,100%": { transform: "translateX(5%)" },
      //     "50%": { transform: "translateX(-120%)" }
      //   }
      // },
      fontSize: {
        text6Xl: "74px",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
}