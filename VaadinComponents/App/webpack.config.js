
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { mode } = require("webpack-nano/argv");
const shared = require("./share.js");

module.exports = {
  entry: "./src/index",
  mode: mode,
  output: {
    publicPath: "http://localhost:3000/",
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
  watch: true,
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      remotes: {
        core: "core@./Core/core.js",
        pro: "pro@./Pro/pro.js",
      },
      shared,
    }),
    
    new WebpackPluginServe({
      port: 3000,
      static: "./dist", // Expose if output.path changes
      liveReload: true,
      waitForBuild: true,
    }),
    new MiniHtmlWebpackPlugin({
      filename: `./index.html`,
    }),
  ],
};

