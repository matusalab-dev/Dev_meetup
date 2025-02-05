import type { Config } from "tailwindcss";

// --size: 0px;
//   --radius: 8px;
//   --radius-big: 16px;
//   --radius-100: 100px;
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "black",
      light_black: "#333",
      gold: "#ffc83d",
      background: " #f4f5ec",
      special: "#c6f91f",
      pure_white: "white",
      card_border: "#eeeddf",
      text_secondary: "#666",
      floral_white: "#f9faf7",
      color: "#fff0",
      border: " #ececec",
      gold_15: "#ffc83d26",
      webflow: "#146ef5",
      orange: "#ff6d2f",
      rgba_255_255_255_0: "var(--border)",
      color_2: "#fff0",
    },

    boxShadow: {
      sm: "0px 4px 4px 0px, #000000",
    },
    borderRadius: {
      "3xl": "var(--radius-large)",
      "2xl": "var(--radius-100)",
      xl: "var(--radius-big)",
      lg: "15px",
      md: "10px",
      sm: "var(--radius)",
      full: "100%",
    },
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
export default config;
