import { NavLink } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const NavigationBar = () => {
    return (
      <nav>
        <ScrollToTop />

        <div className="logo">
          <NavLink to=""><h1>Emanuel Wiens</h1></NavLink>
        </div>

        <div className="nav-items_mobile">
          <ul className="overview_mobile">
            <li><NavLink className="nav_bar" to="">Menu</NavLink></li>
          </ul>

          <div className="nav-items">
            <ul className="overview">
              <li><NavLink className="nav_bar" to="">Home</NavLink></li>
              <li><NavLink className="nav_bar" to="electronics">Electronics</NavLink></li>
              <li><NavLink className="nav_bar" to="programming">Programming</NavLink></li>
              <li><NavLink className="nav_bar" to="plants">Plants</NavLink></li>
              <li><NavLink className="nav_bar" to="guides">Guides</NavLink></li>
              <li><NavLink className="nav_bar" to="about">About</NavLink></li>
            </ul>
          </div>
        </div>

      </nav>
    );
  }
  
  export default NavigationBar;