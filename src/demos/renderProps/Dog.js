import React from 'react';

const Dog = ({position}) => {
  const offset = 10;

  return (
    <div className='dog' style={{
      left: position.x + offset,
      top: position.y + offset
    }}/>
  )
}

export default Dog;