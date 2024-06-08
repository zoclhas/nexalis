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
        red: {
          "50": "#fdf3f3",
          "100": "#fce4e4",
          "200": "#fbcdcd",
          "300": "#f6abab",
          "400": "#ef7a7a",
          "500": "#e44f4f",
          "600": "#d03232",
          "700": "#af2626",
          "800": "#912323",
          "900": "#7a2424",
          "950": "#410e0e",
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
