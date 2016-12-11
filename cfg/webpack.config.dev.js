var config = require('./webpack.config')

module.exports = {
  devServer: config.devServer,
  entry: config.entry,
  module: {
    loaders: [
      config.loaders.image,
      config.loaders.js,
      config.loaders.sass
    ]
  },
  output: config.output.dev,
  resolve: config.resolve,
  target: config.target
}
