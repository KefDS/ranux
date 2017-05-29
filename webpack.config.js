const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '/'),
  entry: {
    javascript: './src/app.jsx',
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: true,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'stylefmt-loader',
            options: {
              config: '.stylelintrc',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.ejs',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 version'],
          }),
        ],
      },
    }),
    new StyleLintPlugin({
      options: {
        syntax: 'scss',
      },
    }),
  ],
};
