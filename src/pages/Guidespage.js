import React from 'react';
import { create_guides_page } from '../Utils';

const Guidespage = () => {
  return (
    <div className='body'>
      <div className='content_body'>
        <h1>Guides page</h1>
        
        <div>
          <p>A guide is meant to be a stand-alone procedure for something, kind of like a walk-through of some sort. Some of these I refer to regularly, looking at you Git Personal Access Token.</p>

          {create_guides_page()}
        </div>
      </div>
    </div>
  );
}

export default Guidespage;