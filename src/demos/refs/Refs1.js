import React from 'react';

class CreateRef extends React.Component {

  constructor(props) {
    super(props);
    this.textInput = React.createRef()
  }

  focusTextInput = () => {
    // focus the input with a ref
    this.textInput.current.focus();
    this.textInput.current.style.width = '20px';
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.focusTextInput}>
          Focus
        </button>
        <input ref={this.textInput} className="form-control" type="text"/>
      </div>
    );
  }
}

export default CreateRef;
