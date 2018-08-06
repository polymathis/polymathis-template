// Headers
const app = require('./src/app')

// Libraries
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// Constants
const extractCSS = new ExtractTextPlugin({
  filename: 'css/[name].css',
  disable: false
})

// Configuration
const config = {
  entry: [
    `${app.SRC_PATH}index.js`,
    `${app.SRC_PATH}styles/style.scss`
  ],
  output: {
    path: app.DIST_PATH,
    filename: 'js/bundle.min.js',
    publicPath: '/'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: app.NODE_MODULES_PATH,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: [app.NODE_MODULES_PATH],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'file-loader?limit=100000&name=./fonts/[hash].[ext]'
        // loader: 'file-loader'
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: `${app.SRC_PATH}assets`,
        to: `${app.DIST_PATH}`
      }
    ]),
    extractCSS
  ]
}

// Export configuration
module.exports = config
