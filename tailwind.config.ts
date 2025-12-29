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
        burgundy: {
          DEFAULT: "#800020", 
          light: "#9e2a2b",   
          dark: "#5c0017",    
        },
        gold: {
          DEFAULT: "#D4AF37", 
          light: "#F4C430",
        },
        cream: "#FDFBF7",     
      },
      fontFamily: {
        script: ["var(--font-great-vibes)"], 
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;