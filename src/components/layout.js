import React from "react";
import logo from "../Assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className="row">
      <div className="col-md-4  bg-light">
        <div className="text-center">
          <img
            src={logo}
            alt="logo"
            className="logo-img rounded-circle responsive"
          />
        </div>
        <br />
        <div className="text-center">
          <h4 className="lead name-text">VEDANSH MEHRA</h4>
          <a href="mailto:vedanshofficial@gmail.com" className="email">
            <p className="head-text">vedanshofficial@gmail.com</p>
          </a>
          <br />
          <hr />
        </div>

        <div className="text-justify about-us m-2">
          <h5 className="name-text">About Me</h5>
          <p>
            Hi, I'm Vedansh 🙂 I like building things. I have been working as
            freelance instructor since last 2years and provided support to more
            than <b>100 students</b> across the globe. At the same time I have
            also worked as a front-end developer and helped clients by providing
            value to their businesses.
          </p>

          <NavLink to="/about">
            <button className="btn btn-outline-primary">Learn more</button>
          </NavLink>
        </div>
        <hr />
        <div className="text-center p-5">
          <a href="https://github.com/imvedanshmehra">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://twitter.com/imvedanshmehra">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/vedanshmehra/">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="mailto:vedanshofficial@gmailcom">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
          <a href="https://www.instagram.com/imvedanshmehra/">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <p>
            Made with <span className="heart">&#10084;</span> by:{" "}
            <NavLink to="/">Vedansh Mehra</NavLink>
          </p>
        </div>
      </div>
      <div className="col-md-8 bg-light container ">
        <div className="jumbotron shadow-sm bg-white mt-md-5 mr-md-5 ">
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default Layout;
