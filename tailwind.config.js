/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        dmsans: ['DM Sans', "sans-serif"],
        montserrat: ["Montserrat", 'sans-serif']
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')"
      },
      backgroundImage: (theme) => ({
        "gredient-yellowred": "linear-gredient(90deg,#FF616A,0%,#FFC837 100%)",
        "mobile-home": 'url("./assets/HomePageGraphic.png")'
      }),
    },
    screans: {
      'md': '1060px',
      'xs':'480px',
      'sm': '640px',
    }
  },
  plugins: [],
}
