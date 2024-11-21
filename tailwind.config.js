/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      'ngnl-green': '#97C294',
      'ngnl-dark-blue': '#11367C',
      'ngnl-yellow': '#EAE856',
      'ngnl-dark-yellow': '#C9571B',
      'ngnl-orange': '#D9531E',
      'ngnl-pink': '#CD3E7E',
      'ngnl-dark-pink': '#A62150',
      'ngnl-border': '#DC1347',
      },
    },
  },
  plugins: [],
};
