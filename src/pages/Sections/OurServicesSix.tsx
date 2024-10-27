import React from "react";
import "aos/dist/aos.css";
import "./OurServices.css";

// Import your CSS file here
// Import your image

import exampleImage from "../../assets/recom/constr.jpg"; // Update the path to your image

const OurServicesSix: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-text">
        <h2>CIVIL (DESIGN, CONSTRUCTION, SUPERVISION AND INSPECTION)</h2>
        <p style={{ lineHeight: 1.7 }}>
          - Design And Construction Of Re-Enforced Concrete Wall Embankment
          <br /> - Methanol Tank And Road Pavement <br /> - Foundation And Bund
          Walls <br /> - Residential Estates <br /> - Drainage Works <br /> -
          Flood And Erosion Control
          <br /> - Tank Pad And Bund Wall Rehabilitation <br /> - Jetty
          Constructions And Maintenance <br /> - Road And Building Constructions
          And Maintenance <br /> -0 Renovation And Concrete Works <br /> -1 Roof
          Water Proofing <br /> -2 Water Treatment Plant-Installation &
          Maintenance <br /> -3 Borehole Drilling <br /> -4 General Supply Of
          Building Materials 5.15 Heating ventilation and cooling systems (HVAC)
          <br />
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default OurServicesSix;
