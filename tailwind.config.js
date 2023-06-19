/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import twElement from "tw-elements/dist/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
  },
  plugins: [daisyui,twElement],
};
