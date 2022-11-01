const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
// const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    "postcss-preset-env",
    tailwindcss("./tailwind.config.cjs"),
    autoprefixer,
    // postcssPresetEnv,
  ],
};
