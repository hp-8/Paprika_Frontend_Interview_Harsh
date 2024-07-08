import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/util/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkHero: "#FF7B7B",
        greenOpen: "#36AA7D",
        greenMatch: "#2A9865",
        blueMatch: "#226CE8",
        greyBody: "#4F4F4F",
        blackHeading: "#181818",
        greyPC: "#A5AFBE",
      },
      screens: {
        xs: "280px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
export default config;
