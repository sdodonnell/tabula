/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./public/**/*.html"
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
};
