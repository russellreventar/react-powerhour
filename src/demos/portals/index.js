import React from 'react';
import Portals1 from './Portals1';
import Portals2 from './Portals2';
import DemoContent from './../../components/DemoContent';

export default ({demoNumber, demo}) => {
  const sections = [
    {
      title: 'Alert popup',
      description: 'Popup is cut off due to parents overflow:hidden;',
      render: () => <Portals1/>,
    },
    {
      title: "Alert popup transported",
      description: 'Transport the modal to the body using Portals',
      render: () => <Portals2/>,
    },
  ];

  return <DemoContent demo={demo} demoNumber={demoNumber} sections={sections}/>
}
  