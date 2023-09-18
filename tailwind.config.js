/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
    darkTheme: ["light","dark"], 
    base: true, 
    styled: true, 
    utils: true, 
    rtl: false, 
    prefix: "", 
  },
  plugins: [require("daisyui")],
};
