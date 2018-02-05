var path = require('path');
var webpack = require('webpack-stream');
var BowerWebpackPlugin = require("bower-webpack-plugin");
module.exports = {
  output: {
    // path: __dirname + "/.tmp",
    filename: "bundle.js",
    publicPath: "/scripts/",
  },
  plugins: [new BowerWebpackPlugin()],
  module: {
    loaders: [{
      test: /\.(css|scss|svg|eot|ttf|woff|less|png)$/,
      loader: 'ignore-loader'
    }]
  }
};
