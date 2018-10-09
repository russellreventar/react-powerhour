import React from 'react';
import Fragment1 from './Fragment1';
import Fragment2 from './Fragment2';
import Fragment3 from './Fragment3';
import DemoContent from './../../components/DemoContent';

const headers = [
  {
    id: 1,
    name: 'Dogs',
  },
  {
    id: 2,
    name: 'Cats',
  },
  {
    id: 3,
    name: 'Birds',
  },
];

export default ({demo}) => {

  const sections = [
    {
      title: 'Basic table headers',
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
      render: () => <Fragment3 headers={headers}/>
    }
  ];

  return <DemoContent demo={demo} sections={sections}/>
}
  