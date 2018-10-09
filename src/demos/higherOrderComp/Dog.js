import React from 'react';
import withMouse from './withMouse';
import {compose} from 'recompose';

const Dog = ({mouse}) => {
  const offset = 10;

  return (
    <div className='dog' style={{
      left: mouse.x + offset,
      top: mouse.y + offset
    }}/>
  )
}

const withOpacity = (opacity) => (InnerComponent) => (props) => (
  <span style={{opacity}}>
    <InnerComponent {...props}/>
  </span>
)

export default compose(
  withMouse,
  withOpacity(0.4)
)(Dog);