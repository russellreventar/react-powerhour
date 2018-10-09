import React, {Component} from 'react';
import Cat from './Cat';

const House1 = () => (
  <div className='house'>
    <Mouse/>
  </div>
)

class Mouse extends Component {
  
  state = {x: null, y: null}

  onMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render() {
    const {x, y} = this.state;

    return (
      <div className="mouse" onMouseMove={this.onMouseMove}>
        {`Mouse position: x: ${x} y: ${y}`}
        <Cat position={this.state}/>
      </div>
    )
  }
}

export default House1;
