import React from 'react';

const Dog = ({mouse}) => {
  const offset = 10;

  return (
    <div className='dog' style={{
      left: mouse.x + offset,
      top: mouse.y + offset
    }}/>
  )
}

export default Dog;