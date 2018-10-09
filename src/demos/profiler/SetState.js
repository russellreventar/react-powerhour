import React, {Component} from 'react';
import FakeComponentTree from './FakeComponentTree';

/**-----------1-----------
  DEMO:     Profiler & Functional SetState
  SECTION:  SetState
  
  - discuss the risks of using normal this.setState
  - setState is asynchronous, value can is not reliable and u can mutate it
  - when set state is called, it will always trigger a re-render
*/


class SetState extends Component {

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
export default SetState;