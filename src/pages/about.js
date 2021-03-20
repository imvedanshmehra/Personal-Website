import React from "react";
import Layout from "../components/layout";
import moment from "moment";

const About = () => {
  return (
    <Layout>
      <h5 className="lead name-text">About Me</h5>
      <br />
      <br />
      <hr />
      <br />
      <h6 className=" name-text">Some information about me</h6>
      <br />
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>Age</td>
            <td>{moment().diff("2000-05-25", "years")} Years</td>
          </tr>
          <tr>
            <td>Current Location</td>
            <td>Lucknow, IN</td>
          </tr>
          <tr>
            <td>Educational Background</td>
            <td>BCA(Pursuing), Indira Gandhi National Open Univesity</td>
          </tr>
          <tr>
            <td>My Skills</td>
            <td>React, JavaScript, Redux, HTML5, CSS3, BootStrap, GraphQL</td>
          </tr>
          <tr>
            <td>Soft Skills</td>
            <td>
              Good Communication skills, Hard + Smart Work, Open to learn new
              things to do the job
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default About;
