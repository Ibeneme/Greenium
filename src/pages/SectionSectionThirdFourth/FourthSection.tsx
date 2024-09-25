import React from "react";
import "aos/dist/aos.css";
import "./FourthSection.css"; // Import your CSS file here

// Import your image
import exampleImage from "../../assets/images/flexx.png"; // Update the path to your image

const FourthSection: React.FC = () => {
  return (
    <section className="why-choose-us-section-a">
      <div className="why-choose-us-text">
        <h2>OUR EMERGENCY RESPONSE</h2>

        <p style={{ lineHeight: 1.7 }}>
          The objective(s) of every emergency response shall be to:
          <br />
          • Consolidate established cordial relationship with Host
          communities/client and others <br /> • Save lives <br />• Assist the
          injured <br />• Reduce damage to client or company’s resources, and
          the environment <br /> • Defend corporate integrity All the systems,
          strategies and procedures necessary to achieve these objectives shall
          be well co-ordinated. 
          
          <br />Reasonable attention shall be given to the
          development and sustenance of relevant resources towards the
          achievement of defined objectives. <br />
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default FourthSection;
