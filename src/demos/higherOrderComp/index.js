import React from 'react';
import HigherOrderComp1 from './HigherOrderComp1';
import HigherOrderComp2 from './HigherOrderComp2';
// import Fragment3 from './Fragment3';
import DemoContent from './../../components/DemoContent';

export const RandomAuthApi = async() => true;

export default ({demoNumber, demo}) => {
  const sections = [
    {
      title: 'Similar auth logic in 2 pages',
      description: 'A Basic Header',
      render: () => <HigherOrderComp1/>,
    },
    {
      title: "Table Headers using Fragment",
      description: 'Pull headers out into its own component',
      render: () => <HigherOrderComp2/>,
    },
  ];

  return <DemoContent demo={demo} demoNumber={demoNumber} sections={sections}/>
}
  