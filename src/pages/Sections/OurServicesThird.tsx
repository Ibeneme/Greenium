import React from "react";
import "aos/dist/aos.css";
import "./OurServices.css";

// Import your CSS file here
// Import your image

import exampleImage from "../../assets/recom/electric.jpg"; // Update the path to your image

const OurServicesThird: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-text">
        <h2>ELECTRICAL (DESIGN, INSTALLATION AND MAINTENANCE)</h2>
        <p style={{ lineHeight: 1.7 }}>
          - Electrical Construction And Installations
          <br />
          - Commissioning And Maintenance Of Gas Turbines, Substations, Booster
          Pumps And Load Centres
          <br />
          - High / Low Voltage Transmission Systems
          <br />
          - Installation Of Transformers
          <br />
          - Feeder Pillars And Earthing Cables.
          <br />
          - Bus Bar Insulation And Integrity Checks On MCC Panels
          <br />
          - Supply And Insulation Of Alkaline Batteries
          <br />
          - Rural Electrification <br />
          - Power Plant Installation & Maintenance
          <br />
          - Supply Of Electrical Materials, Electronic Apparatus, Appliances &
          Equipment
          <br />
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default OurServicesThird;
