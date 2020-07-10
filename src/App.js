import React, { useState } from "react";
import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Testimonial from "./pages/testimonial";
import NotFoundPage from "./pages/notFoundPage";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div>
        <Navbar
          color="white"
          light
          expand="md"
          className="navbar sticky-top shadow-sm bg-white"
        >
          <NavbarBrand>
            <NavLink to="/">
              <h3 className="head-text">Vedansh Mehra</h3>
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLink exact={true} to="/" className="nav-link mr-2">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link mr-2">
                About Me
              </NavLink>
              <NavLink to="/projects" className="nav-link mr-2">
                Projects
              </NavLink>
              <NavLink to="/testimonial" className="nav-link mr-2">
                Testimonials
              </NavLink>
              <NavLink to="/contact" className="nav-link mr-2">
                Contact
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/testimonial">
            <Testimonial />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
