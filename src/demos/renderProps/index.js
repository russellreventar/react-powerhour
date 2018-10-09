import React from 'react';
import RenderProps1 from './RenderProps1';
import RenderProps2 from './RenderProps2';
import RenderProps3 from './RenderProps3';
import DemoContent from './../../components/DemoContent';

export default ({demo}) => {
  const sections = [
    {
      title: 'Cant share state',
      description: 'A Basic Header',
      render: () => <RenderProps1/>,
    },
    {
      title: "Share state using Render Prop",
      description: 'Pull headers out into its own component',
      render: () => <RenderProps2/>,
    },
    {
      title: "(optional) Careful using with PureComponent",
      description: '',
      render: () => <RenderProps3/>
    }
  ];

  return <DemoContent demo={demo} sections={sections}/>
}
  