import React, {Component} from 'react';

class Portals1 extends Component {
  
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
        {this.state.alert ? <Alert/> : null}
      </div>
    )
  }
}

const Alert = () =>
  <div className='alert'>
    <h4> <>🔔</> Alert </h4>
    <p> I told you not to press.</p>
  </div>

export default Portals1;
