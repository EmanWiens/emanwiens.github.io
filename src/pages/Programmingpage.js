import React from 'react';
import { create_programming_page } from '../Utils';

const Programmingpage = () => {
  return (
    <div className='body'>
      <div className='content_body'>
        <h1>Programming page</h1>
        <div>
          <p>This will be the page where I showcase some of my programming projects. Some are games I made with friends, some are random simulations.</p>

          {create_programming_page()}
        </div>
      </div>
    </div>
  );
}

export default Programmingpage;