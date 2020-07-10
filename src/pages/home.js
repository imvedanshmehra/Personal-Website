import React from "react";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <h5 className="lead name-text">About this site</h5>
      <br />
      <br />
      <p>
        A BEAUTIFUL, RESPONSIVE APP WRITTEN WITH MODERN JAVASCRIPT & BOOTSTRAP.
      </p>
      <hr />
      <br />
      <p className="text-justify">
        Welcome to my website. Please feel free to read more about me, or youcan
        check out my projects ands you can go to contact section to contact me
        for working together. can check out my projects, or you can go to the
        contact option to contact me for working together.
      </p>
    </Layout>
  );
};

export default Home;
