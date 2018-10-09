import React, {Component} from 'react';
import AlertButton from './AlertButton';
import Alert from './Alert';

/**-----------1-----------
  DEMO:     Portals
  SECTION:  No Portal
  
  - Alert modal opened in hidden overflow of parent is cut-off
*/

class NoPortal extends Component {
  
  state = {alert: false}
  
  toggleAlert = () => {
    this.setState({alert: !this.state.alert});
  }

  render() {
    return (
      <>
        <AlertButton onClick={this.toggleAlert}/>
        {this.state.alert ? <Alert/> : null}
      </>
    )
  }
}

export default NoPortal;
