웹팩을 사용해서 여러개의 자바스크립트파일을 하나의 자바스크립트파일로 합칠수 있다.
이게 뭐가좋냐? 나중에 개발할때 컴포넌트가 수백, 수천가지가 만들어진다. 그러면 js파일이 수백, 수천가지가 만들어질것이다. 참고로 페이스북 컴포넌트는 20000개라고한다..
그러면 `<script>` 태그안에 10줄이 있다고 가정하고 컴포넌트가 2000개라면 20000줄의 코드를 관리해야한다. 유지보수가 불가능하다.
또 다른방법인 `<script src="">` 를 사용해 코드를 다른 파일로 쪼개도 `<script>` 태그가 중복이 된다. 중복제거는 개발자의 숙명이다.

소크라라는 사람이 웹팩이라는 시스템을 만들어냈다. 이 웹팩은 여러개의 자바스크립트 파일을 하나로 합쳐서 하나의 자바스크립트 파일로 만들어주는 기술을 만들어냈다. 더 나아가서 하나로 합치면서 바벨도 적용할 수 있고 쓸데없는 코드들도 다 없앨수 있다. 예를들어 콘솔로그를 제거할 수 있다.

웹팩을 하려면 노드를 알아야한다.

웹팩을 돌리려면 노드를 알아야한다.
노드는 자바스크립트 실행기 그 이상 그 이하도 아니다.
노드는 서버가 아니다.


# 웹팩 설정 순서

1. npm init 으로 package.json 생성
2. npm i react react-dom 설치
3. npm i -D webpack webpack-cli 
    - D : 개발용
4. webpack.config.js 파일 생성 
5. client.jsx 파일 생성 
6. index.html 생성
    - `<script src="./dist/app.js">` 바디 맨끝에 작성

위 과정을 자동화해주는 create react app 이다. 

<br>
<br>
<br>

# js 확장자와 jsx 확장자의 차이 파일안에 jsx문법을 쓰면 jsx 확장자를 쓰는게 좋다.

<br>
<br>
<br>

# 위 과정을 다 하고 터미널에 webpack 이라고 치면 빌드됨.

<br>
<br>
<br>

## command not found... 에러

해결 방법 1. 명령어로 등록

해결 방법 2. pacakage.json에 scripts 부분에 "dev": "webpack" 추가

해결 방법 3. npx webpack 

<br>
<br>
<br>

## 2번째 에러 
ERROR in ./client.jsx 7:16
Module parse failed: Unexpected token (7:16)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| const WordRelay = require('./WordRelay');
| 
> ReactDom.render(<WordRelay/>, document.querySelector('#root')); 
 
 위 에러는 JSX라 에러난거임 -> 바벨 설치하러가자

여기서 복잡해지는게 바벨한다고 JSX를 쓸 수 있는게 아니라 바벨안에서도 JSX를 따로 설정해야한다.

npm i -D @babel/core 바벨의 기본적인거들어있는거

npm i -D @babel/preset-env 사용자의 브라우저에 맞게 알아서 최신문법을 옛날문법으로 지원하는거로 바꿔줌

npm i -D @babel/preset-react -> JSX를 지원함

npm i -D babel-loader -> 바벨과 웹팩 연결

이제 바벨과 웹팩을 연결해야한다.

```js
module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }
    }]
  },
```
위 코드 추가

<br>

# 정리 
여러가지 js파일(client.jsx, WordRelay.jsx)을 하나의 js파일(app.js)로 합쳐서 html이 실행할 수 있게 만들어준다.
그러면서 중간에 최신 문법들을 옛날 브라우저에서도 돌아갈 수 있게 만들어준다.




# 웹팩 데브서버와 핫 리로딩
 
 ## 핫 리로딩

 npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D


 ## 웹팩 데브서버 
 npm i -D webpack-dev-server

 package.json scripts 부분 "dev": "webpack serve --env development" 수정

 webpack.config.js 에서 설치한 플러그인 추가

 devServer 설정!

 ```js
 devServer: {
    hot: true,
    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname) },
  },
```
# devServer의 역할 
- 빌드의 결과물을 dist폴더에 결과물을 메모리로 저장해놓음 그리고 webpack devServer는 변경점을 감지할 수 있음(핫 리로딩). 우리 소스코드에 변경점이 생기면 그에 따라 저장했던 결과물을 수정을 해줌.

# 리로딩 vs 핫 리로딩 
react-refresh @pmmmwh/react-refresh-webpack-plugin 이거 2개 설치 안해도 리로딩은 됨 (webpackdevServer는 원래 변경점을 탐지하면 리로딩은 시켜줌)

리로딩 : 새로고침 (기존 데이터 다 날라감)

핫 리로딩 : 기존 데이터 유지하면서 화면 바꿔줌