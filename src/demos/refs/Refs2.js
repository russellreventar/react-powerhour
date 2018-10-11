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
        <TextInput ref={this.textInput}/>
      </div>
    );
  }
}

const TextInput = React.forwardRef(
  (props, ref) => <input className="form-control" type="text" ref={ref}/>
)

export default ForwardRef;