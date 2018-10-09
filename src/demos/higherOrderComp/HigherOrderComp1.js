import React from 'react';
import Cat from './Cat';
import {Mouse} from './../renderProps/RenderProps2';

const WithRenderProp = () => ( //eslint-disable-line
  <div className='house'>
    <Mouse
      chaseMe={ mouse => <Cat mouse={mouse}/> }
    />
  </div>
)

const WithHigherOrderComponent = () => (
  <div className='house'>
    <Cat />
  </div>
)



export default WithHigherOrderComponent;
