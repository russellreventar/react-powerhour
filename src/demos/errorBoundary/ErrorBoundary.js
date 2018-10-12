import React from 'react';
import ErrorDisplay from './ErrorDisplay';

class ErrorBoundary extends React.Component {

  state = { error: null, errorInfo: null };
  
  componentDidCatch(error, errorInfo) {
    this.setState({error, errorInfo})
  }

  render() {

    const {error, errorInfo} = this.state;

    if (error) {
      return (
        <ErrorDisplay error={error} errorInfo={errorInfo}/>
      );
    } else {
      return this.props.children;
    }

  }  
}

const errorLoggerService = (error, errorInfo) => { //eslint-disable-line
  console.log('Error: ', error);
  console.log('Error Info: ', errorInfo);
};

export default ErrorBoundary;
