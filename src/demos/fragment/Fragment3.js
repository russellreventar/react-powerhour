import React, {Fragment} from 'react';

/**-----------3-----------
  DEMO:     Fragment
  SECTION:  Table Headers with Fragments inside a MAP
  
  - you can add keys to fragments as you map over an array
*/

const HeadersFragmentMap = ({headers}) => (
  <table>
    <thead>
      <tr>
        {/* render headers with empty column in between each*/}
        {
          headers.map(th => (
            <Fragment key={th.id}>
              <th>{th.name}</th>
              <th></th>
            </Fragment>
          ))
        }
      </tr>
    </thead>
  </table>
)

export default HeadersFragmentMap;