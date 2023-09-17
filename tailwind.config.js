/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        cdff: "#00cdff",
        black: "#2f2f2f",
        gray: "#808080",
        gainsboro: "#dcdcdc",
        mediumslateblue: "#5956e9",
        "light-stroke": "#dfdfe0",
        "light-text": "#9a9ea6",
        deepskyblue: "rgba(0, 205, 255, 0.16)",
        black1: "#000",
        "light-neutral-secondary": "#f0f1f2",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "playfair-display": "'Playfair Display'",
        mulish: "Mulish",
      },
      borderRadius: {
        xl: "20px",
        "11xl": "30px",
        "14xl-5": "33.5px",
      },
    },
    fontSize: {
      xl: "20px",
      "31xl": "50px",
      "11xl": "30px",
      "5xl": "24px",
      "lg-1": "18.1px",
      "base-7": "15.7px",
      "xs-2": "11.2px",
      "sm-4": "13.4px",
      "xl-1": "20.1px",
      "base-9": "16.9px",
      xs: "12px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
