import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'mono': ['ui-monospace', 'Courier New']
    },
    extend: {
      colors: {
        background: "#3F4045",
        foreground: "#FFFFFF",
        secondary: "#71727A",
        accent: "#B4F367"
      },
    },
  },
  plugins: [],
} satisfies Config;
