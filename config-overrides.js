const { injectBabelPlugin } = require("react-app-rewired")

module.exports = function override(config, env) {
  // add a plugin
  config = injectBabelPlugin("wildcard", config)

  return config
}
