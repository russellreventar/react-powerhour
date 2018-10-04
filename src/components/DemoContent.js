import React from 'react';
import Section from './Section';

const DemoContent = ({demo, demoNumber, sections}) =>
  <div className={`demo-content`}>
    {sections.map((section, index) => 
      <Section
        demo={demo}
        key={index}
        id={`${demoNumber}_${index + 1}`}
        section={section}
        demoNumber={demoNumber}
        sectionNumber={index + 1}
      />
    )}
  </div>

export default DemoContent;