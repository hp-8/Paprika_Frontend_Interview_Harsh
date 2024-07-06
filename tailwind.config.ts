import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkHero: '#FF7B7B',
        greenOpen: '#36AA7D',
        greenMatch: '#2A9865',
        blueMatch: '#226CE8',
        greyBody: '#4F4F4F',
        blackHeading: '#181818',
        greyPC:'#A5AFBE'
      }
    },
  },
  plugins: [],
};
export default config;
  