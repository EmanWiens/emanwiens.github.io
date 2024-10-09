import React from 'react';
import parse from "html-react-parser" 
import { format } from 'react-string-format';

import Data from './data/data'

// import Accordion from 'react-bootstrap/Accordion'; // for projects, https://react-bootstrap.github.io/docs/components/accordion/
// import Carousel from 'react-bootstrap/Carousel'; // for images, https://react-bootstrap.github.io/docs/components/carousel




// start images ---------------------------------------------------------------------------------------------------------------------
import electric_drill_annot from './images/electric_drill_annot.jpg'
import rc_car_it_1_1 from './images/rc_car_it_1_1.jpg'
import rc_car_it_1_2 from './images/rc_car_it_1_2.jpg'
// end images -----------------------------------------------------------------------------------------------------------------------





// start helper functions -----------------------------------------------------------------------------------------------------------
function map_images(name) {
  if (electric_drill_annot.includes(name)) {
    return electric_drill_annot; 
  } else if (rc_car_it_1_1.includes(name)) {
    return rc_car_it_1_1;
  } else if (rc_car_it_1_2.includes(name)) {
    return rc_car_it_1_2;
  } else {
    return null;
  }
}
// end helper functions -------------------------------------------------------------------------------------------------------------




// create pages ---------------------------------------------------------------------------------------------------------------------
function create_element(dict, index) {
  var element_html = ""; 
  var path; 

  if (dict[index]["publish"] === true) {
    // Add the title and introduction
    element_html = format("<h2>{0}</h2>", dict[index]['name']);
    element_html = format("{0}<p>{1}</p>", element_html, dict[index]["introduction"]);

    // add each iteration of the project 
    for (let iteration = 0; iteration < dict[index]["iterations"].length; iteration++) {
      if (dict[index]["iterations"][iteration]["publish"] === true) {
        element_html = format("{0}<br/><h3>{1}</h3>", element_html, dict[index]["iterations"][iteration]["title"]);
        element_html = format("{0}<p>{1}</p>", element_html, dict[index]["iterations"][iteration]["introduction"]);

        // add components list 
        if (dict[index]["iterations"][iteration]["components"].length >= 1){
          element_html = format("{0}<h4>{1}</h4><ul>", element_html, "Components");
          for (let component = 0; component < dict[index]["iterations"][iteration]["components"].length; component++) {
            element_html = format("{0}<li><a href=\"{1}\">{2}</a></li>", element_html, dict[index]["iterations"][iteration]["components"][component]["link"], dict[index]["iterations"][iteration]["components"][component]["text"]);
          }
          element_html = format("{0}</ul>", element_html);
        }

        // Add all the blurbs for the project 
        for (let blurb = 0; blurb < dict[index]["iterations"][iteration]["blurbs"].length; blurb++) {
          element_html = format("{0}<br/><h4>{1}</h4>", element_html, dict[index]["iterations"][iteration]["blurbs"][blurb]["title"]);
          element_html = format("{0}<p>{1}</p>", element_html, dict[index]["iterations"][iteration]["blurbs"][blurb]["text"]);

          // place the images 
          for (let image = 0; image < dict[index]["iterations"][iteration]["blurbs"][blurb]["images"].length; image++) {
            path = map_images(dict[index]["iterations"][iteration]["blurbs"][blurb]["images"][image]["name"]); 

            if (path != null) {
              element_html = format("{0}<img src=\"{1}\" alt=\"{2}\" />", element_html, path, dict[index]["iterations"][iteration]["blurbs"][blurb]["images"][image]["alt"]);
            }
          }
        }
      }
    }
  }
  
  return element_html; 
}

export const create_electronics_page = () => {
  var electronics_html = ""; 

  for (let electronics = 0; electronics < Data['electronics'].length; electronics++) {
    electronics_html = format("{0}{1}<hr />", electronics_html, create_element(Data['electronics'], electronics)); 
  }

  return (
    <>
      {parse(electronics_html)}
    </>
  );
}

export const create_guides_page = () => {
  var guides_html = ""; 

  for (let guide = 0; guide < Data['guides'].length; guide++) {
    guides_html = format("{0}{1}<hr />", guides_html, create_element(Data['guides'], guide)); 
  }

  return (
    <>
      {parse(guides_html)}
    </>
  );
}

export const create_plants_page = () => {
  var plants_html = ""; 

  for (let plant = 0; plant < Data['plants'].length; plant++) {
    plants_html = format("{0}{1}<hr />", plants_html, create_element(Data['plants'], plant)); 
  }

  return (
    <>
      {parse(plants_html)}
    </>
  );
}

export const create_programming_page = () => {
  var programming_html = ""; 

  for (let plant = 0; plant < Data['programming'].length; plant++) {
    programming_html = format("{0}{1}<hr />", programming_html, create_element(Data['programming'], plant)); 
  }

  return (
    <>
      {parse(programming_html)}
    </>
  );
}

// end create pages -----------------------------------------------------------------------------------------------------------------
