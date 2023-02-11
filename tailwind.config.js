/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // Con esto extendemos lo que queramos, en este caso vamos a extender un color que copiamos de otra pagina
    extend: {
      colors: {
        "verde":'#16c60c',
      },
    },
    // Con esto creamos nuestro propio boxShadow
    boxShadow: {
      navbar: "0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)",
    },
  },
  plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
  ],
}
