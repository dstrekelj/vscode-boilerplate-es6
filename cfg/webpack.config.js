var path = require('path')

module.exports = {
  entry: './src/index.js',
  loaders: {
    image: {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
    js: {
      test: /\.js$/i,
      loader: 'babel'
    },
    sass: {
      test: /\.scss$/i,
      loaders: [ 'style', 'css', 'sass' ]
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
