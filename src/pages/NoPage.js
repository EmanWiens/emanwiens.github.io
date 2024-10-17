import React from 'react';
import { test_render } from '../Utils';

const NoPage = () => {
  return (
    <div className='body'>
      <div className='content_body'>
        <div className='title_div'>
          <h1>404 page not found :(</h1>
        </div>
        
        {test_render()}

      </div>
    </div>
  );
}

export default NoPage;