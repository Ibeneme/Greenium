import React from "react";
import "../CenteredTextSection.css"; // Import your CSS file here

const CenteredTextSectionContact: React.FC = () => {
  return (
    <section
      className="centered-text-section"
      style={{
        backgroundColor: "#000",
        marginBottom: -120,
        paddingBottom: 300,
        paddingTop: 120,
      }}
    >
      <h3 className="section-header" style={{ color: "#FFF" }}>
        OUR {" "}
        <span
          style={{
            backgroundColor: "#6CE474",
            color: "#022B23",
            padding: "4px 16px",
            marginTop: 48,
          }}
        >
          {" "}
          VISION
        </span>
      </h3>
      <p className="section-paragraph" style={{ color: "#6CE474" }}>
        <strong>GREENIUM RESOURCES LIMITED </strong>
        is a consortium of technically skilled professionals with innovative
        environment friendly technology for delivery of Projects in our areas of
        specialization with distinction in application of specification with
        quality advice for our Client’s satisfaction.
      </p>
    </section>
  );
};

export default CenteredTextSectionContact;
