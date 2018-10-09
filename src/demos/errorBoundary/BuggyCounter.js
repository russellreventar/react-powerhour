import React from 'react';

class BuggyCounter extends React.Component {

  state = { counter: 0 };
  
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  
  render() {
    
    // Simulate a JS error
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    
    return (
      <h1 onClick={this.increment}>{this.state.counter}</h1>
    )
  }
}

export default BuggyCounter;