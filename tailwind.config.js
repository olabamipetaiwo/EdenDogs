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
       body: ["Exo 2", "sans-serif"],
    },
    extend: {
      fontSize: {
        header: ["40px", "48px"],
        xxs: ["10px", "12px"],
      },  
      colors: {
        primary: "#003D6D",
        secondary: "#18425D",
        grey: {
          50: " #F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#4F4F4F",
          500: "#6B7280",
          700: "#374151",
          800: "#1F2937",
          dark: "#454545",
        },
        neutral: {
          200: "#F3F5F6",
          600: "#848F9F",
          700: "#5F738C",
          800: "#4E5A6C",
          900: "#353F50",
        },
        "blue-100": "#EBF8FE",
        "red-100": "#FBE9E9",
        "green-100": "#F1FEF1",
      },
      screens: {
        xlg: "1080px",
        tab: "900px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
