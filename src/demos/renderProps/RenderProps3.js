import React, {Component, PureComponent} from 'react';
import Cat from './Cat';
import Dog from './Dog';

class House3 extends Component {
  

  animalChase = (mouse) => {
    return (
      <>
        <Cat mouse={mouse}/>
        <Dog mouse={mouse}/>
      </>
    )
  }

  render() {
    return (
      <div className='house'>
        <button className='btn btn-warning' onClick={() => this.setState()}>
          Render
        </button>
        <Mouse
          chaseMe={this.animalChase}
        />
      </div>
    )
  }
}

let counter = 0;

class Mouse extends PureComponent {
  
  state = {x: null, y: null}
  
  onMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY})
  }

  render() {
    const {chaseMe} = this.props;
    const {x, y} = this.state;

    return (
      <div className="mouse" onMouseMove={this.onMouseMove}>
        <h4>{`Mouse Render #: ${counter++}`}</h4>
        {`Mouse position: x: ${x} y: ${y}`}
        {chaseMe(this.state)}
      </div>
    )
  }
}

export default House3;
