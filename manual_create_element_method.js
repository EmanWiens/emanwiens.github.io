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
        if (dict[index]["iterations"][iteration]["components"].length >= 1) {
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