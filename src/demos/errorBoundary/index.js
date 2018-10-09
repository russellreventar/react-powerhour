import React from 'react';
import ErrorBoundary1 from './ErrorBoundary1';
import ErrorBoundary2 from './ErrorBoundary2';
import DemoContent from './../../components/DemoContent';

export default ({demo}) => {
  const sections = [
    {
      title: 'Buggy Counter',
      description: 'Throws an Error when counter is 5',
      render: () => <ErrorBoundary1/>,
    },
    {
      title: "Error Boundary to catch error",
      description: 'Prevent App from crashing using Error Boundary Component',
      render: () => <ErrorBoundary2/>,
    },
  ];

  return <DemoContent demo={demo} sections={sections}/>
}
  