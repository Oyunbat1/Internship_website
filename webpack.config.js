const path = require("path");

const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  entry: "./main_files/summa/scripts/app.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "main_files"),
  },
  devServer: {
    static: path.join(__dirname, "main_files"),
    hot: true,
    port: 4000,
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
};
