/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],

  theme: {
    extend: {
      colors: {
        dark: {
          background: "#09090b",
          foreground: "#fafafa",
          border: "#27272a",
          ring: "#d4d4d8",
          destructive: "#7f1d1d",
          text: "#fafafa",
        },
        theme: {
          background: "#f0f0f0",
          foreground: "#333333",
          border: "#cccccc",
          ring: "#ffffff",
          destructive: "#ff6666",
          text: "#333333",
        },
        brand: {
          primary: "#ffe000",
          secondary: "#019cdb",
        },
      },
    },
  },
  plugins: [],
};
