var path = require('path')

module.exports = {
  entry: './src/index.js',
  loaders: {
    js: {
      test: /\.js$/,
      loader: 'babel'
    }
  },
  output: {
    app: {
      filename: 'bundle.app.js',
      path: 'app'
    },
    dev: {
      filename: 'bundle.dev.js',
      path: 'dev'
    }
  }
}
