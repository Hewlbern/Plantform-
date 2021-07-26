const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/components/**/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/util/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   'accent-1': '#333',
      // },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        "robot-animation": "robotanimation 3s linear infinite both",
      },
      keyframes: {
        robotanimation: {
          "0%": {
            transform: "translate(0)",
          },
          "20%": {
            transform: "translate(0px, 2px)",
          },
          "40%": {
            transform: "translate(0px, -2px)",
          },
          "60%": {
            transform: "translate(0px, 2px)",
          },
          "80%": {
            transform: "translate(0px, -2px)",
          },
          "100%": {
            transform: "translate(0)",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
