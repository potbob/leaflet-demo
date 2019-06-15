/* eslint-env node */
const webpack = require("webpack");

const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: false
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
           loader: 'url-loader',
           options: {
               name: './dist/img/icon/[name].[ext]'
           }
        }
      }
    ],
  },
  plugins: [
        new webpack.ProvidePlugin({
            L: 'leaflet'
        })
],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
