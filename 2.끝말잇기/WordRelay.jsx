const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('제로초');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
    } else {
      setResult('땡');
    }
    setValue('');
    inputRef.current.focus();
  };

  onChageInput = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div>
        <h1>끝말잇기</h1>
        <p>끝말잇기 게임에 오신것을 환영합니다.</p>
      </div>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChageInput}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
