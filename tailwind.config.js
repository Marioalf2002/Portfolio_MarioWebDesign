/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-poppins)",
      secondary: "var(--font-galada)",
    },
    extend: {
      colors: {
        primary: "#020403",
        secondary: "#222020",
        tertiary: "#27272a", // #161311 #020403 #040406 #1c1c1c
        accent: {
          DEFAULT: "#B60202", // #d62929 #dc2626 #fd3535
          hover: "#ff0202", // #b91c1c
        },
      },
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle, rgba(25,25,25,1) 0%, rgba(2,4,3,1) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
