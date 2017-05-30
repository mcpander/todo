const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/app.jsx',
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'), // Relative directory for base of server
    hot: true,
    inline: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      warnings: false
    }
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: 'src/index.html'
    }], {
      copyUnmodified: true
    })
  ],
  resolve: {
    extensions: [ '.js', '.jsx', '.json']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [
        'babel-loader',
      ],
      exclude: /node_modules/,
    }, {
      test:   /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader'
    }, {
      test: /\.(jpe?g$|gif|png|ico)$/,
      loader: 'file-loader'
    }
    ]
  }
};
