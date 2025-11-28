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
            Welcome to my page! This is a space where I can primarily share my interests and  hobbies. This page is mostly intended for me to reference back to some of my many projects and interests, almost like a journal. Some of these are guides that I refer to from time to time and, at some point, it became easier to store them here.<br /><br /> 
            
            I always have more projects brewing, so I add them as I go.
          </p><br /><br />

          {/* <h2>Roadmap</h2>
          <p>These are the changes I need to make happen for this switch to be deemed a success.</p>
          <ol>
            <li><strike>Switch the backend to <a href="https://react.dev/">React</a>.</strike></li>
            <li><strike>Make a functional Navigation bar.</strike></li>     
            <li>Migrate my project contents here.
              <ul>
                <li><strike>Move old web page projects here.</strike></li>
                <li><strike>Move Notion projects here.</strike></li>
                <li>Document the undocumented projects.</li>
              </ul>
            </li>
            <li><strike>Make a <i>nice looking</i> Navigation bar.</strike></li>
            <li>Make a nice UI for the projects pages.</li>
            <li>Personalise webpage colours and layout.</li>
          </ol> */}
        </div>
      </div>
    </div>
  );
}


export default Homepage;