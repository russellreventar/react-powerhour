import React, {Component} from 'react';
import PrivatePage1 from './PrivatePage1';
import PrivatePage2 from './PrivatePage2';

class HigherOrderComp1 extends Component {

  render() {
    return (
      <>
        <button className='btn btn-warning' onClick={() => this.setState({})}>render</button>
        <PrivatePage1/>
        <PrivatePage2/>
      </>
    )
  }
}

export default HigherOrderComp1;
