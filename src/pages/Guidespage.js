import React from 'react';
import { create_guides_page } from '../Utils';

const Guidespage = () => {
  return (
    <div className='body'>
      <div className='content_body'>
        <div className='title_div'>
          <h1>Guides page</h1>
          <p>
            A guide is meant to be a stand-alone procedure, kind of like a walk-through for some technology or key points. Some of these I refer to regularly, looking at you Git Personal Access Token (PAT) and Linux Containers (LXC).
          </p>
        </div>

        {create_guides_page()}
      </div>
    </div>
  );
}

export default Guidespage;