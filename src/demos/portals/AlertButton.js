import React from 'react';

const AlertButton = ({onClick}) => (
  <button onClick={onClick} className='btn btn-danger'>
    Do not press
  </button>
)

export default AlertButton;