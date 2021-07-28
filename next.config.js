const webpack = require("webpack");

const { parsed: environments } = require("dotenv").config({
   path: ".env"
})

module.exports = {
  reactStrictMode: true,
  webpackck(config) {
     config.plugins.push(new webpack.EnvironmentPlugin(environments))
     return config
  }
}
