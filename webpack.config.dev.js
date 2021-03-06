var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/App'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.NoErrorsPlugin(),
    new NpmInstallPlugin({
        save: true // --save
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
    },
    // Image Loaders
    {
      test: /\.(jpg|png)$/,
      include: path.join(__dirname, 'src'),
      loader: 'url?limit=25000'
    }
    ]
  },
  // For enzyme testing
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
