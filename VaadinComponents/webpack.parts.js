const path = require("path");
const webpack = require("webpack");

const { WebpackPluginServe } = require("webpack-plugin-serve");
const { ModuleFederationPlugin } = require("webpack").container;
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");

const APP_SOURCE = path.join(__dirname, "src");

exports.federateModule = ({ name, filename, library, exposes, remotes, shared }) => ({
  plugins: [
    new ModuleFederationPlugin({ name, filename, library, exposes, remotes, shared }),
  ],
});

exports.page = ({ path = "", template, title, entry, chunks, mode } = {}) => ({
  entry:
    mode === "development"
      ? addEntryToAll(entry, "webpack-plugin-serve/client")
      : entry,
  plugins: [
    new MiniHtmlWebpackPlugin({
      chunks,
      filename: `${path && path + "/"}index.html`,
      context: {
        title,
      },
      template,
    }),
  ],
});

function addEntryToAll(entries, entry) {
  const ret = {};

  Object.keys(entries).forEach((key) => {
    const e = entries[key];

    ret[key] = (Array.isArray(e) ? e : [e]).concat(entry);
  });

  return ret;
}

exports.output = ({filename, path, publicPath}) => ({
  output: {
    filename: filename,
    path: path,
    publicPath: publicPath,

  }
});

exports.loadJavaScript = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_SOURCE, // Consider extracting as a parameter
        use: "babel-loader",
      },
    ],
  },
});

exports.extractCSS = ({ options = {}, loaders = [] } = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: loaders
        }
      ],
    }
  };
};

exports.devServer = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe({
      port: process.env.PORT || 8080,
      static: "./dist", // Expose if output.path changes
      liveReload: true,
      waitForBuild: true,
    }),
  ],
});

