'use strict';

const autoprefixer = require('autoprefixer');

module.exports = [
  autoprefixer({ browsers: ['last 2 versions'] })
  // add cssnano line to minify css
  // require('cssnano')
];
