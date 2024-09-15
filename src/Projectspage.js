import React from 'react';
import Projects from './projects'
import parse from "html-react-parser" 
import { format } from 'react-string-format';

function create_project_element(index) {
  // Add the title and introduction
  
  var project_html = format("<h3>{0}</h3>", Projects['projects'][index]['name']);
  project_html = format("{0}<p>{1}</p>", project_html, Projects['projects'][index]["introduction"]);

  // add each iteration of the project 
  // TODO add stylize when there are more than one iteration 
  for (let iteration = 0; iteration < Projects['projects'][index]["iterations"].length; iteration++) {
    // TODO make a slide show for images for each iteration 

    // add components list 
    if (Projects['projects'][index]["iterations"][iteration]["components"].length >= 1){
      project_html = format("{0}<h3>{1}</h3><ul>", project_html, "Components");
      for (let component = 0; component < Projects['projects'][index]["iterations"][iteration]["components"].length; component++) {
        project_html = format("{0}<li><a href=\"{1}\">{2}</a></li>", project_html, Projects['projects'][index]["iterations"][iteration]["components"][component]["link"], Projects['projects'][index]["iterations"][iteration]["components"][component]["text"]);
      }
      project_html = format("{0}</ul>", project_html);
    }

    // Add all the blurbs for the project 
    for (let blurb = 0; blurb < Projects['projects'][index]["iterations"][iteration]["blurbs"].length; blurb++) {
      project_html = format("{0}<h3>{1}</h3>", project_html, Projects['projects'][index]["iterations"][iteration]["blurbs"][blurb]["title"]);
      project_html = format("{0}<p>{1}</p>", project_html, Projects['projects'][index]["iterations"][iteration]["blurbs"][blurb]["text"]);
    }
  }

  return (
    <>
      {parse(project_html)}
    </>
  ); 
}

// TODO write function that loops and creates all projects
function create_project_page() {
  return (
    <>
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
        <hr />

        {create_project_element(0)}
        <hr />

        {create_project_element(1)}
        <hr />

        {/* {create_project_element(2)} */}
        <hr />
      </div>
    </div>
  );
}
export default Projectspage;