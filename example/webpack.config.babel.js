'use strict';

const path = require('path');

module.exports = {
  entry: {
    example: path.join(__dirname, './index.js')
  },
  output: {
    filename: '[name].js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel-loader'
      },
      {
        test: require.resolve('material-design-lite/material.min'),
        loader: 'exports?componentHandler'
      }
    ]
  },
  bail: true
};
