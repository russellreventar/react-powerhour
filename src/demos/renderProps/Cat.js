import React from 'react';

const Cat = ({mouse}) => {
  return (
    <div className='cat' style={{left: mouse.x, top: mouse.y}}/>
  )
}

export default Cat;