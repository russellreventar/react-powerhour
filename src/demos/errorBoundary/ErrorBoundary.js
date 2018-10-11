import React from 'react';
import ErrorDisplay from './ErrorDisplay';

class ErrorBoundary extends React.Component {

  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({error, errorInfo});
  }
    
  render() {

    const {error, errorInfo} = this.state;

    if (errorInfo) {
      return (
        <ErrorDisplay error={error} errorStack={errorInfo.componentStack}/>
      );
    } else {
      return this.props.children;
    }

  }  
}

const errorLoggerService = (error, errorInfo) => {
  console.log('Error: ', error);
  console.log('Error Info: ', errorInfo);
};

export default ErrorBoundary;
