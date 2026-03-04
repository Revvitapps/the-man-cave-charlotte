import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#1A1A1B",
        charcoal: "#2F3032",
        bronze: "#A67C52",
        slatecool: "#8E9AAF"
      },
      boxShadow: {
        bronze: "0 0 0 1px rgba(166,124,82,0.35), 0 10px 30px rgba(166,124,82,0.25)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.03), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.02), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
