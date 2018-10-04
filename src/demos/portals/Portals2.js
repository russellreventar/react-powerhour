import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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

const Alert = () =>
  <div className='alert'>
    <h4> <>🔔</> Alert </h4>
    <p> I told you not to press.</p>
    <button className='btn btn-secondary'>Close me</button>
  </div>

export default Portals2;
