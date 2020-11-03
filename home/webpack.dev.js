const webpack = require('webpack');
const { BundleAnalyzerPlugin } =require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');

config.plugins.push(
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerPort: 8017,
    })
  );
//config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new Dotenv());
config.plugins.push(
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  );
config.devServer = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    contentBase: './build',
    port: '3017',
    historyApiFallback: true,
  };
config.devtool = 'source-map';
config.mode = 'development';

module.exports = config;