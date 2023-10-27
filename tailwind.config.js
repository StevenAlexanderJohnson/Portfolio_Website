/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          light: "#130e01",
          dark: "#fef9ec"
        },
        background: {
          light: "#fffaeb",
          dark: "#291f00"
        },
        primary: "#ff8400",
        secondary: {
          light: "#fff5d6",
          dark: "#3a2f11"
        },
        accent: {
          light: "#cf4307",
          dark: "#f86c30"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "serif"],
      },
      minWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "75%": { transform: "rotate(-15deg)" },
        },
      },
      animation: {
        wave: 'wave 2s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite'
      }
    },
  },
  plugins: [],
}

