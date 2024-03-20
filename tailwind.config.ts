import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'bottom': '0 4px 0px 0px rgba(0, 0, 0, 0.1), 0 2px 0px 0px rgba(0, 0, 0, 0.06)'
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
