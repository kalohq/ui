const postCSSVariables = require("postcss-css-variables");
const Webpack = require("webpack");
const QS = require("qs");
const Path = require("path");

const globalCSSVariables = require("../config/global_css_variables.js");

module.exports = {
  resolve: {
    modules: [Path.join(__dirname, "../src"), "node_modules"],
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]"
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(tiff|png|jpg|svg|ico|woff2|woff|ttf|pdf|eot|gif)$/,
        loader: "file-loader",
        query: "name=[path][name]__[local].[ext]"
      }
    ]
  },
  plugins: [
    new Webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: [postCSSVariables(globalCSSVariables)]
      }
    })
  ]
};
