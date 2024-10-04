/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#ff7f00',       // Orange
        turquoise: '#40e0d0',    // Turquoise
        white: '#ffffff',        // White
      },
    },
  },
  plugins: [],
};
export default config;
