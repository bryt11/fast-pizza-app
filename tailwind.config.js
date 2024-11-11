/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      colors: {
        pizza: "#273287",
      },
      fontSize: {
        huge: [],
      },
      height: {
        // Dynamic Viewport Height units (DVH)
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
