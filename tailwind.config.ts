import type { Config } from "tailwindcss";
import { screens } from "./theme/screens";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens,
      zIndex: {
        "100": "100",
        "200": "200",
        "300": "300",
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
        "900": "900",
        "1000": "1000",
      },
    },
    letterSpacing: {
      lowest: "-.48px",
      low: "-.3px",
    },
  },
  plugins: [],
};
export default config;
