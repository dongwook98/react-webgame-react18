import React, { PureComponent } from 'react';

// PureComponent는 참조자료형은 어려워함..
class Test extends PureComponent {
  state = {
    counter: 0,
    string: 'hello',
    number: 1,
    boolean: true,
    object: {},
    array: [],
  };

  onClick = () => {
    const array = this.state.array;
    array.push(1);
    this.setState({
      // array: array, // 렌더링 x
      array: [...this.state.array, 1], // 렌더링 o
    });
  };

  render() {
    console.log('렌더링', this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Test;
