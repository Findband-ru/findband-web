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
// module.exports = withFonts({
//   distDir: "../.next",
//   webpack(config, options) {
//     config.node = {
//       fs: "empty",
//     };
//     config.module.rules.push({
//       test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: "url-loader?limit=100000",
//         },
//         {
//           loader: "file-loader",
//         },
//       ],
//     });
// return config;
// });
