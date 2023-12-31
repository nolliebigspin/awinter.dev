import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      primary: "#FF8E3D",
      secondary: "#C1C1C1",
      accent: "#FF1414",
      dark: "#202020",
      light: "#EEEEEE",
      lightGray: "#CCCCCC",
      gray: "#ABABAB",
      darkGray: "#696969",
    },
  },
  plugins: [],
};
export default config;
