var path = require('path')

var BASE = path.resolve(__dirname, '..')

function query(loader, parameters) {
  return loader + '?' + JSON.stringify(parameters)
}

module.exports = {
  devServer: {
    contentBase: path.join(BASE, 'dev'),
    inline: true,
  },
  entry: path.join(BASE, 'src', 'index.js'),
  loaders: {
    image: {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        query(
          'file-loader',
          {
            digest: 'hex',
            hash: 'sha512',
            name: '[hash].[ext]',
          }
        ),
        query(
          'image-webpack-loader',
          {
            bypassOnDebug: true,
            interlaced: false,
            optimizationLevel: 7,
          }
        )
      ]
    },
    js: {
      test: /\.(js|jsx)$/i,
      loader: query(
        'babel-loader',
        {
          presets: [ 'es2015', 'react', 'stage-0' ],
        }
      ),
      include: path.join(BASE, 'src'),
    },
    sass: {
      test: /\.scss$/i,
      loaders: [
        'style-loader',
        'css-loader',
        query(
          'resolve-url-loader',
          {
            root: path.join(BASE, 'src'),
          }
        ),
        query(
          'sass-loader',
          {
            sourceMap: true,
          }
        )
      ]
    }
  },
  output: {
    app: {
      filename: 'bundle.app.js',
      path: path.join(BASE, 'app'),
    },
    dev: {
      filename: 'bundle.dev.js',
      path: path.join(BASE, 'dev'),
    }
  },
  resolve: {
    root: path.join(BASE, 'src'),
    extensions: [ '', '.js', '.jsx' ],
  },
  target: 'web',
}
