import React from 'react';

class ForwardRef extends React.Component {

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
    this.textInput.current.style.width = '200px';
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.focusTextInput}>
          Focus
        </button>
        <input className="form-control" type="text" ref={this.textInput} />
      </div>
    );
  }
}

export default ForwardRef;