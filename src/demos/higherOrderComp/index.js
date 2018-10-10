import React from 'react';
import HigherOrderComp1 from './HigherOrderComp1';
// import HigherOrderComp2 from './HigherOrderComp2';
import DemoContent from './../../components/DemoContent';


export default ({demo}) => {
  const sections = [
    {
      title: 'Use HOC instead of render prop',
      description: 'enhance any component with Mouse position',
      render: () => <HigherOrderComp1/>,
    },
    // {
    //   title: "(optional) Ease and benefits of HOC",
    //   description: 'compose multiple hocs and chain them together',
    //   render: () => <HigherOrderComp2/>,
    // },
  ];

  return <DemoContent demo={demo} sections={sections}/>
}
  