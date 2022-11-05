const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: '',
            template: './src/index.html',
            meta: {
                viewport: "width=device-width, initial-scale=1.0"
            }
        }),
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