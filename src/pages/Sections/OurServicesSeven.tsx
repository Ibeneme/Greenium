import React from "react";
import "aos/dist/aos.css";
import "./OurServices.css";

// Import your CSS file here
// Import your image

import exampleImage from "../../assets/recom/other.jpg"; // Update the path to your image

const OurServicesSeven: React.FC = () => {
  return (
    <section className="why-choose-us-section-a">
      <div className="why-choose-us-text">
        <h2>OTHER SERVICES</h2>
        <p style={{ lineHeight: 1.7 }}>
          - Post Project Services, such as technical training, preventive or
          corrective maintenance, and additional studies. <br /> - Consulting
          Services: project management, well studies, corrosion control and
          prevention, petroleum engineering, quality & safety. <br /> - Oil well
          services and other maintenance services: Paraffin wax
          Control/application services <br /> - EIA studies, safety case
          studies, HAZOP, risk assessment studies. <br /> - Clean-up of Oil
          spills <br /> - Remediation of imparted spill sites <br />{" "}
          -Instrumentation <br /> - Asset Management <br /> - Supply of Safety
          Materials and Equipment <br /> - Supply of Office Stationeries and
          Equipment <br /> - Supply of Industrial, Marine and Decorative
          Coatings <br /> - Supply & Installation of computer, Telecommunication
          Equipment & Services - Welding And Fabrication
          <br />
          - Structural Steel Design Repairs And Maintenance On Pipelines, Plot
          Piping Repairs
          <br />
          - Diesel Engines/Generators Repairs <br />
          - Installation Of Transformers
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

export default OurServicesSeven;
