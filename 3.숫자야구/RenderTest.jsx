import React, { Component } from 'react';

class Test extends Component {
  state = {
    counter: 0,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.counter !== nextState.counter) {
      // 현재 카운터와 미래 카운터가 다르면
      return true; // 렌더링
    }
    return false; // 렌더링 x
  }

  onClick = () => {
    this.setState({});
  };

  render() {
    console.log('렌더링', this.state);
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Test;
