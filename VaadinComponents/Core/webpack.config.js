//const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const shared = require("../App/share.js");

module.exports = {
  entry: "./src/index",
  mode: "development",

  output: {
    publicPath: "Core/",
    path: path.join(__dirname, "../App/dist/Core"),
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
      name: "core",
      filename: "core.js",
      exposes: {
        "./vaadin-combo-box": "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box",
        "./vaadin-vertical-layout": "./node_modules/@vaadin/vaadin-ordered-layout/vaadin-vertical-layout"
      },
      shared,
    })
  ],
};

