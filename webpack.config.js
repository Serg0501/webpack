const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new HTMLWebpackPlugin({
          template: './src/index.html',
      }),
      //new CleanWebpackPlugin(),
      new WebpackManifestPlugin(),
  ],
    module: {
        rules: [
          /*{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },*/
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
};