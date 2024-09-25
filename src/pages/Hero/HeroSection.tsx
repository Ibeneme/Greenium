import React from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  // Function to handle the button click and trigger the email action
  const handleEmailClick = () => {
    window.location.href = "mailto:info@greeniumresources.com";
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-content-h1">GREENIUM RESOURCES LIMITED</h1>
        <p className="hero-content-p">
          Our skilled team delivers innovative solutions to major Oil Companies
          and Government projects. We focus on safety, integrity, and
          environmental excellence in every project we undertake.
        </p>
        <button onClick={handleEmailClick} className="cta-button">
          Send Us a Message
        </button>
      </div>
    </section>
  );
};

export default HeroSection;