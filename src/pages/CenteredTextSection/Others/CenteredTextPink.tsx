import React from "react";
import "../CenteredTextSection.css"; // Import your CSS file here

const CenteredTextSectionPink: React.FC = () => {
  return (
    <section
      className="centered-text-section"
      style={{
        backgroundColor: "#6CE474",
        marginBottom: -120,
        paddingBottom: 300,
        paddingTop: 240,
      }}
    >
      <h2
        className="section-header"
        style={{ marginTop: -64, color: "#022B23" }}
      >
        OUR{" "}
        <span
          style={{
            backgroundColor: "#022B23",
            color: "#fff",
            padding: "4px 16px",
            marginTop: 48,
          }}
        >
          {" "}
          MISSION
        </span>
        <br />
      </h2>
      <p className="section-paragraph" style={{ color: "#022B23" }}>
        <strong>GREENIUM RESOURCES LIMITED </strong> <br /> maintains as its
        prime objective “pursuant of client’s satisfaction through best service”
        rendering her services with discipline and integrity, projected towards
        Quality and Excellent service embedded in dynamic and technical
        expertise, affording her employee the opportunity to be creative and
        innovative
        <br /> <br /> <strong>GREENIUM RESOURCES LIMITED </strong> <br /> is in
        Equipment Leasing services ranging from Marine equipment to Land
        equipment.
        <br /> <br /> <strong>GREENIUM RESOURCES LIMITED </strong> <br />
        possesses the technical expertise to meet the Technical, professional
        requirements in the Engineering, Project Management, Construction,
        Operations and Maintenance of Marine and Heavy Duty equipment.
      </p>
    </section>
  );
};

export default CenteredTextSectionPink;
