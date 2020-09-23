const path = require("path");
const { component, mode } = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");

const cssLoaders = ['lit-css-loader', 'extract-loader', 'css-loader'];

const commonConfig = merge([
  parts.loadJavaScript(),
]);

const configs = {
  development: merge([
    parts.devServer(),
    parts.extractCSS({ loaders: cssLoaders }),
  ]),
  production: merge([
    parts.extractCSS({ options: { hmr: true }, loaders: cssLoaders }),
  ]),
};

const getConfig = (mode) => {
  const shared = {
    "lit-html": { singleton: true, eager: true },
    "@vaadin/vaadin-lumo-styles": {singleton: true},
    "@polymer/iron-icon": {singleton: true, eager: true },
    "@polymer/iron-list": {singleton: true, eager: true },
    "@polymer/polymer": {singleton: true, eager: true },
    "lit-element": { singleton: true },
    "@vaadin/flow-frontend/comboBoxConnector.js": { singleton: true },
  };

  const componentConfigs = {
    core: merge([
      parts.page({
        entry: {
         // core_entry: path.join(__dirname, "frontend", "vaadin-core.js"),
        },
        mode,
      }),
      parts.federateModule({
        name: "core",
        filename: "core.js",
        exposes: {
          "./vaadin-button": "./node_modules/@vaadin/vaadin-button/vaadin-button",
          "./vaadin-combo-box": "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box",
          "./vaadin-vertical-layout": "./node_modules/@vaadin/vaadin-ordered-layout/vaadin-vertical-layout"
        },
        shared
      }),
    ]),
    pro: merge([
      parts.page({
        entry: {
         // pro_entry: path.join(__dirname, "frontend", "vaadin-pro.js"),
        },
        mode,
      }),
      parts.federateModule({
        name: "pro",
        filename: "pro.js",
        exposes: {
          "./vaadin-board": "./node_modules/@vaadin/vaadin-board/vaadin-board"
        },
        shared
      }),
    ]),

    app: merge([
      parts.page({
        entry: {
          app: path.join(__dirname, "src", "index.js"),
        },
        mode,
      }),
      parts.federateModule({
        name: "app",
        remotes: {
          core: "core@./core.js",
          pro: "pro@./pro.js",
        },
        shared,
      }),
    ]),
  };

  return merge(commonConfig, configs[mode], componentConfigs[component], {
    mode,
  });
};

module.exports = getConfig(mode);
