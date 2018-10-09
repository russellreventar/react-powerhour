import React, {Component} from 'react';
import Cat from './Cat';

/**-----------1-----------
  DEMO:     Render Props
  SECTION:  No Render Props
  
  - Follow the mouse with Cat component
  - restricted to be inside the Mouse to have acces to state
*/

const NoRenderProp = () => (
  <div className='house'>
    <Mouse/>
  </div>
)

class Mouse extends Component {
  
  state = {x: null, y: null}

  onMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY})
  }

  render() {
    const {x, y} = this.state;

    return (
      <div className="mouse" onMouseMove={this.onMouseMove}>
        {`Mouse position: x: ${x} y: ${y}`}
        <Cat mouse={this.state}/>
      </div>
    )
  }
}

export default NoRenderProp;
