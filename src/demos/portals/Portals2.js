import React, {Component} from 'react';
import Alert from './Alert';
import AlertButton from './AlertButton';
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
        <div onClick={this.toggleAlert}>
          {
            this.state.alert ? (
              ReactDOM.createPortal(
                <Alert/>,
                document.body
              )
            ) : null
          }
        </div>
      </>
    )
  }
}

export default Portals2;
