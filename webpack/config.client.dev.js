'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildPath = path.join(__dirname, '../build');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: './src/client',
  output: {
    path: path.join(buildPath, './www/static'),
    publicPath: '/static/',
    filename: 'client.js'
  },
  progress: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', require('./css-loader.js'))
      }
    ]
  },
  postcss: require('./postcss.js'),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ]
  }
};
