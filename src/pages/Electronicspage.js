import React from 'react';
import { create_electronics_page } from '../Utils';

const Electronicspage = () =>{
  return (
    <div className='body'>
      <div className='content_body'>
        <div className='title_div'>
          <h1>Electronics page</h1>
          <p>
              I have been interested in small eletronics and have start making some myself. Some of the items I strip out of old broken electronics, some I make, and some I buy. I always enjoy learning more about eletronics and tinkering around with them myself has been teaching me a lot. These projects often require more learning and planning, usually leading to longer turn around times. 
          </p>
        </div>

        {create_electronics_page()}
      </div>
    </div>
  );
}
export default Electronicspage;