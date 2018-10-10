import React, {Component} from 'react';
import Updater from './Updater';

/**-----------1-----------
  DEMO:     Updated Lifecycle
  SECTION:  Component Will Recieve Props
  
*/

class Parent extends Component {

  render() {
    return (
      <Updater
        name='Parent'
        onUpdate={() => this.setState({})}
      >
        <Child/>
      </Updater>
    )
  }
}

class Child extends Component {

  state = {recievedCount: 0}

  UNSAFE_componentWillReceiveProps() {    
    this.setState(state => ({
      recievedCount: state.recievedCount + 1
    }));
  }

  render() {
    return (
      <Updater
        name='Child'
        onUpdate={() => this.setState({})}
      >
        <div className='text-right'>
          <h4>State from ComponentWillRecieveProps <b># {this.state.recievedCount}</b></h4>
        </div>
      </Updater>
    )
  }
}

export default Parent;