import React from 'react';
import { create_electronics_page } from '../Utils';

const Electronicspage = () =>{
  return (
    <div className='body'>
      <div className='content_body'>
        <div className='title_div'>
          <h1>Electronics page</h1>
          <p>
          I have always had an interest in electronics, it started when I was a kid and took apart broken electronics. This then lead to me taking apart electronics and putting them back together, in working order without anyone noticing. These endeavours are focused on learning about various electrical properties, the resulting projects you see are me using that knowledge in practical ways. Now, I regularly work on some electronics projects that I have kicking around. These types of projects often require more learning, planning, and resources, usually leading to longer turnaround times. 
          </p>
        </div>

        {create_electronics_page()}
      </div>
    </div>
  );
}
export default Electronicspage;