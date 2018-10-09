import React from 'react';

class ErrorBoundary extends React.Component {

  state = { error: null, errorInfo: null };
  
  componentDidCatch(error, errorInfo) {

    errorLoggerService(error, errorInfo);
    this.setState({
      error: error && error.toString(),
      errorInfo: errorInfo
    })
  }
  
  render() {

    const {error, errorInfo} = this.state;

    if (errorInfo) {
      return (
        <div>
          <h5>Ergh, I crashed</h5>
          <details>
            {error}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }  
}

const errorLoggerService = (error, errorInfo) => {
  console.log('Error: ', error);
  console.log('Error Info: ', errorInfo);
};

export default ErrorBoundary;
