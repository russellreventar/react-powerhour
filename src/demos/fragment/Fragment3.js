import React from 'react';

/**-----------3-----------
  DEMO:     Fragment
  SECTION:  Table Headers with Fragments inside a MAP
  
  - you can add keys to fragments as you map over an array
*/

const HeadersFragmentMap = ({headers}) => (
  <table>
    <thead>
      <tr>
        {
          headers.map(th => (
            <React.Fragment key={th.id}>
              <th>{th.name}</th>
              <th> </th>
            </React.Fragment>
          ))
        }
      </tr>
    </thead>
  </table>
)

export default HeadersFragmentMap;