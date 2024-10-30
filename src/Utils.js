import React from 'react';
import parse from "html-react-parser" 

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'; // TODO in future use this (https://www.npmjs.com/package/react-accessible-accordion) to make collapsible iterations 
import Carousel from 'react-bootstrap/Carousel'; // TODO in future use this (https://www.npmjs.com/package/react-bootstrap-carousel) to make collapsible iterations 


import Data from './data/data'





// start images ---------------------------------------------------------------------------------------------------------------------
import electric_drill_annot from './images/electric_drill_annot.jpg'
import rc_car_it_1 from './images/rc_car_it_1.jpg'
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
import sunlight_spectrum from './images/sunlight_spectrum.png'
import chlorophyll_spectrum from './images/chlorophyll_spectrum.jpg'
import led_spectral_graphs from './images/led_spectral_graphs.jpg'
import rbg_led_spectrum from './images/rbg_led_spectrum.jpg'
import full_spectrum_with_UV from './images/full_spectrum_with_UV.png'
import uv_index from './images/uv_index.png'
import dbh_1A from './images/dbh_1A.png'
import rc_car_it_2 from './images/rc_car_it_2.jpg'
import photovoltaic_cell from './images/photovoltaic_cell.png'
import rc_car_it_3_1 from './images/rc_car_it_3_1.jpg'
import rc_car_it_3_2 from './images/rc_car_it_3_2.jpg'
import grav_2d from './images/grav_2d.gif'
import bloch_sphere from './images/bloch_sphere.png'
// end images -----------------------------------------------------------------------------------------------------------------------



// start helper functions -----------------------------------------------------------------------------------------------------------
function map_images(name) {
  console.log(name); 
  console.log(saving_your_bacon); 
  console.log(sunlight_spectrum); 

  if (electric_drill_annot.includes(name)) {
    return electric_drill_annot; 
  } else if (rc_car_it_1.includes(name)) {
    return rc_car_it_1;
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
  } else if (sunlight_spectrum.includes(name)) {
    return sunlight_spectrum;
  } else if (chlorophyll_spectrum.includes(name)) {
    return chlorophyll_spectrum;
  } else if (rbg_led_spectrum.includes(name)) {
    return rbg_led_spectrum;
  } else if (led_spectral_graphs.includes(name)) {
    return led_spectral_graphs;
  } else if (uv_index.includes(name)) {
    return uv_index;
  } else if (full_spectrum_with_UV.includes(name)) {
    return full_spectrum_with_UV;
  } else if (dbh_1A.includes(name)) {
    return dbh_1A;
  } else if (rc_car_it_2.includes(name)) {
    return rc_car_it_2;
  } else if (photovoltaic_cell.includes(name)) {
    return photovoltaic_cell;
  } else if (rc_car_it_3_1.includes(name)) {
    return rc_car_it_3_1;
  } else if (rc_car_it_3_2.includes(name)) {
    return rc_car_it_3_2;
  } else if (grav_2d.includes(name)) {
    return grav_2d;
  } else if (bloch_sphere.includes(name)) {
    return bloch_sphere;
  } else {
    return null;
  }
}

// end helper functions -------------------------------------------------------------------------------------------------------------




// create pages ---------------------------------------------------------------------------------------------------------------------
const render_element = (dict, index) => {
  var iteration_elements = []; 

  for (let iteration = 0; iteration < dict[index]["iterations"].length; iteration++) {
    if (dict[index]["iterations"][iteration]["publish"] === true) {
      iteration_elements.push(render_iteration(dict[index]["iterations"], iteration)); 
    }
  }

  return (
    <div className="project_div">
      <h2>{dict[index]['name']}</h2>
      <p>{parse(dict[index]["introduction"])}</p>

      {iteration_elements}
    </div>
  ); 
}

const render_iteration = (iteration_dict, index) => {
  var component_elements = []; 
  var blurb_elements = []; 

  for (let component = 0; component < iteration_dict[index]["components"].length; component++) {
    component_elements.push(render_component(iteration_dict[index]["components"], component)); 
  }

  for (let blurb = 0; blurb < iteration_dict[index]["blurbs"].length; blurb++) {
    blurb_elements.push(render_blurb(iteration_dict[index]["blurbs"], blurb)); 
  }

  var render_components = null; 
  if (iteration_dict[index]["components"].length >= 1) {
    render_components = (
    <div className="components_div">
      <br />
      <h4>Components</h4>
      <ul>
        {component_elements}
      </ul>
    </div>); 
  }

  return (
    <div className="iteration_div">
      <div className="iteration_header_div">
        <h3>{iteration_dict[index]["title"]}</h3>
        <p>{parse(iteration_dict[index]["introduction"])}</p>
      </div>

      {render_components}

      <div className="blurbs_div">
        {blurb_elements}
      </div>
    </div>
  );
}

const render_component = (component_dict, index) => {
  if (component_dict[index]["old_text"] === "") {
    return (<li><a href={component_dict[index]["link"]}>{component_dict[index]["text"]}</a></li>); 
  } else {
    return (<li><strike><a href={component_dict[index]["old_link"]}>{component_dict[index]["old_text"]}</a></strike> → <a href={component_dict[index]["link"]}>{component_dict[index]["text"]}</a></li>); 
  }
}

const render_blurb = (blurb_dict, index) => {
  var right_blurb = null; 
  var left_blurb = null; 
  var whole_blurb = null; 

  if (blurb_dict[index]["images"].length >= 1) {
    right_blurb = (
      <div className="right_blurb_item">
        {console.log(blurb_dict[index]["images"][0]["name"])}
        <img src={map_images(blurb_dict[index]["images"][0]["name"])} alt={blurb_dict[index]["alt"]} />
      </div>
    ); 

    left_blurb = (
      <div className="left_blurb_item">
        <p>{parse(blurb_dict[index]["text"])}</p>
      </div>
    ); 
  } else if ("code" in blurb_dict[index]) {
    right_blurb = (
      <div className="right_blurb_item code">
        {parse(blurb_dict[index]["code"])}
      </div>
    ); 

    left_blurb = (
      <div className="left_blurb_item">
        <p>{parse(blurb_dict[index]["text"])}</p>
      </div>
    ); 
  } else if (blurb_dict[index]["images"].length === 0) {
    whole_blurb = (
      <div className="whole_blurb_item">
        {parse(blurb_dict[index]["text"])}
      </div>
    ); 
  }

  var break_html = ( <br /> ); 
  if (blurb_dict[index]["title"] === "")
    break_html = null; 

  return (
    <>
      {break_html}
      <h4>{blurb_dict[index]["title"]}</h4>

      <div className="blurb_div">
        {left_blurb}

        {right_blurb}
        
        {whole_blurb}
      </div>
    </>
  ); 
}

export const create_electronics_page = () => {
  var electronic_elements = []; 

  for (let electronics = 0; electronics < Data['electronics'].length; electronics++) {
    if (Data['electronics'][electronics]["publish"] === true) {
      electronic_elements.push(render_element(Data["electronics"], electronics)); 
    }
  }

  return (
    <>
      {electronic_elements}
    </>
  );
}

export const create_guides_page = () => {
  var guide_elements = []; 

  for (let guides = 0; guides < Data['guides'].length; guides++) {
    if (Data['guides'][guides]["publish"] === true) {
      guide_elements.push(render_element(Data["guides"], guides)); 
    }
  }

  return (
    <>
      {guide_elements}
    </>
  );
}

export const create_plants_page = () => {
  var plant_elements = []; 

  for (let plants = 0; plants < Data['plants'].length; plants++) {
    if (Data['plants'][plants]["publish"] === true) {
      plant_elements.push(render_element(Data["plants"], plants)); 
    }
  }

  return (
    <>
      {plant_elements}
    </>
  );
}

export const create_programming_page = () => {
  var programming_elements = []; 

  for (let programming_counter = 0; programming_counter < Data['programming'].length; programming_counter++) {
    if (Data['programming'][programming_counter]["publish"] === true) {
      programming_elements.push(render_element(Data["programming"], programming_counter)); 
    }
  }

  return (
    <>
      {programming_elements}
    </>
  );
}
// end create pages -----------------------------------------------------------------------------------------------------------------
