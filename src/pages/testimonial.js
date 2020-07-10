import React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

class Testimonial extends React.Component {
  render() {
    var settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Layout>
        <h5 className="lead name-text">Testimonials</h5>
        <br />
        <br />
        <p>SOME WORDS FROM MY HAPPY CLIENTS :)</p>
        <hr />
        <br />
        <Slider {...settings}>
          <div>
            <large>
              <FontAwesomeIcon icon={faQuoteLeft} className="m-4 display-4" />
            </large>
            <blockquote className="text-center align-middle">
              <p className="text-secondary ">
                Vedansh helped me a great deal, and is a wonderful teacher.
              </p>
              <footer className="text-muted">
                <i>-Matthew Fecteau</i>
              </footer>

              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
            </blockquote>
          </div>
          <div>
            <large>
              <FontAwesomeIcon icon={faQuoteLeft} className="m-4 display-4" />
            </large>
            <blockquote className="text-center align-middle">
              <p className="text-secondary ">
                I have completed an online course with Vedansh, he helped me a
                lot to build up my skills and gave me the confidence to apply
                for jobs and I successfully got hired in a company for my
                skills. GREAT INSTRUCTOR
              </p>
              <footer className="text-muted">
                <i>-Nikhil Sharma</i>
              </footer>

              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
            </blockquote>
          </div>
          <div>
            <large>
              <FontAwesomeIcon icon={faQuoteLeft} className="m-4 display-4" />
            </large>
            <blockquote className="text-center align-middle">
              <p className="text-secondary ">
                I have just started from a very basic understanding and Vedansh
                quickly adapts the level to meet yours, Thank you
              </p>
              <footer className="text-muted">
                <i>-ABHISHEK KUMAR PANDEY</i>
              </footer>

              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
              <FontAwesomeIcon icon={faStar} className="text-primary" />
            </blockquote>
          </div>
        </Slider>
      </Layout>
    );
  }
}

export default Testimonial;
