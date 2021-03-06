module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
      }),
      height: {
        header: "600px",
      },
      backgroundSize: {
        400: "400% 400%",
      },
      keyframes: {
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        gradient: "gradient 15s ease infinite",
      },
      colors: {
        "header-l": "#4B41DB",
        "header-m": "#42d8d0",
        "header-r": "#E07C80",
        "header-wave-1-t": "#AC6DBD",
        "header-wave-1-b": "#7F56DF",
        footer: "#1F1557",
        main: "#1F1F47",
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        header: "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        fire:
          "#FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(175,95,255,0)",
      },
    },
  },
};
