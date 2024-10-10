import React from 'react';
import { create_plants_page } from '../Utils';

const Plantspage = () => {
  return (
    <div className='body'>
      <div className='content_body'>
        <div className='title_div'>
          <h1>Plants page</h1>
          <p>
            I like plants and over time I have taken care of many of them. Many plants I have often get massive and this will be the place where I showcase them and also explain what I have learned about the plants. 
          </p>
        </div>

        {create_plants_page()}
      </div>
    </div>
  );
}
export default Plantspage;