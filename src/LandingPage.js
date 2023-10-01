import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ParallaxComponent from './ParallaxComponent';
import CityPictures from './CityPictures';
import City1 from './City1';
import International from './International';
import Resort from './Resort';

const LandingPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/city/*" element={<CityPages />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="app">
      <ParallaxComponent />
      <Link to="/planner">
        <button className="start-button">Start Planning</button>
      </Link>
    </div>
  );
};

const PlannerPage = () => {
  return (
    <div className="app2">
      <h1>Desi Picks</h1>
      <CityPictures />
      <h1>International Picks</h1>
      <International />
      <h1>Resort Picks</h1>
      <Resort />
    </div>
  );
};

const CityPages = () => {
  return (
    <Routes>
      <Route path="/" element={<CityPictures />} />
      <Route path="/City1" element={<City1 />} />
    </Routes>
  );
};

export default LandingPage;
