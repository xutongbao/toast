const webpack = require('webpack');
const path = require('path');

const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const sassModuleRegex = /\.module\.(scss|sass)$/;

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009'
            },
            stage: 3
          })
        ]
      }
    }
  ];
  if (preProcessor) {
    loaders.push(require.resolve(preProcessor));
  }
  return loaders;
};

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
      },
      {
        test: sassModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 2,
            modules: true,
            getLocalIdent: getCSSModuleLocalIdent
          },
          'sass-loader'
        )
      }    
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}