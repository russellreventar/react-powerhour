import React, {Component} from 'react';
import FakeComponentTree from './FakeComponentTree';

/**-----------2-----------
  DEMO:     Profiler & Functional SetState
  SECTION:  Functional SetState
  
  - passing a function to setstate allows to mutate state
  - can return null to prevent re-render
  - use current state values that are reliable
  - decouple state logie (good for testing)
  - re-usable
*/

const incrementer = (inc) => (state, props) => {

  const newCount = state.count + inc;

  if(newCount > 3) {
    return null;
  }

  return {
    count: newCount
  };
}

class FunctionSetState extends Component {

  state = {count: 0}

  handleIncrement = (inc) => () => {
    this.setState(incrementer(inc));
  };

  render() {
    return (
      <>
        <button onClick={this.handleIncrement(-1)} className='btn btn-danger'>
          -
        </button>
        <div className='count'>
          {this.state.count}
        </div>
        <button onClick={this.handleIncrement(1)} className='btn btn-success'>
          +
        </button>
        <FakeComponentTree/>
      </>
    )
  }
}
export default FunctionSetState;