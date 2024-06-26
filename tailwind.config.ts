import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        install: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(0.75)' },
          '50%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(0)' },
        }},
        animation: {
          install: 'install 2s linear initial '
        },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

    },
  },
  plugins: [],
};
export default config;

