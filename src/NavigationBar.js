import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from "react-router-dom";

function NavigationBar() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <NavLink to="/">Emanuel Wiens</NavLink>
            <Nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/guides">Guides</NavLink>
              <NavLink to="/about">About</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavigationBar;