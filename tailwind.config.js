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
          dark: "#291f00"
        },
        accent: {
          light: "#cf4307",
          dark: "#f86c30"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "serif"],
      }
    },
  },
  plugins: [],
}

