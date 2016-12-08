var config = require('./webpack.config')

module.exports = {
  entry: config.entry,
  module: {
    loaders: [
      config.loaders.js
    ]
  },
  output: config.output.dev
}
