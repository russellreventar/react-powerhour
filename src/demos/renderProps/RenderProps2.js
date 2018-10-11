import React, {Component} from 'react';
import Cat from './Cat';
import Dog from './Dog';

/**-----------2-----------
  DEMO:     Render Props
  SECTION:  With Render Prop
  
  - pass up the state in a render prop for any use
  - touch on warning when using render prop with PureComponent
*/

const WithRenderProp = () => (
  <div className='house'>
    <Mouse/>
  </div>
)

export class Mouse extends Component {
  
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
export default WithRenderProp;
