import React from 'react';

const Homepage = () =>{
  return (
    <div>
      <h2>Home page</h2>
      <div>
        <p>Welcome to my personal page. I am currently working on switching the backend to <a href="https://react.dev/">React</a>. Some parts of the site might be missing, not functional yet, or might just look odd.
        </p><br /><br />

        <h5>Roadmap</h5>
        <p>These are the changes I need to make happen for this switch in order of importance, they might not be the first done.</p>
        <ol>
          <li><strike>Switch the backend to <a href="https://react.dev/">React</a>.</strike></li>
          <li><strike>Make a functional Navigation bar.</strike></li>
          <li>Make a <i>nice looking</i> Navigation bar.</li>
          <li>Migrate my project contents here.</li>
          <li>Make a guides page for stand-alone explanations.</li>
          <li>Move my guide contents here.</li>
          <li>Make a nice UI for the projects and guides pages.</li>
        </ol>        
      </div>
    </div>
  );
}
export default Homepage;