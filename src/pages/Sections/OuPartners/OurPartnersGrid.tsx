import React from "react";
import "./OurPartnersGrid.css"; // Import the CSS file for styling

// Import images using ES6 syntax
import akwa_ibom from "../../../assets/new/ibomgov.png";
// import sterling_global from "../../../assets/images/sterling_global.jpeg";
import NOSL from "../../../assets/new/NOSL.png";
import NDDC from "../../../assets/images/NDDC.jpeg";
import seepco from "../../../assets/new/seepco.png";
import alacrity from "../../../assets/new/alacrity.png";
import eastern from "../../../assets/new/eastern_obolo.png";
import ikotabasi from "../../../assets/new/ikotabasi.png";
import ipr from "../../../assets/new/ipr.png";
import ibomdev from "../../../assets/new/Ibomdev.png";
import NNL from "../../../assets/new/NNL.png";
// Updated team members with new roles and sample names
// SamplePartners.ts
export const teamMembers = [
  {
    title: "Akwa Ibom State Government",
    serviceRendered:
      "Executed a contract for electrical design, installation, and maintenance services, including high/low voltage transmission systems and commissioning of substations.",
    imageUrl: akwa_ibom,
  },
  {
    title: "Eastern Obolo Local Government Area",
    serviceRendered:
      "Procured civil construction services, including the design and construction of residential estates and drainage works, emphasizing sustainable development.",
    imageUrl: eastern,
  },
  {
    title: "Ikot Abasi Local Government Area",
    serviceRendered:
      "Commissioned comprehensive civil engineering projects, involving foundation works and road construction to enhance local infrastructure.",
    imageUrl: ikotabasi,
  },
  {
    title: "Sterling Global Oil Exploration and Production Co. Ltd",
    serviceRendered:
      "Executed a contract for comprehensive electrical maintenance services for gas turbines and load centers, optimizing operational efficiency.",
    imageUrl: seepco,
  },
  {
    title: "Natural Oilfield Services Limited (NOSL)",
    serviceRendered:
      "Procured anti-corrosion services, including pipeline integrity checks and marine vessel coatings, ensuring environmental compliance.",
    imageUrl: NOSL,
  },
  {
    title: "Nemissis Nigeria Limited (NNL)",
    serviceRendered:
      "Executed mechanical installation and maintenance contracts for generators, ensuring reliable operations in harsh environments.",
    imageUrl: NNL,
  },
  {
    title: "Niger Delta Development Commission (NDDC)",
    serviceRendered:
      "Commissioned engineering studies and consulting services for flood control and oil spill remediation projects.",
    imageUrl: NDDC,
  },
  {
    title: "Industrial Platform Remo",
    serviceRendered:
      "Procured manpower supply and management services, ensuring compliance with safety and health standards in project execution.",
    imageUrl: ipr,
  },
  // {
  //   title: "Silver Tiara Logistics Limited (STLL)",
  //   serviceRendered:
  //     "Executed a contract for plant and equipment hire services, including scaffolding materials and inspection instruments, to enhance project efficiency.",
  //   imageUrl: akwa_ibom,
  // },
  {
    title: "Ibom Developer FZE",
    serviceRendered:
      "Commissioned construction and maintenance contracts for roads and buildings, focusing on quality and timely delivery of projects.",
    imageUrl: ibomdev,
  },
  {
    title: "Alacrity Production",
    serviceRendered:
      "Executed fireproofing contracts for offshore platforms and facilities, enhancing safety measures in operations.",
    imageUrl: alacrity,
  },
];

const OurPartnersGrid: React.FC = () => {
  // const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("show-content");
  //         } else {
  //           entry.target.classList.remove("show-content");
  //         }
  //       });
  //     },
  //     { threshold: 0.5 } // Trigger when 50% of the item is in view
  //   );

  //   overlayRefs.current.forEach((ref) => {
  //     if (ref) observer.observe(ref);
  //   });

  //   return () => {
  //     overlayRefs.current.forEach((ref) => {
  //       if (ref) observer.unobserve(ref);
  //     });
  //   };
  // }, []);

  return (
    <section className="our-team">
      <h2 className="section-header-teams">Our Partners</h2>
      <p className="section-paragraph-teams">
        Highlights of our professional services rendered
      </p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div
            className="team-member"
            key={index}
            //ref={(el) => (overlayRefs.current[index] = el)}
          >
            <div className="team-member-image">
              <img
                src={member.imageUrl}
                alt={member.title}
                style={{ height: 400 }}
              />
              <div className="team-member-bio">
                <p>{member.title}</p>
              </div>
            </div>
            <div className="team-member-info">
              <h3>{member.title}</h3>
              <p>{member.serviceRendered}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartnersGrid;
