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
    "lit-html": { singleton: true },
    "@vaadin/vaadin-lumo-styles": {singleton: true},
    "@polymer/polymer": {singleton: true},
//    "lit-element": { singleton: true }
  };

  const componentConfigs = {
    gizmo: merge([
      parts.page({
        entry: {
         // gizmo_entry: path.join(__dirname, "flow-frontend", "VaadinDevModeGizmo.js"),
        },
        mode,
      }),
      parts.federateModule({
        name: "gizmo",
        filename: "gizmo.js",
        exposes: {
          "./gizmo": "./flow-frontend/VaadinDevmodeGizmo",
        },
        shared,
      }),
    ]),
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
          "./vaadin-accordion": "./node_modules/@vaadin/vaadin-accordion/vaadin-accordion",
          "./vaadin-app-layout": "./node_modules/@vaadin/vaadin-app-layout/vaadin-app-layout",
          "./vaadin-drawer-toggle": "./node_modules/@vaadin/vaadin-app-layout/vaadin-drawer-toggle",
          "./vaadin-button": "./node_modules/@vaadin/vaadin-button/vaadin-button",
          "./vaadin-checkbox-group": "./node_modules/@vaadin/vaadin-checkbox/vaadin-checkbox-group",
          "./vaadin-checkbox": "./node_modules/@vaadin/vaadin-checkbox/vaadin-checkbox",
          "./vaadin-combo-box": "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box",
          "./vaadin-context-menu": "./node_modules/@vaadin/vaadin-context-menu/vaadin-context-menu",
          "./vaadin-custom-field": "./node_modules/@vaadin/vaadin-custom-field/vaadin-custom-field",
          "./vaadin-date-picker": "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker",
          "./vaadin-date-time-picker": "./node_modules/@vaadin/vaadin-date-time-picker/vaadin-date-time-picker",
          "./vaadin-details": "./node_modules/@vaadin/vaadin-details/vaadin-details",
          "./vaadin-dialog": "./node_modules/@vaadin/vaadin-dialog/vaadin-dialog",
          "./vaadin-form-item": "./node_modules/@vaadin/vaadin-form-layout/vaadin-form-item",
          "./vaadin-form-layout": "./node_modules/@vaadin/vaadin-form-layout/vaadin-form-layout",
          "./vaadin-grid": "./node_modules/@vaadin/vaadin-grid/vaadin-grid",
          "./vaadin-icons": "./node_modules/@vaadin/vaadin-icons/vaadin-icons",
          "./vaadin-item": "./node_modules/@vaadin/vaadin-item/vaadin-item",
          "./vaadin-list-box": "./node_modules/@vaadin/vaadin-list-box/vaadin-list-box",
          "./vaadin-login-form": "./node_modules/@vaadin/vaadin-login/vaadin-login-form",
          "./vaadin-login-overlay": "./node_modules/@vaadin/vaadin-login/vaadin-login-overlay",
/*
          "./color": "./node_modules/@vaadin/vaadin-lumo-styles/color",
          "./icons": "./node_modules/@vaadin/vaadin-lumo-styles/icons",
          "./sizing": "./node_modules/@vaadin/vaadin-lumo-styles/sizing",
          "./spacing": "./node_modules/@vaadin/vaadin-lumo-styles/spacing",
          "./style": "./node_modules/@vaadin/vaadin-lumo-styles/style",
          "./typography": "./node_modules/@vaadin/vaadin-lumo-styles/typography",
*/
          "./vaadin-menu-bar": "./node_modules/@vaadin/vaadin-menu-bar/vaadin-menu-bar",
          "./vaadin-notification": "./node_modules/@vaadin/vaadin-notification/vaadin-notification",
          "./vaadin-horizontal-layout": "./node_modules/@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout",
          "./vaadin-vertical-layout": "./node_modules/@vaadin/vaadin-ordered-layout/vaadin-vertical-layout",
          "./vaadin-scroller": "./node_modules/@vaadin/vaadin-ordered-layout/vaadin-scroller",
          "./vaadin-progress-bar": "./node_modules/@vaadin/vaadin-progress-bar/vaadin-progress-bar",
          "./vaadin-radio-button": "./node_modules/@vaadin/vaadin-radio-button/vaadin-radio-button",
          "./vaadin-radio-group": "./node_modules/@vaadin/vaadin-radio-button/vaadin-radio-group",
          "./vaadin-select": "./node_modules/@vaadin/vaadin-select/vaadin-select",
          "./vaadin-split-layout": "./node_modules/@vaadin/vaadin-split-layout/vaadin-split-layout",
          "./vaadin-tab": "./node_modules/@vaadin/vaadin-tabs/vaadin-tab",
          "./vaadin-tabs": "./node_modules/@vaadin/vaadin-tabs/vaadin-tabs",
          "./vaadin-email-field": "./node_modules/@vaadin/vaadin-text-field/vaadin-email-field",
          "./vaadin-integer-field": "./node_modules/@vaadin/vaadin-text-field/vaadin-integer-field",
          "./vaadin-number-field": "./node_modules/@vaadin/vaadin-text-field/vaadin-number-field",
          "./vaadin-password-field": "./node_modules/@vaadin/vaadin-text-field/vaadin-password-field",
          "./vaadin-text-area": "./node_modules/@vaadin/vaadin-text-field/vaadin-text-area",
          "./vaadin-text-field": "./node_modules/@vaadin/vaadin-text-field/vaadin-text-field",
          "./vaadin-time-picker": "./node_modules/@vaadin/vaadin-time-picker/vaadin-time-picker",
          "./vaadin-upload-file": "./node_modules/@vaadin/vaadin-upload/src/vaadin-upload-file",
          "./vaadin-upload": "./node_modules/@vaadin/vaadin-upload/vaadin-upload",
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
          "./vaadin-board": "./node_modules/@vaadin/vaadin-board/vaadin-board",
          "./vaadin-confirm-dialog": "./node_modules/@vaadin/vaadin-confirm-dialog/vaadin-confirm-dialog",
          "./vaadin-cookie-consent": "./node_modules/@vaadin/vaadin-cookie-consent/vaadin-cookie-consent",
          "./vaadin-crud": "./node_modules/@vaadin/vaadin-crud/vaadin-crud",
          "./vaadin-grid-pro": "./node_modules/@vaadin/vaadin-grid-pro/vaadin-grid-pro",
          "./vaadin-rich-text-editor": "./node_modules/@vaadin/vaadin-rich-text-editor/vaadin-rich-text-editor",
        },
        shared
      }),
    ]),

    app: merge([
      parts.page({
        entry: {
          app: path.join(__dirname, "src", "bootstrap.js"),
        },
        mode,
      }),
      parts.federateModule({
        name: "app",
        remotes: {
          core: "core@./core.js",
          gizmo: "gizmo@./gizmo.js",
//          pro: "pro@./pro.js",
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
