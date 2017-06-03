var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

//var node_modules = path.resolve(__dirname, './node_modules');

var dir_client = path.resolve(__dirname, './client/src/');
var dir_dist = path.resolve(__dirname, './client/dist/js');

module.exports = {
  entry: path.resolve(dir_client, 'app.jsx'),
  output: {
    path: dir_dist, // for standalone building
    filename: 'app.js'
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /src(\\|\/).+\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  stats: {
    colors: true // Nice colored output
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
  watch: true
};