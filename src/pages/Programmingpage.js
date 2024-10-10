import React from 'react';
import { create_programming_page } from '../Utils';

const Programmingpage = () => {
  return (
    <div className='body'>
      <div className='content_body'>
        <div className='title_div'>
          <h1>Programming page</h1>
          <p>
            This will be the page where I showcase some of my programming projects. Some are games I made with friends, some are random simulations.
          </p>
        </div>

        {create_programming_page()}
      </div>
    </div>
  );
}

export default Programmingpage;