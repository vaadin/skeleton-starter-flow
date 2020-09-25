const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const shared = require("../share.js");

module.exports = {
  entry: "./src/index",
  mode: "development",
  /*
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
  },
  */
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
        "./vaadin-button": "./node_modules/@vaadin/vaadin-button/vaadin-button",
        "./vaadin-board": "./node_modules/@vaadin/vaadin-board/vaadin-board"
      },
      shared,
    }),
/*    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  */
  ],
};

