import React, {Component} from 'react';

const withMouse = (InnerComponent) => {
  return class WithMouse extends Component {
    state = {x: null, y: null}

    onMouseMove = (e) => {
      this.setState({ x: e.clientX, y: e.clientY})
    }

    render() {

      const {x, y} = this.state;

      return (
        <div className="mouse" onMouseMove={this.onMouseMove}>
          {`Mouse position: x: ${x} y: ${y}`}
          <InnerComponent mouse={this.state}/>
        </div>
      )
    }
  }
}

export default withMouse;
