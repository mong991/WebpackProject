var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'lodash', 'redux', 'react-redux', 'react-dom',
  'faker','react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
   output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js' //output filename will get entry key become filename eg.bundle.js vendor.js
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_module/ //donot trans js file in node_module
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      } 
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
