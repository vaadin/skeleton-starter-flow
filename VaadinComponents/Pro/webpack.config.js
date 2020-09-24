const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

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
        "./vaadin-board": "./node_modules/@vaadin/vaadin-board/vaadin-board"
      },
      shared: {
      "lit-html": { singleton: true, eager: true },
      "@vaadin/vaadin-lumo-styles": {singleton: true},
      "@polymer/iron-icon": {singleton: true, eager: true },
      "@polymer/iron-list": {singleton: true, eager: true },
      "@polymer/polymer": {singleton: true, eager: true },
      "lit-element": { singleton: true },
      "@vaadin/flow-frontend/comboBoxConnector.js": { singleton: true },
    },
    }),
/*    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  */
  ],
};

