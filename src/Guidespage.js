import React from 'react';
import { create_guides_page } from './Utils';

const Guidespage = () =>{
  return (
    <div>
      <pre id="./projects"></pre>

      <h2>Guides page</h2>
      
      <div>
        <p>Welcome to my personal page. I am currently working on switching the backend to <a href="https://react.dev/">React</a>. Some parts of the site might be missing, not functional yet, or might just look odd.
          <br />
          <br />
          The distinction between a project and a guide is that a guide explains something else in a standalone fashion, e.g. Installing CUPS.
        </p>
        <hr />

        {create_guides_page()}
      </div>
    </div>
  );
}
export default Guidespage;