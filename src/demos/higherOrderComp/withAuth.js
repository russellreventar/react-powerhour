import React, {Component} from 'react';
// import {RandomAuthApi} from './index.js';
import Blocked from './Blocked';

const RandomAuthApi = async() => Math.random() >= 0.5;

const withAuth = (InnerComponent) => {
  class WithAuth extends Component {
    state = {authenticated: false}

    async componentDidMount() {
      const loggedIn = await RandomAuthApi();
      this.setState({authenticated: loggedIn});
    }

    async componentDidUpdate(prevProps, prevState) {
      const loggedIn = await RandomAuthApi();
      if(prevState.authenticated !== loggedIn) {
        this.setState({authenticated: loggedIn});
      }
    }

    render() {
      return (
        <div className='page'>
          {this.state.authenticated ?
            <InnerComponent {...this.props}/>
            :
            <Blocked/>
          }          
        </div>
      )
    }
  }

  WithAuth.displayName = `WithAuth${InnerComponent.name}`;
  
  return WithAuth;
};

export default withAuth;