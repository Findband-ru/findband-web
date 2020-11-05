// const withFonts = require("next-fonts");
module.exports = {
  distDir: "../.next",
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
