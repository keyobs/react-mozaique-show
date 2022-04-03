const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      }),
      new MiniCssExtractPlugin()
  ],
  module:{
      rules:[
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            resolve: {
              extensions: ['.ts', '.tsx', '.js', '.json'],
            },
            use: 'ts-loader',
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
      ]
  },
};