import React from 'react';
import Projects from './projects'

const Projectspage = () =>{
  return (
    <div>
      <h2>Projects page</h2>
      <div>
        <p>Welcome to my personal page. I am currently working on switching the backend to <a href="https://react.dev/">React</a>. Some parts of the site might be missing, not functional yet, or might just look odd.
          I also want to use this opportunity to rewrite some of my personal projects :D
        </p>

        <h3>{Projects['projects'][0]["name"]}</h3>
        <p>{Projects['projects'][0]["introduction"]}</p>
        <h3>{Projects['projects'][0]["iterations"][0]["blurbs"][0]["title"]}</h3>
        <p>{Projects['projects'][0]["iterations"][0]["blurbs"][0]["text"]}</p>
      </div>
    </div>
  );
}
export default Projectspage;