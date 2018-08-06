// Headers
const app = require('./src/app')

// Constants
const common = require('./webpack.common.js')

// Configuration
const devConfig = {
  devtool: 'eval-cheap-module-source-map',
  mode: 'development',
  devServer: {
    contentBase: app.DIST_PATH,
    compress: true,
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.PORT || 3000
  },
  plugins: [
    new app.webpack.HotModuleReplacementPlugin()
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
    devConfig.plugins.push(htmlWebpack)
  } catch (err) {}
}
module.exports = app.merge(common, devConfig)
