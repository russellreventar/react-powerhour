import React from 'react';
import HigherOrderComp1 from './HigherOrderComp1';
import DemoContent from './../../components/DemoContent';


export default ({demo}) => {
  const sections = [
    {
      title: 'Use HOC instead of render prop',
      description: 'enhance any component with Mouse position',
      render: () => <HigherOrderComp1/>,
    },
  ];

  return <DemoContent demo={demo} sections={sections}/>
}
  