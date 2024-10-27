import React from "react";
import "aos/dist/aos.css";
import "./OurServices.css";

// Import your CSS file here
// Import your image

import exampleImage from "../../assets/recom/anticoro.png"; // Update the path to your image

const OurServicesSecond: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-text">
        <h2>ANTI CORROSION SERVICES</h2>
        <p style={{ lineHeight: 1.7 }}>
          - Offshore Platforms/ Wellheads Maintenance painting
          <br />
          - Onshore/Swamp/ Facility structures Maintenance painting
          <br />
          - Splash Zones
          <br />
          - Cathodic Protection
          <br />
          - Pipeline Integrity Checks
          <br />
          - Pipe coating wrapping
          <br />
          - Corrosion Monitoring/NDT Tests
          <br />
          - Helideck Markings
          <br />
          - Marine Vessel Coating
          <br />
          - Industrial Coatings (Factory Floor, Plant Structures, Metal/Concrete
          Silos And Internal Lining/External Coating )
          <br />
          - Upgrading / Refurbishment And Coating Of Caravans/ Offshore
          Accommodation
          <br />
          - Decorative Coatings (Building/Offices)
          <br />
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default OurServicesSecond;
