import React from 'react';
import Portals1 from './Portals1';
import Portals2 from './Portals2';
import DemoContent from './../../components/DemoContent';

export default ({demoNumber, demo}) => {
  const sections = [
    {
      title: 'Table Headers',
      description: 'A Basic Header',
      render: () => <Portals1/>,
    },
    {
      title: "Table Headers using Portals",
      description: 'Pull headers out into its own component',
      render: () => <Portals2/>,
    },
  ];

  return <DemoContent demo={demo} demoNumber={demoNumber} sections={sections}/>
}
  