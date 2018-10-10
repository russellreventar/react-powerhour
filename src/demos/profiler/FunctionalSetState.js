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

class FunctionSetState extends Component {

  state = {count: 0}

  handleIncrement = () => {
    this.setState({
      count: this.state.count < 3 ? this.state.count + 1 : this.state.count
    });
  };

  render() {
    return (
      <>
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