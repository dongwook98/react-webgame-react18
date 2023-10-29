import React, { Component, createRef } from 'react';
import Try from './TryClass';

// this 안쓰는 경우 바깥으로 뺴자. 다른곳에서도 사용할수도있다.
function getNumbers() {
  // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     result: '',
  //     value:'',
  //     answer: getNumbers(),
  //     tries: [],
  //   };
  //   this.onSubmitForm = this.onSubmitForm.bind(this);
  //   this.onChangeInput = this.onChangeInput.bind(this);
  // }

  state = {
    result: '',
    value: '',
    answer: getNumbers(), // ex: [1,3,5,7]
    tries: [], // push 쓰면 안됨! (기존 state === 신규 state 면 재렌더링x)
  };

  // 화살표함수쓰면 bind(this) 안해도됨~
  onSubmitForm = (e) => {
    const { result, value, tries, answer } = this.state;
    // console.log(this); // NumberBaseball 컴포넌트
    e.preventDefault();

    // 숫자야구 로직
    if (value === answer.join('')) {
      // 맞췄을경우
      this.setState((prevState) => {
        return {
          result: '홈런!',
          tries: [...prevState.tries, { try: value, result: '홈런!' }],
        };
      });
      alert('게임을 다시 시작합니다!');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
      this.inputRef.current.focus();
    } else {
      // 틀렸을경우
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        // 10번이상틀렸을때
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
        this.inputRef.current.focus();
      } else {
        // 10번 미만 틀렸을때
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [
              ...prevState.tries,
              { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` },
            ],
            value: '',
          };
        });
        this.inputRef.current.focus();
      }
    }
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
    console.log(this.state.answer);
  };

  // fruit = [
  //   { fruit: '사과', taste: '맛있다'},
  //   { fruit: '바나나', taste: '맛없다'},
  //   { fruit: '포도', taste: '시다'},
  //   { fruit: '귤', taste: '떫다'},
  //   { fruit: '감', taste: '쓰다'},
  //   { fruit: '배', taste: '달다'},
  //   { fruit: '밤', taste: '몰라'},
  // ];

  inputRef = createRef();

  // onInputRef = () => {
  //   console.log();
  //    다른 동작(미세한 컨트롤하는 코드 넣을수 있음)
  //   this.inputRef = c;
  // };

  render() {
    const { result, value, tries } = this.state;
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.inputRef}
            maxLength={4}
            value={value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return (
              <Try key={`${i + 1}차 시도 :`} tryInfo={v} index={i} /> // 코드 압축! (가독성 , 재사용성, 성능최적화)
            );
          })}
        </ul>
      </>
    );
  }
}
export default NumberBaseball; // import NumberBaseball;
