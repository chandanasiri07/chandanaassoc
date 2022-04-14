module.exports = {
  content: ["./*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  plugins: [require("tw-elements/dist/plugin")],
  theme: {
    extend: {
      colors: {
        "accent-violet": "#5B59C8",
        "accent-dark": "#212240",
        "accent-gray": "#F7F7F7",
        "accent-blue": "#2292B2",
        "accent-orange": "#FF8F20",
      },
      maxWidth: {
        card: "360px",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,

      screens: {
        lg: "1280px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    // borderWidth: {
    //   2: "2px",
    //   "3px": "3px",
    // },
  },
  plugins: [],
};
