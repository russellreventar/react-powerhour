import React from 'react';
import Context1 from './Context1';
import Context2 from './Context2';
import Context3 from './Context3';
import DemoContent from './../../components/DemoContent';

export default ({demo}) => {
  const sections = [
    {
      title: 'Language Toggle',
      description: 'Translate between English & French',
      render: () => <Context1/>,
    },
    {
      title: "Language Toggle using Context",
      description: 'Avoid prop drilling by providing language',
      render: () => <Context2/>,
    },
    {
      title: "Allow consumers to update context",
      description: 'Pass in functions through context so consumers can update state',
      render: () => <Context3/>,
    },
  ];

  return <DemoContent demo={demo} sections={sections}/>
}
  