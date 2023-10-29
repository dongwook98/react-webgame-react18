// 노드에서 경로 쉽게 조작하도록 제공
const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'word-relay-setting', //
  mode: 'development', // 실서비스 : production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'], // 이렇게 적어주면 웹팩이 알아서 client.js나 client.jsx가 있는지 확인을 한다.
  },

  entry: {
    app: ['./client'], //'./WordRelay.jsx'], // client.jsx에서 WordRelay.jsx를 이미 불러오고 있기 때문에 안적어도된다. 확장자도 생략가능
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 5% in KR', 'last 2 chrome versions'], // browserslist
                  // 원하는 브라우저에만 babel-preset-env를 적용시키게 해줄수있음. (모든 브라우저에 적용하면 바벨작업량이 많아져서 느려질수도)
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: ['react-refresh/babel'],
        },
      },
    ],
  },

  plugins: [new RefreshWebpackPlugin()],

  output: {
    path: path.join(__dirname, 'dist'), // __dirname : 현재폴더
    filename: 'app.js',
    publicPath: '/dist/', // app.use('/dist' , express.static(__dirname, 'dist'))
  }, // 출력

  devServer: {
    hot: true,
    devMiddleware: { publicPath: '/dist/' }, // webpack이 생성해주는 경로
    static: { directory: path.resolve(__dirname) }, //,'src' }, // 정적파일들의 경로 (index.html)
  },

  // entry에 있는 파일을 읽고 거기에 module을 적용한 후 output에 뺀다.
};
