import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        headerFont: ["Funnel Sans", 'sans-serif'],
        parentFont: ["Rubik", "sans-serif"],
        childFont: ["Titillium Web", "sans-serif"],
      },
      colors: {
        primCol: {
          100: "#fafafa",
          200: "#f5f5f5",
          300: "#efefef",
          400: "#eaeaea",
          500: "#e5e5e5",
          600: "#b7b7b7",
          700: "#898989",
          800: "#5c5c5c",
          900: "#2e2e2e"
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
