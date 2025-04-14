/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'vanilla-cream': '#FFF8E7',    // Background
        'berry-bliss': '#D7263D',      // Primary Accent
        'raspberry-whip': '#F78DA7',   // Secondary
        'strawberry-milk': '#fce4ec',  // Highlight
        'chocolate-drizzle': '#4E342E', // Text (Dark)
        'sugar-dust': '#FFF1F1',       // Text (Light)
        'blueberry-mist': '#BFD7EA',   // Optional Tint
      },
    },
  },
  plugins: [],
}
