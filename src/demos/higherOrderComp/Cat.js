import React from 'react';
import withMouse from './withMouse';

const Cat = ({mouse = {x:null, y: null}}) => {
  return (
    <div className='cat' style={{left: mouse.x, top: mouse.y}}/>
  )
}

export default withMouse(Cat);