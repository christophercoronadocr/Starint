/** @type {import('tailwindcss').Config} */
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

