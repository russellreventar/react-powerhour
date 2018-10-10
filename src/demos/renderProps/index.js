import React from 'react';
import RenderProps1 from './RenderProps1';
import RenderProps2 from './RenderProps2';
import DemoContent from './../../components/DemoContent';

export default ({demo}) => {
  const sections = [
    {
      title: 'Unshareable state',
      description: 'Cat is limited inside Mouse to get its x,y',
      render: () => <RenderProps1/>,
    },
    {
      title: "Share state using Render Prop",
      description: 'Give mouse position through a chaseMe() render prop',
      render: () => <RenderProps2/>,
    },
  ];

  return <DemoContent demo={demo} sections={sections}/>
}
  