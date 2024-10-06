import { NavLink, Link } from "react-router-dom";

function NavigationBar() {
    return (
      <>
        <div className="nav_bar_container">
          <div className="nav_bar">
            <Link className="nav_bar_name" to="/" >Emanuel Wiens</Link>

            <NavLink className="nav_bar" to="/about">About</NavLink>
            <NavLink className="nav_bar" to="/guides">Guides</NavLink>
            <NavLink className="nav_bar" to="/projects">Projects</NavLink>
            <NavLink className="nav_bar" to="/plants">Plants</NavLink>
            <NavLink style={{"border-left": "1px solid white"}} className="nav_bar" to="/">Home</NavLink>
          </div>
        </div>
      </>
    );
  }
  
  export default NavigationBar;