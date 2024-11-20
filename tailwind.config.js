/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0 4px 6px rgba(255, 255, 255, 0.1)",
        "custom-dark": "0 4px 6px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
};
