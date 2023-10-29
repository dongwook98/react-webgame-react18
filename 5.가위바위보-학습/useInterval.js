import { useRef, useEffect } from 'react';

// const [isRunning, setRunning] = useState(true);
// useInterval(() => {
//  console.log('hello');
// }, isRunning ? 1000 : null);

// 커스텀 훅? 훅들을 우리가 직접만들수 있음
// 보통 어떤 특정한 훅 2개이상이 반복된다 할때 커스텀 훅을 만듬
// useRef와 useEffect가 하나의 interval 역할을 해서 하나의 커스텀 훅으로 만든다.

// 1초 뒤에 가위
// 1.1초 뒤에 changeHand
// 2초 뒤에 바위
// 2.1초 뒤에 changeHand
// 3초 뒤에 보
// 3.1초 뒤에 changeHand
function useInterval(callback, delay) {
  const savedCallback = useRef(); // useRef를 쓰면 최신 callback을 참조가능

  useEffect(() => {
    savedCallback.current = callback; // 실행할코드를 ref에 저장
  });

  useEffect(() => {
    function tick() {
      savedCallback.current(); // 최신 callback을 tick함수에 담아둠
    } //

    if (delay !== null) {
      let id = setInterval(tick, delay); // delay가 null이 아닐때 실행
      return () => clearInterval(id); // delay가 null이 되면 clearInterval
    }
  }, [delay]);

  return savedCallback.current;
}

export default useInterval;
