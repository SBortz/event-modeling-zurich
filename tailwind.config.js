/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Logo-Farben aus logo.svg
        'logo-gray': '#E6E6E6',      // Hellgrau für neutrale Bereiche
        'logo-blue-light': '#A6D5E5', // Helles Blau (oberer Balken rechts)
        'logo-blue': '#5FA6D4',       // Mittleres Blau (mittlerer Balken links)
        'logo-teal': '#5BBBAF',       // Türkis (mittlerer Balken rechts)
        'logo-yellow': '#F3B643',     // Gelb (unterer Balken links & rechts)
        
        // Bestehende Farben beibehalten
        'primary': '#0f1f2f',         // Dunkelblau für Texte
        'accent': '#eaf4fb',          // Helles Blau für Hintergründe
      }
    },
  },
  plugins: [],
} 