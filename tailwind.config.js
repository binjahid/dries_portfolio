module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};
