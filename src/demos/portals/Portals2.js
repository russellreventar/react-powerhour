import React, {Component} from 'react';
import AlertButton from './AlertButton';
import Alert from './Alert';
import ReactDOM from 'react-dom';

/**-----------2-----------
  DEMO:     Portals
  SECTION:  Portal and Button event bubbling
  
  - Use portal to transport <Alert/> to the body.
  - showcase event bubbling. A click on button in <Alert> bubbles to parent <div>
*/

class Portals2 extends Component {
  
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

export default Portals2;
