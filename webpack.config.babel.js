'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssCssnext = require('postcss-cssnext');
const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, './src/index.js'),
  },

  output: {
    filename: './build/[name].js',
    libraryTarget: 'commonjs',
    path: __dirname,
  },

  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
  ],

  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: require.resolve('material-design-lite/material.min'),
        loader: 'exports?componentHandler',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=1000000',
      },
    ],
  },

  postcss: [
    postcssImport,
    postcssNested,
    postcssCssnext({
      browsers: ['last 1 versions']

    }),
    require('postcss-inline-svg')({
      path: 'asset'

    }),
    require('postcss-svgo')

  ],

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devtool: 'source-map'
};
