/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "corporate", "business"],

    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
  },
  plugins: [require("daisyui")],
};
