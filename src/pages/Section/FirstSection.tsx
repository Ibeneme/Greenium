import React from "react";
import "aos/dist/aos.css";
import "./FirstSection.css"; // Import your CSS file here

// Import your image
import exampleImage from "../../assets/recom/companu.jpg"; // Update the path to your image

const FirstSection: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-text">
        <h2>WHO ARE WE</h2>

        <p style={{ lineHeight: 1.7 }}>
          <strong>GREENIUM RESOURCES LIMITED </strong>Is a private limited
          company established in Nigeria. It is wholly owned Nigeria Company
          with 100% of its shares, the professionals comprise of men of proven
          abilities and exceptional skill, and serviced with the most up-to-date
          training and experience in the practice of their professions. The key
          staffs are drawn from indigenous experts with both local and
          international exposure.
        </p>
        <p style={{ lineHeight: 1.7 }}>
          Our management team has a wealth of experience in Engineering,
          Construction and maintenance services and has previously managed and
          supervised many onshore and offshore facilities for major Oil
          Companies and Government establishment in Nigeria for years now. Which
          includes provision of personnel, Offshore Platform rehabilitation and
          splash zones, flow station and well-head operations, pressure vessel
          cleaning, inspection and repairs, pressure testing, pipeline laying,
          cleaning and pigging, flow-lines and pipeline leak repairs, well-head
          upgrades, and wire line. We have the required personnel, plant and
          equipment to execute any project.
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default FirstSection;
