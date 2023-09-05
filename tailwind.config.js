/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./public/**/*.html"
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
};
