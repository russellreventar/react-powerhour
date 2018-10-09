import React, {Component} from 'react';
import FakeComponentTree from './FakeComponentTree';

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