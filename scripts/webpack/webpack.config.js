const Path = require('path');
const autoprefixer = require('autoprefixer');
const postCSSVariables = require('postcss-css-variables');
const Webpack = require('webpack');
const globalCSSVariables = require('../../config/global_css_variables.js');
const QS = require('qs');

const directories = {
  node_modules: Path.join(__dirname, '../../node_modules'),
  source: Path.join(__dirname, '../../src'),
  distribution: Path.join(__dirname, '../../dist')
}

module.exports = {
  entry: [
    directories.source
  ],

  output: {
    path: directories.distribution,
    filename: 'bundle.js',
    publicPath: '/assets/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          directories.source
        ],
        exclude: directories.node_modules,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
            'react',
            'stage-2'
          ]
        },
      },
      {
        test: /\.css$/,
        loaders: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            query: QS.stringify({
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]',
            }),
          },
          {loader: 'postcss-loader'},
        ],
      },
      {
        test: /\.(tiff|png|jpg|svg|ico|woff2|woff|ttf|pdf|eot|gif)$/,
        loader: 'file-loader',
        query: 'name=[path][name].[hash].[ext]',
      },
      {

      }
    ],
  },

  resolve: {
    modules: [
      directories.node_modules,
      directories.source
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },

  performance: {
    hints: 'warning',
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  externals: ['react'],
  stats: 'errors-only',

  plugins: [
    new Webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: [
          autoprefixer(),
          postCSSVariables(globalCSSVariables),
        ],
      },
    }),
  ],

}
