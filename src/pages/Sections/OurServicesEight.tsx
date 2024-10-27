import React from "react";
import "aos/dist/aos.css";
import "./OurServices.css";

// Import your CSS file here
// Import your image

import exampleImage from "../../assets/recom/hire.jpg"; // Update the path to your image

const OurServicesEight: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-text">
        <h2>PLANT AND EQUIPMENT HIRE</h2>
        <p style={{ lineHeight: 1.7 }}>
          - Downhole Gauges
          <br />
          - Blasting and Painting Equipment/Inspection Instrument, Air
          Compressors.
          <br />
          - Cathodic Protection/Pipeline Integrity Check Equipment. <br />
          - Scaffolding Material – Scaffolding Tubes (Galvanized), Couplers,
          Sleeve Couplers, Swivels, Putlog Clips, Beam Clamps, Base Plates, Pipe
          Pin, Ladder Beam.
          <br />- Hammer Rig, Rotary (downhole hammer), Tripods, Drilling stems,
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default OurServicesEight;
