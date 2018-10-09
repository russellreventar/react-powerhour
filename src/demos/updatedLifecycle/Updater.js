import React, {Component} from 'react';

export default class Updater extends Component {

  updateCount = 0;

  render() {

    const {name, onUpdate, children} = this.props;

    return (
      <div className={`updater updater--${name === 'Parent' ? 'yellow' : 'blue'}`}>
        <div className='updater-header'>
          <h3>{`<${name}/>`}</h3>
          <button className={`btn btn-${name === 'Parent' ? 'warning' : 'primary'}`} onClick={onUpdate}>
            Render
          </button>
          <div className='render-count'>
            {`# ${this.updateCount++}`}
          </div>
        </div>
        {children}
      </div>
    )
  }
}