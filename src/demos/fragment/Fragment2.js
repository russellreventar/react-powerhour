import React from 'react';

/**-----------2-----------
  DEMO:     Fragment
  SECTION:  Table Headers with Fragments
  
  - evolution from using span > array > React.Fragment > <>
*/

const Headers = () => (
  <>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
    <th>Header 4</th>
  </>
)

const HeadersFragment = () => (
  <table>
    <thead>
      <tr>
        <Headers/>
      </tr>
    </thead>
  </table>
)

export default HeadersFragment;