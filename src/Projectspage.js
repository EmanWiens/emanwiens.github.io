import React from 'react';
import Projects from './projects'
import parse from "html-react-parser" 
  

function create_project_element(index) {
  return (
    <>
      <h3>{Projects['projects'][index]["name"]}</h3>
      <React.Fragment>{parse(Projects['projects'][index]["introduction"])}</React.Fragment>
      <h3>{Projects['projects'][index]["iterations"][0]["blurbs"][0]["title"]}</h3>
      <React.Fragment>{parse(Projects['projects'][index]["iterations"][0]["blurbs"][0]["text"])}</React.Fragment>
      <h3>{Projects['projects'][index]["iterations"][0]["blurbs"][1]["title"]}</h3>
      <React.Fragment>{parse(Projects['projects'][index]["iterations"][0]["blurbs"][1]["text"])}</React.Fragment>
    </>
  ); 
}

const Projectspage = () =>{
  return (
    <div>
      <pre id="./projects"></pre>

      <h2>Projects page</h2>
      <div>
        <p>Welcome to my personal page. I am currently working on switching the backend to <a href="https://react.dev/">React</a>. Some parts of the site might be missing, not functional yet, or might just look odd.
          I also want to use this opportunity to rewrite some of my personal projects :D
        </p>

        {create_project_element(0)}
      </div>
    </div>
  );
}
export default Projectspage;