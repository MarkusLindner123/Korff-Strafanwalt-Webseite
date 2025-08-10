import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "korff-primary": "var(--korff-primary)",
        "korff-secondary": "var(--korff-secondary)",
        "korff-background": "var(--korff-background)",
        "korff-text": "var(--korff-text)",
      },
      fontFamily: {
        // Jetzt verweist unsere 'sans' Schriftfamilie auf die CSS-Variable
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
