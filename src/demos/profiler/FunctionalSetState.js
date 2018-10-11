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
const inc = (i) => (state) => {

  if(state.count >= 3) return null

  return {
    count: state.count + i
  }
}

class FunctionSetState extends Component {

  state = {count: 0}

  handleIncrement = (i) => () => {
    this.setState(inc(i));
  };

  render() {
    return (
      <>
        <button className='btn btn-danger' onClick={this.handleIncrement(-1)}>
          -
        </button>
        <div className='count'>
          {this.state.count}
        </div>
        <button className='btn btn-success' onClick={this.handleIncrement(1)}>
          +
        </button>
        <FakeComponentTree/>
      </>
    )
  }
}
export default FunctionSetState;