// 쪼갠 파일에서 필요한 라이브러리 require 해야한다.
const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('제로초');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.dir(e.target.children.word.value) // e.target[0]
    // 끝말잇기 로직
    if(word[word.length - 1] === e.target.children.word.value[0]) {

      setResult('딩동댕');
      // setWord(value);
      setWord(e.target.children.word.value);
      // setValue('');
      e.target.children.word.value = '';
      inputRef.current.focus();
    } else {
      setResult('땡');
      // setValue('')
      e.target.children.word.value = '';
      inputRef.current.focus();
    }
  }

  const onChageInput = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        {/* 컨트롤드 인풋과 언컨트롤드 인풋 */
        // value가 onSubmit안에서만 쓰는경우는 언컨트롤드인풋 사용가능 
        // e.target.children.word.value
        // 언컨트롤드 인풋에는 defaultValue 사용 value사용시 컨트롤드 인풋처럼 간주됨
        }
        <input id="word" ref={inputRef} type="text" defaultValue="강동욱"/>
        
        <button>클릭!!!!!</button>
        
        <h1>핫로더 짱짱!</h1>
      </form>
      <div>{result}</div>
    </>
  )
}

// 파일을 쪼갰으니까 바깥에서 사용할수 있게 exports
module.exports = WordRelay;