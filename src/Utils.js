import React from 'react';
import parse from "html-react-parser" 
import { format } from 'react-string-format';

import Data from './data/data'





// start images ---------------------------------------------------------------------------------------------------------------------
import electric_drill_annot from './images/electric_drill_annot.jpg'
import rc_car_it_1_1 from './images/rc_car_it_1_1.jpg'
import rc_car_it_1_2 from './images/rc_car_it_1_2.jpg'
import sarracenia_roots from './images/sarracenia_roots.jpg'
import sarracenia_young from './images/sarracenia_young.jpg'
import sarracenia_farnhamii from './images/sarracenia_farnhamii.jpg'
import sarracenia_purpurea from './images/sarracenia_purpurea.jpg'
import aco from './images/aco.gif'
import environ_engine from './images/environ_engine.gif'
import hackmaster from './images/hackmaster.jpg'
import least_square_segression from './images/least_square_segression.png'
import particle_system from './images/particle_system.gif'
import planet_sim from './images/planet_sim.gif'
import rert from './images/rert.gif'
import saving_your_bacon from './images/saving_your_bacon.png'
import walk_around3D from './images/walk_around3D.gif'
// end images -----------------------------------------------------------------------------------------------------------------------





// start helper functions -----------------------------------------------------------------------------------------------------------
function map_images(name) {
  if (electric_drill_annot.includes(name)) {
    return electric_drill_annot; 
  } else if (rc_car_it_1_1.includes(name)) {
    return rc_car_it_1_1;
  } else if (rc_car_it_1_2.includes(name)) {
    return rc_car_it_1_2;
  } else if (sarracenia_roots.includes(name)) {
    return sarracenia_roots;
  } else if (sarracenia_young.includes(name)) {
    return sarracenia_young;
  } else if (sarracenia_farnhamii.includes(name)) {
    return sarracenia_farnhamii;
  } else if (sarracenia_purpurea.includes(name)) {
    return sarracenia_purpurea;
  } else if (aco.includes(name)) {
    return aco;
  } else if (environ_engine.includes(name)) {
    return environ_engine;
  } else if (hackmaster.includes(name)) {
    return hackmaster;
  } else if (least_square_segression.includes(name)) {
    return least_square_segression;
  } else if (particle_system.includes(name)) {
    return particle_system;
  } else if (planet_sim.includes(name)) {
    return planet_sim;
  } else if (rert.includes(name)) {
    return rert;
  } else if (saving_your_bacon.includes(name)) {
    return saving_your_bacon;
  } else if (walk_around3D.includes(name)) {
    return walk_around3D;
  } else {
    return null;
  }
}
// end helper functions -------------------------------------------------------------------------------------------------------------




// create pages ---------------------------------------------------------------------------------------------------------------------
function create_element(dict, index) {
  var element_html = ""; 
  var path; 
  var left = true; 
  var code = false; 

  if (dict[index]["publish"] === true) {
    // Add the title and introduction
    element_html = format("<div className=\"project_div\">");
    element_html = format("{0}<h2>{1}</h2>", element_html, dict[index]['name']);
    element_html = format("{0}<p>{1}</p>", element_html, dict[index]["introduction"]);

    // add each iteration of the project 
    for (let iteration = 0; iteration < dict[index]["iterations"].length; iteration++) {
      if (dict[index]["iterations"][iteration]["publish"] === true) {
        element_html = format("{0}<div className=\"iteration_div\">", element_html);
        element_html = format("{0}<h3>{1}</h3>", element_html, dict[index]["iterations"][iteration]["title"]);
        element_html = format("{0}<p>{1}</p>", element_html, dict[index]["iterations"][iteration]["introduction"]);

        // add components list 
        if (dict[index]["iterations"][iteration]["components"].length >= 1){
          element_html = format("{0}<h4>{1}</h4>", element_html, "Components");
          element_html = format("{0}<div className=\"blurb_div\">", element_html);
          element_html = format("{0}<ul>", element_html, "Components");
          for (let component = 0; component < dict[index]["iterations"][iteration]["components"].length; component++) {

            // if components changed over iterations use "old_link" and "old_text"
            if (dict[index]["iterations"][iteration]["components"][component]["old_text"] === "") {
              element_html = format("{0}<li><a href=\"{1}\">{2}</a></li>", element_html, dict[index]["iterations"][iteration]["components"][component]["link"], dict[index]["iterations"][iteration]["components"][component]["text"]);
            } else {
              element_html = format("{0}<li><strike><a href=\"{1}\">{2}</a></strike> → <a href=\"{3}\">{4}</a></li>", element_html, dict[index]["iterations"][iteration]["components"][component]["old_link"], dict[index]["iterations"][iteration]["components"][component]["old_text"], dict[index]["iterations"][iteration]["components"][component]["link"], dict[index]["iterations"][iteration]["components"][component]["text"]);
            }

          }
          element_html = format("{0}</ul></div>", element_html);  // close iteration_div
        }

        // Add all the blurbs for the project 
        for (let blurb = 0; blurb < dict[index]["iterations"][iteration]["blurbs"].length; blurb++) {
          element_html = format("{0}<br/><h4>{1}</h4>", element_html, dict[index]["iterations"][iteration]["blurbs"][blurb]["title"]);
          element_html = format("{0}<div className=\"blurb_div\">", element_html);
          code = "code" in dict[index]["iterations"][iteration]["blurbs"][blurb];

          // if it is just a blurb, don't add another div
          // if there is an image, alternate adding in right_blurb_item
          if (dict[index]["iterations"][iteration]["blurbs"][blurb]["images"].length >= 1 || (code && dict[index]["iterations"][iteration]["blurbs"][blurb]["code"])) {
            if (left) {
              element_html = format("{0}<div className=\"left_blurb_item\">", element_html);
            } else {
              element_html = format("{0}<div className=\"right_blurb_item\">", element_html);
            }
            left = !left;
          }
          
          element_html = format("{0}<p>{1}</p>", element_html, dict[index]["iterations"][iteration]["blurbs"][blurb]["text"]);
          if (dict[index]["iterations"][iteration]["blurbs"][blurb]["images"].length >= 1 || (code && dict[index]["iterations"][iteration]["blurbs"][blurb]["code"])) {
            element_html = format("{0}</div>", element_html); // close blurb_item
          }

          // place the images 
          if (dict[index]["iterations"][iteration]["blurbs"][blurb]["images"].length >= 1 || (code && dict[index]["iterations"][iteration]["blurbs"][blurb]["code"])) {
            if (left) {
              element_html = format("{0}<div className=\"left_blurb_item{1}\">", element_html, code ? " code" : "");
            } else {
              element_html = format("{0}<div className=\"right_blurb_item{1}\">", element_html, code ? " code" : "");
            }
          }

          if (code) {
            element_html = format("{0}{1}", element_html, dict[index]["iterations"][iteration]["blurbs"][blurb]["code"]);
          } else {
            for (let image = 0; image < dict[index]["iterations"][iteration]["blurbs"][blurb]["images"].length; image++) {
              path = map_images(dict[index]["iterations"][iteration]["blurbs"][blurb]["images"][image]["name"]); 

              if (path != null) {
                element_html = format("{0}<img src=\"{1}\" alt=\"{2}\" />", element_html, path, dict[index]["iterations"][iteration]["blurbs"][blurb]["images"][image]["alt"]);
              }
            }
          }

          if (dict[index]["iterations"][iteration]["blurbs"][blurb]["images"].length >= 1 || (code && dict[index]["iterations"][iteration]["blurbs"][blurb]["code"])) {
            element_html = format("{0}</div>", element_html); // close blurb_item
          }

          element_html = format("{0}</div>", element_html); // close blurb_div
        }

        element_html = format("{0}</div>", element_html); // close iteration_div
      }
    }

    element_html = format("{0}</div>", element_html); // close project_div
  }
  
  return element_html; 
}

export const create_electronics_page = () => {
  var electronics_html = ""; 

  for (let electronics = 0; electronics < Data['electronics'].length; electronics++) {
    electronics_html = format("{0}{1}", electronics_html, create_element(Data['electronics'], electronics)); 
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
    guides_html = format("{0}{1}", guides_html, create_element(Data['guides'], guide)); 
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
    plants_html = format("{0}{1}", plants_html, create_element(Data['plants'], plant)); 
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
    programming_html = format("{0}{1}", programming_html, create_element(Data['programming'], plant)); 
  }

  return (
    <>
      {parse(programming_html)}
    </>
  );
}

// end create pages -----------------------------------------------------------------------------------------------------------------
