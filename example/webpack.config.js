const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        },
      },
    ],
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
};
