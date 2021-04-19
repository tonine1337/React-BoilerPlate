/**
 * This is the Production build for the react application.
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // Webpack configuration goes here
  mode: 'production',
});
