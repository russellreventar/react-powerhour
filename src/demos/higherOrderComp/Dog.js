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

//withOpacity

//hoc chain
export default Dog;