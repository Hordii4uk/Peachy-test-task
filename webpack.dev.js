const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  plugins: [
    new ESLintPlugin({
      files: "src/**/*.{js}",
      overrideConfigFile: path.resolve(__dirname, "./.eslintrc.js"),
    }),

    new StylelintPlugin({
      files: "src/**/*.{css,sass,scss}",
      configFile: path.resolve(__dirname, "./.stylelintrc.js"),
    }),
  ],
});
