/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-blue': '#BDCDD6',
        'main-blue': '#93BFCF',
        'box-blue': '#7AAAC1',
        'text-cream': '#EEE9DA',
      },
    },
  },
  plugins: [],
}
