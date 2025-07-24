// tailwind.config.ts
import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // aur bhi add kar sakte ho if needed
      },
      borderColor: {
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [],
};

export default config;
