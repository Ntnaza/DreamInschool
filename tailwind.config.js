/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <--- INI PENTING BUAT TOMBOL MATAHARI/BULAN
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}