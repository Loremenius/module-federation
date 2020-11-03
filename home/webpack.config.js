const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
      bundle:['./src/index.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new AssetsPlugin({
      filename: 'manifest.json',
      path: path.join(__dirname, '/build'),
      prettyPrint: true,
      includeAllFileTypes: false,
      metadata: {
        componentName: 'FER226',
      },
    }),
  ],
  output: {
    filename: 'home.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['./src/index.jsx', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
