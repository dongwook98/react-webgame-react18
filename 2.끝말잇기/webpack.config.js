const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  }, // 알아서 client.js나 client.jsx가 있는지 찾아준다.
  
  entry: {
    app: ['./client'],
  }, // 입력
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'],
            },
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: ['react-refresh/babel'],
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'), // 실제 경로
    filename: 'app.js',
    publicPath: '/dist', // 가상 경로
  }, // 출력
  devServer: {
    devMiddleware: { publicPath: '/dist' }, // webpack-dev-server가 사용하는 결과물간의 상대 경로
    static: { directory: path.resolve(__dirname) }, // 실제로 존재하는 정적파일(index.html)의 경로
    hot: true
  }
};
