'use strict';

const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].js',
    path: __dirname
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
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
        test: require.resolve('material-design-lite/material'),
        loader: 'exports?componentHandler'
      }
    ]
  },
  bail: true
};
