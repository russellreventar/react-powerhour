import React, {Component} from 'react';
import Updater from './Updater';

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

  static getDerivedStateFromProps(props, state) {
    return {
      recievedCount: state.recievedCount + 1
    }
  }

  render() {
    return (
      <Updater
        name='Child'
        onUpdate={() => this.setState({})}
      >
        <div className='text-right'>
          <h4>Derived state from Props <b># {this.state.recievedCount}</b></h4>
        </div>
      </Updater>
    )
  }
}

export default Parent;