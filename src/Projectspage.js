import React from 'react';
import { create_project_page } from './Utils';

const Projectspage = () =>{
  return (
    <div>
      <pre id="./projects"></pre>

      <h2>Projects page</h2>
      
      <div>
        <p>Welcome to my personal page. I am currently working on switching the backend to <a href="https://react.dev/">React</a>. Some parts of the site might be missing, not functional yet, or might just look odd.
          I also want to use this opportunity to rewrite some of my personal projects :D
          <br />
          <br />
          <br />
          The distinction between a project and a guide is that a guide explains something else in a standalone fashion, e.g. Installing CUPS.
        </p>
        <hr />

        {create_project_page()}
        <hr />
      </div>
    </div>
  );
}
export default Projectspage;