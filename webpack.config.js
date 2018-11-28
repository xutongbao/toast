const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	devtool: 'cheap-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: 'Toast',
		libraryTarget: 'umd',
		filename: 'bundle.js'
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}