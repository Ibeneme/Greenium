import React from "react";
import "aos/dist/aos.css";
import "./OurServices.css";

// Import your CSS file here
// Import your image

import exampleImage from "../../assets/recom/fire.jpg"; // Update the path to your image

const OurServicesFourth: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-text">
        <h2>FIRE PROOFING</h2>
        <p style={{ lineHeight: 1.7 }}>
          - Jet and Hydrocarbon fire protection <br />
          - Offshore Platform passive fire protection and Fire proofing of
          facilities and installations.
          <br />
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default OurServicesFourth;
