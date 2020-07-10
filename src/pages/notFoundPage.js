import React from "react";
import emoji from "../Assets/emoji.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container-fluid text-center error-body">
      <div className="row">
        <div className="col-md-6 ">
          <img alt="emoji" src={emoji} width="300" className="mt-2 img-fluid" />
        </div>
        <div className="col-md-6">
          <h1 className="not-found">404</h1>
          <h3>Page you are looking for is not found!</h3>
          <div className="text-center mt-4 mb-5">
            <NavLink to="/">
              <button className="btn send px-3">
                <FontAwesomeIcon icon={faLongArrowAltLeft} className="mr-1" />
                Home Page
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
