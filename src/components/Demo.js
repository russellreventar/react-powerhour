import React from 'react';

const Demo = ({demo, number}) => {

  const DemoComponent = demo.Component;

  demo.number = number;

  return (
    <div className={`demo-page ${demo.id}`}>
      <div className='demo-page__header'>
        <div className='title'>
          <div className='num'>
            {demo.number}
          </div>
          {demo.title}
        </div>
        <p>{demo.description}</p>
      </div>
      <DemoComponent demo={demo}/>
    </div>
  )
}


export default Demo;