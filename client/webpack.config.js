const path = require('path')
const Dotenv = require('dotenv-webpack') // this is the second dotenv we include in our config

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    //she put this here
    new Dotenv(),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../server/public'),
  },
}
