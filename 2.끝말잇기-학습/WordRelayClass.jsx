// 쪼갠 파일에서 필요한 라이브러리 require 해야한다.
const React = require('react');
const { Component } = React;

class WordRelayClass extends Component {
  state = {
    word: '강동욱',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    // 끝말잇기 로직
    if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      });
      this.input.focus();
    } else {
      this.setState({
        result: '땡',
        value: '',
      });
      this.input.focus();
    }
  }

  onChageInput = (e) => {
    this.setState({value: e.currentTarget.value})
  }

  input;

  onRefInput = (c) => {
    this.input = c;
  }

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="wordInput">글자를 입력하세요.</label>
          <input ref={this.onRefInput} type="text" value={this.state.value} onChange={this.onChageInput} />
          <button>입력!!!!!</button>
          
          <h1>핫로더 짱!</h1>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

// 파일을 쪼갰으니까 바깥에서 사용할수 있게 exports
module.exports = WordRelayClass;