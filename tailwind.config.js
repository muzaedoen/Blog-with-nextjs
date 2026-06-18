/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media', // Otomatis Dark Mode mengikuti setelan HP/Browser user
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
