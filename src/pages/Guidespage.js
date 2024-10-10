import React from 'react';
import { create_guides_page } from '../Utils';

const Guidespage = () => {
  return (
    <div className='body'>
      <div className='content_body'>
        <div className='title_div'>
          <h1>Guides page</h1>
          <p>
            A guide is meant to be a stand-alone procedure for something, kind of like a walk-through of some sort. Some of these I refer to regularly, looking at you Git Personal Access Token.
          </p>
        </div>

        {create_guides_page()}
      </div>
    </div>
  );
}

export default Guidespage;