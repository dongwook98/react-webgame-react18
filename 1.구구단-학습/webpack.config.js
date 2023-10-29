const path = require('path');
const webpack = require('webpack');

module.exports= {
  mode: 'development',
  devtool: 'eval', // hidden-source-map
  resolve: { // 이거쓰면 entry.app에서 확장자명 생략가능 
    extensions: ['.jsx', 'js'],
  },

  entry: {
    app: './client'
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR','last 2 chrome versions'], // browserslist
              // 원하는 브라우저에만 babel-preset-env를 적용시키게 해줄수있음. (모든 브라우저에 적용하면 바벨작업량이 많아져서 느려질수도)
            },
            debug: true,
          }], 
          '@babel/preset-react',
        ],
        plugins: [],

        // plugin들의 모음이 preset이다.
        // preset-env안에서도 또 설정이 필요할수도?
      },
    }]
  },
  // plugin : 확장프로그램느낌 (로더에도 plugins가 있고 여기에도 plugins가 있음)
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
}

// 위 순서대로 흐름을 파악하면서 작성하자. (맨 위에는 기타 설정들을 적자)

// Entry : 합치고 싶은파일들 넣고
// Loaders(module) : Entry에 module 적용~!
// Output : 결과 ./dist/app.js
// Plugins : 추가적으로 하고싶은 작업 
// Mode : development, production


// 빌드시 뜨는 메시지~
// > webpack

// @babel/preset-env: `DEBUG` option

// Using targets:
// {
//   "chrome": "111",
//   "ios": "16.3",
//   "samsung": "20"
// }

// Using modules transform: auto

// Using plugins:
//   proposal-class-static-block { ios }
//   syntax-private-property-in-object
//   syntax-class-properties
//   syntax-numeric-separator
//   syntax-nullish-coalescing-operator
//   syntax-optional-chaining
//   syntax-json-strings
//   syntax-optional-catch-binding
//   transform-parameters { ios }
//   syntax-async-generators
//   syntax-object-rest-spread
//   proposal-export-namespace-from { ios }
//   syntax-dynamic-import
//   syntax-top-level-await

// Using polyfills: No polyfills were added, since the `useBuiltIns` option was not set.
// [BABEL] Note: The code generator has deoptimised the styling of /Users/kangdongwook/projects/react-webgame/react-webgame-react18/1.구구단-웹팩으로빌드/node_modules/react-dom/cjs/react-dom.development.js as it exceeds the max of 500KB.
// asset app.js 967 KiB [emitted] (name: app)
// runtime modules 123 bytes 1 module
// modules by path ./node_modules/ 953 KiB
//   modules by path ./node_modules/react/ 94.2 KiB
//     ./node_modules/react/index.js 189 bytes [built] [code generated]
//     ./node_modules/react/cjs/react.development.js 94.1 KiB [built] [code generated]
//   modules by path ./node_modules/react-dom/ 839 KiB
//     ./node_modules/react-dom/index.js 1.32 KiB [built] [code generated]
//     ./node_modules/react-dom/cjs/react-dom.development.js 838 KiB [built] [code generated]
//   modules by path ./node_modules/scheduler/ 19 KiB
//     ./node_modules/scheduler/index.js 197 bytes [built] [code generated]
//     ./node_modules/scheduler/cjs/scheduler.development.js 18.9 KiB [built] [code generated]
// modules by path ./*.jsx 1.45 KiB
//   ./client.jsx 208 bytes [built] [code generated]
//   ./GuGuDan.jsx 1.25 KiB [built] [code generated]
