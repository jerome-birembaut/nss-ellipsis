const path = require('path');
module.exports = {
  mode: process.env.NODE_ENV || 'development',
  target: 'web',
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(`${__dirname}/../`, 'dist'),
    filename: `nss-ellipsis.common${process.env.NODE_ENV === 'production' ? '.min' : ''}.js`,
    library: 'NSSEllipsis',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
    ],
  },
};