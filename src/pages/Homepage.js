import React from 'react';

const Homepage = () => {
  return (
    <div className='body'>
      <div className='content_body'>
        <div className='title_div'>
          <h1>Homepage</h1>
          <h5 style={{"color":"#77FF77"}}>
            Now compatible with mobile!<br /><br />
          </h5>
          <p>
            Welcome to my personal page. I am currently working on switching the backend to <a href="https://react.dev/">React</a>. Some parts of the site might be missing, not functional yet, or might just look odd.
          </p><br /><br />

          <h2>Roadmap</h2>
          <p>These are the changes I need to make happen for this switch to be deemed a success.</p>
          <ol>
            <li><strike>Switch the backend to <a href="https://react.dev/">React</a>.</strike></li>
            <li><strike>Make a functional Navigation bar.</strike></li>
            <li>Migrate my project contents here.
              <ul>
                <li><strike>Move old web page projects here.</strike></li>
                <li>Move Notion projects here.</li>
                <li>Document the undocumented projects.</li>
              </ul>
            </li>
            <li><strike>Make a <i>nice looking</i> Navigation bar.</strike></li>
            <li>Make a nice UI for the projects pages.</li>
            <li>Personalise webpage colours and layout.</li>
          </ol>     
        </div>
      </div>
    </div>
  );
}


export default Homepage;