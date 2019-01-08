const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    index: 'index.html',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader',
      },
    ],
  },
});
