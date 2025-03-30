const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stats: "minimal",
  entry: [path.resolve(__dirname, "./src/shopify/main.js")],
  output: {
    path: path.resolve(__dirname, "./shopify/assets/"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@shopify-directory": path.resolve(__dirname, "./shopify/"),
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      ...(() => {
        const rules = [];

        const loaders = [
          { test: /\.(css|postcss|liquid|json)$/i },
          { test: /\.s[ac]ss$/i, loader: "sass-loader" },
        ];

        loaders.forEach((element, index) => {
          rules.push({
            test: element.test,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: require(path.resolve(
                    __dirname,
                    "./postcss.config.js"
                  )),
                },
              },
            ],
          });

          if (element.loader) rules[index].use.push(element.loader);
        });

        return rules;
      })(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!*static*"],
    }),

    new MiniCssExtractPlugin({
      filename: "./bundle.css",
      chunkFilename: "[id].css",
    }),
  ],
};
