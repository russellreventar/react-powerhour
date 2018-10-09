import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

/**-----------2-----------
  DEMO:     Error Boundaries
  SECTION:  Error Boundary
  
  - new componentDidCatch lifecycle
  - catches any errors in children components
  - render children if no errors set
  - wrapping of error boundaries matter
*/

const WithErrorBoundaries = () => {
  return (
    <>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
    </>
  )
}

export default WithErrorBoundaries;