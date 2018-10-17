const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    modal: './src/modules/modal.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  externals: {
    jquery: 'jQuery',
    moment: 'moment'
  },
  devtool: 'sourcemap',
  resolve: {
    extensions: [ '.js' ],
  },
  mode: 'production'
}
