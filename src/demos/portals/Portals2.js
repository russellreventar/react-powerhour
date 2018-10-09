import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';

/**-----------2-----------
  DEMO:     Portals
  SECTION:  Portal and Button event bubbling
  
  - Use portal to transport <Alert/> to the body.
  - showcase event bubbling. A click on button in <Alert> bubbles to parent <div>
*/

class Portals2 extends Component {
  
  state = {alert: false}
  
  toggleAlert = () => {
    this.setState(state => ({alert: !state.alert}))
  }

  render() {
    return (
      <div className='dropdown'>
        <button onClick={this.toggleAlert} className='btn btn-danger'>
          Do not press
        </button>
        <div onClick={this.toggleAlert}>
          {this.state.alert ?
            ReactDOM.createPortal(
              <Alert/>,
              document.body
            )
            : null
          }
        </div>
      </div>
    )
  }
}

export default Portals2;
