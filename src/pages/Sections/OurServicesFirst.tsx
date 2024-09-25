import React from "react";
import "aos/dist/aos.css";
import "./OurServices.css";

// Import your CSS file here
// Import your image

import exampleImage from "../../assets/images/row.png"; // Update the path to your image

const OurServicesFirst: React.FC = () => {
  return (
    <section className="why-choose-us-section-a">
      <div className="why-choose-us-text">
        <h2>MANPOWER SUPPLY, MANAGEMENT AND DEVELOPMENT</h2>
        <p style={{ lineHeight: 1.7 }}>
          <strong>GREENIUM RESOURCES LIMITED </strong>Is a private limited two
          factors are the key variables in the success of our projects vis-â-vis
          Manpower and Machineries. We develop Technical Manpower as the tool
          behind the safe and quality delivery of specific projects with the
          utilization of industrial Equipment. Our personnel with vast object
          experience in their area of specialization are trained to produce
          efficient services even in prevailing harsh environmental conditions.
          Cognizance of hazards, our qualified skilled personnel apply at every
          step in every project Safety and Health measures preempting risk and
          consequent accidents in any job site / industrial environment.
        </p>
        <br />
        <p style={{ lineHeight: 1.7 }}>
          <strong>GREENIUM RESOURCES LIMITED </strong>Is a private limited two
          with its wealth of experience manages projects compliant with company
          standards to successfully deliver projects beating specified time
          provision. We do not only supply Manpower, Manage an efficient
          workforce for your project, but also develop our client to improve on
          best project standards for optimum produce.{" "}
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default OurServicesFirst;
