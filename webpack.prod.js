// Headers
const app = require('./src/app')

// Libraries
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

// Constants
const common = require('./webpack.common.js')

// Configuration
let prodConfig = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: false,
        extractComments: true
      })
    ]
  },
  plugins: [
    new app.webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}

for (let i = 0; i < app.HTML_FILES.length; i++) {
  const filename = app.HTML_FILES[i]
  const templateFile = app.path.join(app.SRC_PATH, 'template', filename)
  try {
    app.fs.accessSync(templateFile, app.fs.constants.F_OK)
    let htmlWebpack = new app.HtmlWebpackPlugin({
      hash: app.HTML_PLUGIN.HASH,
      inject: app.HTML_PLUGIN.INJECT,
      template: templateFile,
      filename: filename,
      minify: {
        collapseWhitespace: app.HTML_PLUGIN.COLLAPSE_WHITESPACE,
        caseSensitive: app.HTML_PLUGIN.CASE_SENSITIVE
      }
    })
    prodConfig.plugins.push(htmlWebpack)
  } catch (err) {}
}

module.exports = app.merge(common, prodConfig)
