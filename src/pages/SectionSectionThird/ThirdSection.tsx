import React from "react";
import "aos/dist/aos.css";
import "./ThirdSection.css"; // Import your CSS file here

// Import your image
import exampleImage from "../../assets/images/flex.png"; // Update the path to your image

const ThirdSection: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-text">
        <h2>CORPORATE POLICY STATEMENT</h2>

        <p style={{ lineHeight: 1.7 }}>
          (Reference ISO 9001: 2000 – 4.1 & 5.1 & ISO 14001: 1996 – 4.2)
          <br /> <br />
          <strong> GREENIUM RESOURCES LIMITED </strong>has established a Quality
          and Safety (HSE) Management System, which assures all stakeholders a
          sustained satisfaction in the services provided by the Company. The
          objective of the Quality Management System is to aim to achieve
          'Customer Satisfaction' by consequently meeting the requirements. We
          are engaged in the Design, Procurement, Manufacture / Construction /
          Installation, Commissioning, and Servicing of equipment and components
          at facilities in the oil, gas and allied industries in Nigeria. To
          achieve this, the expectations, needs and requirements of our
          Customers and other interested parties must be identified and
          satisfied - or exceeded where possible.
          <br /> <br />
          <strong> GREENIUM RESOURCES LIMITED </strong>
          believes that the key to success in this regard is our quality
          management system, which is based on International Standard ISO 9001:
          2000 - Quality management system - Requirements and ISO 14001: 1996 –
          Environmental management systems (and the associated standards). The
          quality management system ensures that effective controls are
          consistently and adequately applied to our work processes, and
          provides a record of our quality- related activities. We are committed
          to maintaining, and continually improving our quality and safety (HSE)
          system. All employees and suppliers are invited and expected to share
          in this commitment. We have allocated sufficient resources to ensure
          that quality and safety (HSE) remains at the heart of our business. A
          management representative is appointed, with responsibility and full
          authorisation in order to ensure the compliance with the requirements
          in the standards. This implies that the continual implementation of
          the company’s integrated quality and safety management system has been
          delegated to this quality and safety (HSE) authority. Any suggestions
          that may assist us in our pursuit of quality are welcomed.
        </p>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Example" />
      </div>
    </section>
  );
};

export default ThirdSection;
