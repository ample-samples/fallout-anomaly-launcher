/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    fontFamily: {
      ShareTech: ['"ShareTech"', 'system-ui', 'sans-serif'],
      mono: ['"ShareTech"', 'system-ui', 'monospace']
    },
    extend: {
      colors: {
        fgreen1: '#00ee00',
        fgreen2: '#008e00',
        fgreen3: '#005f00',
        fgreen4: '#002f00',
      }
    }
  },
  plugins: []
}
