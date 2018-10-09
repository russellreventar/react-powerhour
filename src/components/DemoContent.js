import React from 'react';
import Section from './Section';

const DemoContent = ({demo, sections}) => (
  <div className={`demo-content`}>
    {sections.map((section, index) => 
      <Section
        demo={demo}
        key={index}
        id={`${demo.number}_${index + 1}`}
        section={section}
        sectionNumber={index + 1}
      />
    )}
  </div>
)

  

export default DemoContent;