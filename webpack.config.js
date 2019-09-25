const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const flowDefaults = require('./webpack.generated.js');

const WebpackRequireFixupPlugin = require('./plugins/WebpackRequireFixupPlugin');
flowDefaults.plugins.push(new webpack.LoaderOptionsPlugin({
  options: {
    ojL10nLoader: {
      locale: "en-US"
    }
  }
}));
flowDefaults.plugins.push(new WebpackRequireFixupPlugin(
    {
      // Point this setting to the root folder for the associated JET distribution (could be a CDN). Used by the oj.Config.getResourceUri() call
      baseResourceUrl: "./node_modules/@oracle/oraclejet"
    }
));
module.exports = merge(flowDefaults, {

  resolveLoader: {
    // This adds ./loaders/ to the list of folders where Webpack is looking for loaders
    modules: ['node_modules', path.resolve(__dirname, './loaders')],
    alias: {
      ojL10n: "ojL10n-loader",
      text: "text-loader"
    }
  },
  resolve: {
    alias: {
      'ojs': path.resolve(__dirname, './node_modules/@oracle/oraclejet/dist/js/libs/oj/debug'),
      'ojtranslations': path.resolve(__dirname, './node_modules/@oracle/oraclejet/dist/js/libs/oj/resources'),
      'customElements': path.resolve(__dirname, './node_modules/@webcomponents/custom-elements/custom-elements.min'),
      'jquery': path.resolve(__dirname, './node_modules/jquery'),
      'jqueryui-amd': path.resolve(__dirname, './node_modules/jquery-ui/ui'),
      'promise': path.resolve(__dirname, './node_modules/es6-promise'),
    }
  }
});
