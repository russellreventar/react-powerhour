import React from 'react';
import Fragment1 from './Fragment1';
import Fragment2 from './Fragment2';
import Fragment3 from './Fragment3';
import DemoContent from './../../components/DemoContent';

export default ({demoNumber, demo}) => {
  const sections = [
    {
      title: 'Table Headers',
      description: 'A Basic Header',
      render: () => <Fragment1/>,
    },
    {
      title: "Table Headers using Fragment",
      description: 'Pull headers out into its own component',
      render: () => <Fragment2/>,
    },
    {
      title: "Table Headers with Map",
      description: 'Add empty column to the right of each header',
      render: () => <Fragment3/>
    }
  ];

  return <DemoContent demo={demo} demoNumber={demoNumber} sections={sections}/>
}
  