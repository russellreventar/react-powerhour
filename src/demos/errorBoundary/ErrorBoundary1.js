import React from 'react';
import BuggyCounter from './BuggyCounter';

/**-----------1-----------
  DEMO:     Error Boundaries
  SECTION:  No ErrorBoundary
  
  - simulate an error occuring inside a component that crashes the app
  - CRA dev mode, will show error screen. once you close youll see app crashed
*/

const NoBoundary = () => (
  <>
    <BuggyCounter/>
  </>
)

export default NoBoundary;