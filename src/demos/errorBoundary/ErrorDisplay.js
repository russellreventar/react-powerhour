import React from 'react';

const ErrorDisplay = ({error, errorStack}) => (
  <div>
    <h5>Ergh, I crashed</h5>
    <details>
      {error}
      <br />
      {errorStack}
    </details>
  </div>
)

export default ErrorDisplay;