import React, {Component} from 'react';
import {RandomAuthApi} from './index.js';
import Blocked from './Blocked';
import withAuth from './withAuth';

class PrivatePage1 extends Component {

  state = {authenticated: false}

  async componentDidMount() {
    const valid = await RandomAuthApi();
    this.setState({authenticated: valid});
  }

  render() {
    return (
      <div className='page'>
        {this.state.authenticated ?
          <div><h4>✅ Page 1</h4> Sensitive Information</div>
          :
          <Blocked/>
        }          
      </div>
    )
  }
}

export default PrivatePage1;
// export default withAuth(PrivatePage1);