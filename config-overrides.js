const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config) {
  // ...

  // Add the necessary polyfills
  config.plugins = (config.plugins || []).concat([new NodePolyfillPlugin()]);

  // ...

  return config;
};
