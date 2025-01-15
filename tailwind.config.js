/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "pa-blue": "#17b3e4",
      },
      textColor: {
        "pa-grey":"#374151",
      },
      boxShadow: {
        "pa-magenta-button": "4px 2px 35px 0 #d81671",
        "pa-blue-button": "4px 2px 35px 0 #17b3e4",
      },
      borderColor: {
        "pa-blue": "#17b3e4",
        "pa-magenta": "#d81671",
      },
      fill: {
        "pa-magenta": "4px 2px 35px 0 #d81671",
        "pa-blue-button": "4px 2px 35px 0 #17b3e4",
        "pa-box-shadow": "0 .5rem 1rem rgba(0,0,0,.15)",
      },
    },
  },
  plugins: [],
}

