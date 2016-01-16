'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildPath = path.join(__dirname, '../build');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: './src/shared/view/App',
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(buildPath, './App'),
    publicPath: '/static/',
    filename: 'index.js'
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
  // postcss: require('./postcss.js'),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  // server.js already required react, no need to require again
  externals: 'react',
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ]
  }
};
