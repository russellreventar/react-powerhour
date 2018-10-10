import React from 'react';
import WillRecieve from './WillRecieve';
import DerivedState from './DerivedState';
import DemoContent from './../../components/DemoContent';

export default ({demo}) => {
  const sections = [
    {
      title: "componentWillRecieveProps",
      render: () => <WillRecieve/>,
    },
    {
      title: "getDerivedStateFromProps",
      render: () => <DerivedState/>
    }
  ];

  return <DemoContent demo={demo} sections={sections}/>
}
  