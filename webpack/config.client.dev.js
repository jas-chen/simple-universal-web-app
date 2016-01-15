'use strict';

const path = require('path');
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
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ]
  }
};
