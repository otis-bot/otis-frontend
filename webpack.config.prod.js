var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/App'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    // JS Loaders
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
      exclude: /(node_modules|bower_components)/
    },
    // CSS Loaders
    {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      loaders: ['style', 'css', 'sass']
    }
    // Image Loaders
    {
      test: /\.(jpg|png)$/,
      include: path.join(__dirname, 'src'),
      loader: 'url?limit=25000'
    }
    ]
  }
};
