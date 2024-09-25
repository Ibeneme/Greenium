import React from "react";
import "./CenteredTextSection.css"; // Import your CSS file here

const CenteredTextSection: React.FC = () => {
  return (
    <section
      className="centered-text-section"
      style={{ backgroundColor: "#6CE474" }}
    >
      <h3 className="section-header" style={{ color: "#022B23" }}>
        A LEADING NIGERIA COMPANY
        <br />
        WITH PROVEN EXPERTISE
      </h3>
      <p className="section-paragraph" style={{ color: "#030928" }}>
        Our corporate goal is to develop an unrivalled experience in meeting
        today’s demanding requirements to be able to provide a highly focused
        personnel service. The emphasis on quality, combined with skill and
        commitment of our staff are all that GREENIUM RESOURCES LIMITED a unique
        service provider to Oil and Gas sector, industries and Government
        establishment.
        <br />
        {/* Our management team has a wealth of experience in Engineering,
        Construction and maintenance services and has previously managed and
        supervised many onshore and offshore facilities for major Oil Companies
        and Government establishment in Nigeria for years now. Which includes
        provision of personnel, Offshore Platform rehabilitation and splash
        zones, flow station and well-head operations, pressure vessel cleaning,
        inspection and repairs, pressure testing, pipeline laying, cleaning and
        pigging, flow-lines and pipeline leak repairs, well-head upgrades, and
        wire line. We have the required personnel, plant and equipment to
        execute any project */}
      </p>
      <br /> <br />
    </section>
  );
};

export default CenteredTextSection;
