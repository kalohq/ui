const postCSSVariables = require('postcss-css-variables');
const Webpack = require('webpack');
const QS = require('qs');
const Path = require('path');

const globalCSSVariables = require('../config/global_css_variables.js');

module.exports = {
  resolve: {
    root: Path.join(__dirname, '../src'),
    modulesDirectories: ['node_modules'],
    extensions: ['.js', '.jsx', ''],
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[name]__[local]!postcss'
      },
      {
        test: /\.(tiff|png|jpg|svg|ico|woff2|woff|ttf|pdf|eot|gif)$/,
        loader: 'file-loader',
        query: 'name=[path][name]__[local].[ext]',
      }
    ]
  },
  postcss: [
    postCSSVariables(globalCSSVariables),
  ]
}
