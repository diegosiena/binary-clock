module.exports = ctx => ({
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")({})
  ]
});
