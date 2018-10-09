import React, {Component} from 'react';
import {RandomAuthApi} from './index.js';
import Blocked from './Blocked';
// import withAuth from './withAuth';
// import {compose} from 'recompose';

class PrivatePage2 extends Component {

  state = {authenticated: false}

  async componentDidMount() {
    const valid = await RandomAuthApi();
    this.setState({authenticated: valid});
  }

  render() {
    return (
      <div className='page'>
        {this.state.authenticated ?
          <div><h4>✅ Page 2</h4> Sensitive Information</div>
          :
          <Blocked/>
        }          
      </div>
    )
  }
}

export default PrivatePage2;

// class PrivatePage2 extends Component {

//   render() {
//     return (
//       <div><h4>✅ Page 2</h4> Sensitive Information</div>
//     )
//   }
// }

// const withOpacity = (opacity) => (InnerComponent) => (props) => {
//   return (
//     <div style={{opacity}}>
//       <InnerComponent {...props}/>
//     </div>
//   )
// }

// export default compose(
//   withAuth,
//   withOpacity(0.4)
// )(PrivatePage2)
