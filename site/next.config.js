/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.modules.push(
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules')
    );
    config.resolve.alias = {
      react: path.resolve(__dirname, './node_modules', 'react'),
      'react-dom': path.resolve(__dirname, './node_modules', 'react-dom'),
      'kalo-ui': path.resolve(__dirname, '../src/components'),
    };
    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]',
            },
          },
          'postcss-loader',
        ],
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(tiff|png|jpg|svg|ico|woff2|woff|ttf|pdf|eot|gif)$/,
        loader: 'file-loader',
        query: 'name=[path][name]__[local].[ext]',
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../src'),
      }
    );
    return config;
  },
};
