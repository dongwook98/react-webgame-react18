const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval', // hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR  '], // browserslist
              // 원하는 브라우저에만 babel-preset-env를 적용시키게 해줄수있음. (모든 브라우저에 적용하면 바벨작업량이 많아져서 느려질수도)
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [],
      },
    }],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};
