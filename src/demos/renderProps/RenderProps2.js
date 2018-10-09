import React, {Component} from 'react';
import Cat from './Cat';
import Dog from './Dog';

const House2 = () => (
  <div className='house'>
    <Mouse
      chaseMe={position => 
        <>
          <Cat position={position}/>
          <Dog position={position}/>
        </>
      }
    />
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
    const {chaseMe} = this.props;
    const {x, y} = this.state;

    return (
      <div className="mouse" onMouseMove={this.onMouseMove}>
        {`Mouse position: x: ${x} y: ${y}`}
        {chaseMe(this.state)}
      </div>
    )
  }
}

export default House2;
