import React, { useState } from 'react';
import parse from "html-react-parser" 
// import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'; // TODO in future use this
// import Carousel from 'react-bootstrap/Carousel'; // TODO in future use this


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
import led_wiring from './images/led_wiring.jpg'
import industrial_light from './images/industrial_light.jpg'

// end images -----------------------------------------------------------------------------------------------------------------------


// start helper functions -----------------------------------------------------------------------------------------------------------
const IMAGE_MAP = {
  electric_drill_annot: electric_drill_annot,
  rc_car_it_1: rc_car_it_1,
  sarracenia_roots: sarracenia_roots,
  sarracenia_young: sarracenia_young,
  sarracenia_farnhamii: sarracenia_farnhamii,
  sarracenia_purpurea: sarracenia_purpurea,
  aco: aco,
  environ_engine: environ_engine,
  hackmaster: hackmaster,
  least_square_segression: least_square_segression,
  particle_system: particle_system,
  planet_sim: planet_sim,
  rert: rert,
  saving_your_bacon: saving_your_bacon,
  walk_around3D: walk_around3D,
  sunlight_spectrum: sunlight_spectrum,
  chlorophyll_spectrum: chlorophyll_spectrum,
  rbg_led_spectrum: rbg_led_spectrum,
  led_spectral_graphs: led_spectral_graphs,
  uv_index: uv_index,
  full_spectrum_with_UV: full_spectrum_with_UV,
  dbh_1A: dbh_1A,
  rc_car_it_2: rc_car_it_2,
  photovoltaic_cell: photovoltaic_cell,
  rc_car_it_3_1: rc_car_it_3_1,
  rc_car_it_3_2: rc_car_it_3_2,
  grav_2d: grav_2d,
  bloch_sphere: bloch_sphere,
  led_wiring: led_wiring,
  industrial_light: industrial_light,
};

function map_images(name) {
  return IMAGE_MAP[name] || null;
}

// end helper functions -------------------------------------------------------------------------------------------------------------


// collapsible iteration component -----------------------------------------------------------------------------------------------
const CollapsibleIteration = ({ iteration, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  var component_elements = [];
  var blurb_elements = []; 

  for (let component = 0; component < iteration["components"].length; component++) {
    component_elements.push(render_component(iteration["components"], component));
  }

  for (let blurb = 0; blurb < iteration["blurbs"].length; blurb++) {
    blurb_elements.push(render_blurb(iteration["blurbs"], blurb));
  }

  var render_components = null; 
  if (iteration["components"].length >= 1) {
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
    <div className="iteration_div collapsible_iteration">
      <div
        className="iteration_header_div collapsible_header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="collapsible_title">{iteration["title"]}</h3>
        <span className="collapsible_toggle">{isOpen ? '−' : '+'}</span>
      </div>
          <p className="iteration_introduction">{parse(iteration["introduction"])}</p>
      {isOpen && (
        <div className="iteration_content">
          {render_components}
      <div className="blurbs_div">
        {blurb_elements}
      </div>
    </div>
      )}
      </div>
    );
};
// end collapsible iteration component -----------------------------------------------------------------------------------------------


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
// create pages ---------------------------------------------------------------------------------------------------------------------

const render_element_collapsible = (dict, index) => {
  var iteration_elements = [];

  for (let iteration = 0; iteration < dict[index]["iterations"].length; iteration++) {
    if (dict[index]["iterations"][iteration]["publish"] === true) {
      iteration_elements.push(
        <CollapsibleIteration key={iteration} iteration={dict[index]["iterations"][iteration]} index={iteration} />
      );
    }
  }

  return (
    <div className="project_div">
      <h2>{dict[index]['name']}</h2>
      <p>{parse(dict[index]["introduction"])}</p>

      {iteration_elements}
    </div>
  );
};

export const create_electronics_page = () => {
  var electronic_elements = [];

  for (let electronics = 0; electronics < Data['electronics'].length; electronics++) {
    if (Data['electronics'][electronics]["publish"] === true) {
      electronic_elements.push(render_element_collapsible(Data["electronics"], electronics));
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
      plant_elements.push(render_element_collapsible(Data["plants"], plants));
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

