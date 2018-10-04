import React from 'react';

// 1.2
const Fragment2 = () => {
  
  // array, .Fragment, <>
  const Headers = () =>
    <>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
      <th>Header 4</th>
    </>

  return (
    <table>
      <thead>
        <tr>
          <Headers/>
        </tr>
      </thead>
    </table>
  )
}

export default Fragment2;