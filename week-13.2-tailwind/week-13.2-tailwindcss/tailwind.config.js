// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#8094ad",
          600: "#19406a",
          700: "#002b5b", // dark navy
        },
        green: {
          700: "#36c6c0", // teal green
        },
      },
    },
  },
  plugins: [],
};
