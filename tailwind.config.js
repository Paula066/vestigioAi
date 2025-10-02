/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #9AFBD6 0%, #60C7E6 33%, #D5BBF9 66%, #7A6EFA 100%)',
      },
    },
  },
  plugins: [],
};
