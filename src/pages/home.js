import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../components/layout';

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
        Welcome to my website. Please feel free to read more{' '}
        <NavLink to="/about">about me</NavLink> or you can check out my{' '}
        <NavLink to="/projects">projects</NavLink> or visit the{' '}
        <NavLink to="/contact">contact</NavLink> section to contact me for
        working together.
      </p>
    </Layout>
  );
};

export default Home;
