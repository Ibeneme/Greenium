import React from "react";
import "aos/dist/aos.css";
import "./SecondSection.css"; // Import your CSS file here

// Import your image
import exampleImage from "../../assets/recom/hetmet.jpg"; // Update the path to your image

const SecondSection: React.FC = () => {
  return (
    <section className="why-choose-us-section-a">
      <div className="why-choose-us-text">
        <h2>AT GREENIUM RESOURCES LIMITED</h2>

        <p style={{ lineHeight: 1.7 }}>
          We listen to every client to ensure that we are consistently offering
          solutions, which add value to their business, focus on business
          expansion through innovative engineering and technology, operating
          with integrity and the highest standards of safety and environment
          management. In the field of material procurement and supply, GREENIUM
          RESOURCES LIMITED has acquired wide range of experience working for
          clients of primary importance. We work in close association with our
          client to achieve optimum profitability in our services.
        </p>

      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default SecondSection;
