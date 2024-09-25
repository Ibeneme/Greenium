import React from "react";
import "aos/dist/aos.css";
import "./OurServices.css";

// Import your CSS file here
// Import your image

import exampleImage from "../../assets/images/row.png"; // Update the path to your image

const OurServicesFive: React.FC = () => {
  return (
    <section className="why-choose-us-section-a">
      <div className="why-choose-us-text">
        <h2>MECHANICAL (CONSTRUCTION, SUPERVISION AND INSPECTION)</h2>
        <p style={{ lineHeight: 1.7 }}>
          - Welding And Fabrication
          <br />
          - Structural Steel Design Repairs And Maintenance On Pipelines, Plot
          Piping Repairs
          <br />
          - Diesel Engines/Generators Repairs <br />
          - Installation Of Transformers
          <br />
          - Compressors – Pneumatics
          <br />
          - Thermal And Cold Insulation
          <br />
          - Maintenance Of Valves, Mechanical Seals
          <br />
          - Offshore Mooring Buoy Maintenance (S.B.M’s)
          <br />
          - Fabrication Of Flashing Support And Hook-Up Arm
          <br />
          - Supply Of Electrical Materials, Electronic Apparatus, Appliances &
          Equipment
          <br />
          - Installation Of Gratings And Rolling Ladders
          <br />
          - Fabrication Of Gang Way, Stair Tower
          <br />
          - Pipeline Installation
          <br />
          - Petroleum / Petrol Stations Development
          <br />
          - Maintenance And Services <br />
          - General Supply Of Mechanical Tools And Materials <br />
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default OurServicesFive;
