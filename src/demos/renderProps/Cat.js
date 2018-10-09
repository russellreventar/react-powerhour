import React from 'react';

const Cat = ({position}) => {
  return (
    <div className='cat' style={{left: position.x, top: position.y}}/>
  )
}

export default Cat;