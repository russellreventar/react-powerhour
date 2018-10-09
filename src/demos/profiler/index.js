import React from 'react';
import SetState from './SetState';
import FunctionalSetState from './FunctionalSetState';
import DemoContent from './../../components/DemoContent';

export default ({demo}) => {
  const sections = [
    {
      title: "SetState",
      render: () => <SetState/>,
    },
    {
      title: "Functional SetState",
      render: () => <FunctionalSetState/>,
    },
  ];

  return <DemoContent demo={demo} sections={sections}/>
}
  