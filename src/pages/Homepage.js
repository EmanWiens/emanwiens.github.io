import React from 'react';

const Homepage = () => {
  return (
    <div className='body'>
      <div className='content_body'>
        <h2>Home page</h2>
        <div>
          <p>Welcome to my personal page. I am currently working on switching the backend to <a href="https://react.dev/">React</a>. Some parts of the site might be missing, not functional yet, or might just look odd.
          </p><br /><br />

          <h5>Roadmap</h5>
          <p>These are the changes I need to make happen for this switch in order of importance.</p>
          <ol>
            <li><strike>Switch the backend to <a href="https://react.dev/">React</a>.</strike></li>
            <li><strike>Make a functional Navigation bar.</strike></li>
            <li>Migrate my project contents here.</li>
            <li>Make a <i>nice looking</i> Navigation bar.</li>
            <li>Make a nice UI for the projects pages.</li>
          </ol>        
        </div>
      </div>
    </div>
  );
}
export default Homepage;