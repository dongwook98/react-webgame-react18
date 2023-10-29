const React = require('react');
const ReactDom = require('react-dom/client');
// const ReactDom = require('react-dom'); // react-dom/client를 해야 ReactDom을 쓸 수 있음


// 쪼갠파일 불러오기
const WordRelay = require('./WordRelay');

// ReactDom.render(<WordRelay/>, document.querySelector('#root'));

ReactDom.createRoot(document.querySelector("#root")).render(<WordRelay/>);// React 18버전 코드