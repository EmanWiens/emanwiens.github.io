import React from 'react';
import { create_project_page } from '../Utils';

const Projectspage = () =>{
  return (
    <div className='body'>
      <div className='content_body'>
        <h2>Projects page</h2>
        
        <div>
          <p>There are a few personal projects and hobbies that I have been doing for many years. A couple of years ago I started documenting these projects more regularly and better. I decided to take a tutorial tone with these projects so that I and other people can reproduce them. </p>
          <hr />

          {create_project_page()}
        </div>
      </div>
    </div>
  );
}
export default Projectspage;