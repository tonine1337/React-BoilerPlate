/**
 * This file generates a development build
 * for the user to view the files quickly.
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const port = process.env.PORT || 3000;

module.exports = merge(common, {
  // Webpack configuration goes here
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    contentBase: 'public',
    open: true,
  },
});
