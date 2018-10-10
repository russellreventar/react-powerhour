import React from 'react';

class CreateRef extends React.Component {

  constructor(props) {
    super(props);
  }

  focusTextInput = () => {
    // focus the input with a ref
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.focusTextInput}>
          Focus
        </button>
        <input className="form-control" type="text"/>
      </div>
    );
  }
}

export default CreateRef;
