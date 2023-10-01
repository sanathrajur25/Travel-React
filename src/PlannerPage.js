import React from 'react';
import CityPictures from './CityPictures';
import International from './International';
import City1 from './City1';
import Resort from './Resort';
const PlannerPage = () => {

  return (
   
    <div className="app2">
       

      <h1>Desi Picks</h1>
      <CityPictures />
      <h1>Top International Picks</h1>
      <International/>
      <h1>Adventure Resorts</h1>
      <Resort/>
    </div>
);
};

export default PlannerPage;
