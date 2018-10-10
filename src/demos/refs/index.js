import React from 'react';
import Refs1 from './Refs1';
import Refs2 from './Refs2';
import DemoContent from './../../components/DemoContent';

export default ({demo}) => {

  const sections = [
    {
      title: 'Create Ref',
      render: () => <Refs1/>,
    },
    {
      title: "Forward Ref",
      description: 'Pass a ref through a component to one of its children',
      render: () => <Refs2/>,
    },
  ];

  return <DemoContent demo={demo} sections={sections}/>
}
  