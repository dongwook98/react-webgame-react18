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
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      });
    } else {
      this.setState({
        result: '땡',
        value: '',
      });
    }
    this.input.focus();
  };

  onChageInput = (e) => {
    this.setState({ value: e.currentTarget.value });
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>
          <h1>끝말잇기</h1>
          <p>끝말잇기 게임에 오신것을 환영합니다.</p>
        </div>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            type='text'
            value={this.state.value}
            onChange={this.onChageInput}
          />
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelayClass;
