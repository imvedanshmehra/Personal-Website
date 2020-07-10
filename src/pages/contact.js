import React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <Layout>
      <h5 className="lead name-text">Contact</h5>
      <br />
      <br />
      <hr />
      <br />

      <p>
        Feel free to contact me for job offer or freelance offer at (+91)
        6393315652 or you can email me at:
        <a href="mailto:vedanshofficial@gmail.com">vedanshofficial@gmail.com</a>
        <br />
        <br />
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
      </p>
    </Layout>
  );
};

export default Contact;
