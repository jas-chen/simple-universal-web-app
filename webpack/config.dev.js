'use strict';

const path = require('path');
const buildPath = path.join(__dirname, '../build');

const server = {
  context: path.resolve(__dirname, '..'),
  entry: './src/server',
  output: {
    path: buildPath,
    filename: 'server.js'
  },
  target: 'node',
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

module.exports = [server];
