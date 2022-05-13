module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lgC: "1140px",
      },
      width: {
        98: "98%",
        95: "95%",
        90: "90%",
        85: "85%",
        80: "80%",
        70: "70%",
        60: "60%",
      },
      colors: {
        primary: "#353353",
        secondary: "#ff4c60",
        facebook: "#3b5998",
        gmail: "#d44638",
        twitter: "#1da1f2",
        instagram: "#e1306c",
        phone: "#f5f5f5",
      },
      backgroundImage: {
        "home-bg": "url('assets/images/homeBg.jpg')",
      },
      fontFamily: {
        courgette: ["Courgette", "cursive"],
        rubik: ["Rubik", "sans-serif"],
      },
      gridTemplateColumns: {
        aboutLg: "repeat(1, 30% 1fr)",
      },
    },
  },
  plugins: [],
};
