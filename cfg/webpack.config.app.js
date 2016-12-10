var config = require('./webpack.config')

module.exports = {
  entry: config.entry,
  module: {
    loaders: [
      config.loaders.image,
      config.loaders.js,
      config.loaders.sass
    ]
  },
  output: config.output.app,
  resolve: config.resolve,
  target: config.target
}
