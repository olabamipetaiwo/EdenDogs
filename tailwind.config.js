module.exports = {
  content: [
    "./views/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.vue",
    "./src/**/*.jsx",
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      display: ["BR Firma", "sans-serif"],
    },
    extend: {
      borderRadius: {
        xxs: "0.625rem",
        half: "50%",
      },
      fontSize: {
        xxs: ["0.625rem", "0.75rem"],
      },
      minHeight: {
        300: "18.75rem",
      },
      maxWidth: {
        container: "68rem",
      },
      backgroundImage: {
        badge: "url('/src/assets/badge.png')",
      },
      gridTemplateColumns: {
        all__events: "repeat(auto-fit,15.625rem)",
        // all__events: "repeat(auto-fit, minmax(15.625rem, 1fr))",
        featured__events: "repeat(auto-fit, 32.75rem)",
      },
      colors: {
        dark: "#2F2F2F",
        grey: {
          one: "#6C757D",
          two: "#E8E8E8",
          three: "#EAEDF7",
          four: "#6C757D",
        },
        primary: {
          main: "#372AA4",
          bg: "#F8F9FB",
        },
        secondary: {
          main: "#FF6A2C",
        },
      },
      screens: {
        container: "68rem",
      },
      boxShadow: {
        btn: "0px 4px 10px rgba(36, 79, 190, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
