import React, {Component} from 'react';
import FakeComponentTree from './FakeComponentTree';

const incrementer = (state, props) => {

  if(state.count >= 3) {
    return null;
  }

  return {
    count: state.count + 1
  };
}

class FunctionSetState extends Component {

  state = {count: 0}

  handleIncrement = () => {
    this.setState(incrementer);
  };

  render() {
    return (
      <>
        <input id="check" type="checkbox"/>
        <div id='t1'>
          asd
        </div>
        <div id='t2'>
          asd
        </div>
        <div className='count'>
          {this.state.count}
        </div>
        <button className='btn btn-success inc' onClick={this.handleIncrement}>
          +
        </button>
        <FakeComponentTree/>
      </>
    )
  }
}
export default FunctionSetState;