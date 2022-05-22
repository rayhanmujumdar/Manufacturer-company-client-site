module.exports = {
  content:['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',"./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui"),require('tw-elements/dist/plugin')],
}
