import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lagoon: "#1a7fa3",
        reef: "#33b6c8",
        kelp: "#20756f",
        coral: "#ff8a7a",
        sunshine: "#ffd166",
        deep: "#0b2842"
      },
      boxShadow: {
        sea: "0 18px 60px rgba(11, 40, 66, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
