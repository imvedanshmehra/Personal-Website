import React, { Component } from "react";
import Layout from "../components/layout";

class About extends Component {
  constructor() {
    super();
    this.state = {
      year: new Date().getFullYear() - new Date(2000, 5, 25).getFullYear(),
      month: new Date().getMonth() + 1 - new Date(2000, 5, 25).getMonth(),
      date: new Date().getDate(),
      hours: new Date().getHours(),
      minute: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
      milliseconds: new Date().getMilliseconds(),
    };
  }
  updateTimer() {
    this.setState({
      year: new Date().getFullYear() - new Date(2000, 5, 25).getFullYear(),
      month: new Date().getMonth() + 1 - new Date(2000, 5, 25).getMonth(),
      date: new Date().getDate(),
      hours: new Date().getHours(),
      minute: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
      milliseconds: new Date().getMilliseconds(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTimer(), 1);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
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
              <td>
                {this.state.year} years {this.state.month} Months{" "}
                {this.state.date} Days {this.state.hours} Hours{" "}
                {this.state.minute} Minutes {this.state.seconds} Seconds{" "}
                {this.state.milliseconds} Milliseconds
              </td>
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
              <td>React, JavaScript, Redux, HTML5, CSS3, BootStrap</td>
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
  }
}

export default About;
