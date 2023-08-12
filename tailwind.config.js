/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'header-pattern': "url('https://api.starlink.com/public-files/Marketing_LandingFeatured_Redesign.webpg')"
      }
    },
  },
  plugins: [],
}



module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});