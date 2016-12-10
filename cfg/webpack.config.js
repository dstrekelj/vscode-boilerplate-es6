var path = require('path')

var BASE = path.resolve(__dirname, '..')

module.exports = {
  entry: path.join(BASE, 'src', 'index.js'),
  loaders: {
    image: {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
    js: {
      test: /\.(js|jsx)$/i,
      loader: 'babel-loader'
    },
    sass: {
      test: /\.scss$/i,
      loaders: [
        'style-loader',
        'css-loader',
        'resolve-url-loader?root=' + path.join(BASE, 'src'),
        'sass-loader?sourceMap'
      ]
    }
  },
  output: {
    app: {
      filename: 'bundle.app.js',
      path: path.join(BASE, 'app')
    },
    dev: {
      filename: 'bundle.dev.js',
      path: path.join(BASE, 'dev')
    }
  },
  resolve: {
    root: path.join(BASE, 'src'),
    extensions: [ '', '.js', '.jsx' ]
  },
  target: 'web'
}
