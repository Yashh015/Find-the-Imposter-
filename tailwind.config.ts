import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        app: {
          bg: "#FEF9E7",
          surface: "#FFFFFF",
          elevated: "#FFFFFF",
          border: "#1A1A1A",
          text: "#1A1A1A",
          muted: "#4A4A4A",
          accent: "#3B82F6",
          pink: "#FF4D94",
          yellow: "#FFD60A",
          green: "#30D158",
        },
      },
      borderWidth: {
        "3": "3px",
        "4": "4px",
      },
      borderRadius: {
        card: "20px",
        button: "14px",
      },
      boxShadow: {
        neo: "4px 4px 0px 0px rgba(26, 26, 26, 1)",
        "neo-lg": "8px 8px 0px 0px rgba(26, 26, 26, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
