import React from "react";
import weather from "../Assets/weather.jpg";
import form from "../Assets/form.jpg";
import toodlsit from "../Assets/todolist.png";
import Layout from "../components/layout";

const Projects = () => {
  return (
    <Layout>
      <h5 className="lead name-text">Projects</h5>
      <br />
      <br />
      <p>A SELECTION OF PRODUCTS THAT I AM NOT ASHAMED OF</p>
      <hr />
      <br />
      <div className="border ">
        <div className="card ">
          <div className="row no-gutters">
            <div className="col-sm-5 projct-background">
              <img
                src={weather}
                className="card-img-top responsive"
                alt="weather-app"
              />
            </div>
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title">5-Days Weather Forecast</h5>
                <p className="card-text">
                  A simple application to display 5-day weather forecast using
                  the OpenWeatherMap API.
                </p>
                <a
                  href="https://github.com/imvedanshmehra/Weather-app"
                  className="btn btn-primary stretched-link"
                >
                  View on Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="border ">
        <div className="card ">
          <div className="row no-gutters">
            <div className="col-sm-5 projct-background">
              <img
                src={form}
                className="card-img-top  responsive"
                alt="weather-app"
              />
            </div>
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title">Reusable Property Form</h5>
                <p className="card-text">
                  A simple yet powerfull reusable form buit on top of react that
                  you can use for your business.
                </p>
                <a
                  href="https://github.com/imvedanshmehra/PropertyForm"
                  className="btn btn-primary stretched-link"
                >
                  View on Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="border ">
        <div className="card ">
          <div className="row no-gutters">
            <div className="col-sm-5 projct-background">
              <img
                src={toodlsit}
                className="card-img-top responsive"
                alt="weather-app"
              />
            </div>
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title">Fully-Functionable Todo-List App</h5>
                <p className="card-text">
                  A modern todo-list app built with React-Typescript which saves
                  all our todos so we can even see them after page refresh
                </p>
                <a
                  href="https://github.com/imvedanshmehra/React-Typescript-Todo-app"
                  className="btn btn-primary stretched-link"
                >
                  View on Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
