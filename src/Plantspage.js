import React from 'react';
import { create_plants_page } from './Utils';

const Plantspage = () => {
  return (
    <div className='body'>
      <div className='content_body'>
        <h2>Plants page</h2>
        
        <div>
          <p>I like plants and over time I have taken care of many of them. Many plants I have get massive and this will be the place where I showcase them and also explain what I have learned about the plants.</p>
          <hr />

          {create_plants_page()}
        </div>
      </div>
    </div>
  );
}
export default Plantspage;