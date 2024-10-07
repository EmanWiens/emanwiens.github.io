import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    return (
      <>
        <nav>
      <div className="logo">
       <NavLink to=""><h2>Emanuel Wiens</h2></NavLink>
      </div>
      <div className="nav-items">
        <ul className="overview">
          <li><NavLink className="nav_bar" to="">Home</NavLink></li>
          <li><NavLink className="nav_bar" to="projects">Projects</NavLink></li>
          <li><NavLink className="nav_bar" to="plants">Plants</NavLink></li>
          <li><NavLink className="nav_bar" to="guides">Guides</NavLink></li>
          <li><NavLink className="nav_bar" to="about">About</NavLink></li>
        </ul>
      </div>
    </nav>
      </>
    );
  }
  
  export default NavigationBar;