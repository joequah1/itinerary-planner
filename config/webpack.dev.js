var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:7007/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    host : '0.0.0.0',
    watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
    },
    historyApiFallback: true,
    stats: 'minimal',
    proxy : {
      '/api' : {
        target: 'http://server:3000',
        secure: false
      }
    }
  }
});
