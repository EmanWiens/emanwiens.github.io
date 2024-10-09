import React from 'react';
import { create_programming_page } from '../Utils';

const Programmingpage = () => {
  return (
    <div className='body'>
      <div className='content_body'>
        <h2>Programming page</h2>
        <div>
          <p>This will be the page where I showcase some of my programming projects. Some are games I made with friends, some are random simulations.</p>
          <hr />

          {create_programming_page()}
        </div>
      </div>
    </div>
  );
}

export default Programmingpage;