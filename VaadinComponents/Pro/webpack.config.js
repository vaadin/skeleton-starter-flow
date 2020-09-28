const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const shared = require("../App/share.js");

module.exports = {
  entry: "./src/index",
  mode: "development",
  output: {
    publicPath: "Pro/",
    path: path.join(__dirname, "../App/dist/Pro"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "pro",
      filename: "pro.js",
      exposes: {
        "./vaadin-button": "./node_modules/@vaadin/vaadin-button/vaadin-button"
      },
      shared,
    })
  ],
};

