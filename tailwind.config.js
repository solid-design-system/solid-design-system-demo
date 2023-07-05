// @ts-ignore
import solidTheme from "@solid-design-system/tokens/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...solidTheme,
    extend: {},
  },
  plugins: [],
}

