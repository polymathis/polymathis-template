// Libraries
const path = require('path')
const fs = require('fs')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Constants
const DIST_PATH = path.join(__dirname, '../dist/')
const SRC_PATH = path.join(__dirname, '../src/')
const NODE_MODULES_PATH = path.join(__dirname, '../node_modules/')
const HTML_FILES = []

const files = fs.readdirSync(path.join(SRC_PATH, 'template'))
for (let i = 0; i < files.length; i++) {
  const file = files[i]
  if (file.search('.html') !== -1) {
    HTML_FILES.push(file)
  }
}
// Export
module.exports = {
  fs,
  path,
  merge,
  webpack,
  HtmlWebpackPlugin,
  DIST_PATH,
  SRC_PATH,
  NODE_MODULES_PATH,
  HTML_FILES,
  HTML_PLUGIN: {
    HASH: true,
    INJECT: 'body',
    COLLAPSE_WHITESPACE: false,
    CASE_SENSITIVE: true
  }
}
