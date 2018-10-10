import React from 'react';

const ErrorDisplay = ({error, errorInfo}) => (
  <div>
    <h5>Ergh, I crashed</h5>
    <details>
      {error && error.toString()}
      <br />
      {errorInfo && errorInfo.componentStack}
    </details>
  </div>
)

export default ErrorDisplay;