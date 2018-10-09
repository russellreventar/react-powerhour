import React from 'react';
import UnsafeWillRecieve from './UnsafeWillRecieve';
import DerivedState from './DerivedState';
import DemoContent from './../../components/DemoContent';

export default ({demoNumber, demo}) => {
  const sections = [
    {
      title: "UNSAFE_componentWillRecieveProps",
      render: () => <UnsafeWillRecieve/>,
    },
    {
      title: "getDerivedStateFromProps",
      render: () => <DerivedState/>
    }
  ];

  return <DemoContent demo={demo} demoNumber={demoNumber} sections={sections}/>
}
  