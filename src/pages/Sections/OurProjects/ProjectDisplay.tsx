import React from "react";
import "./ProjectDisplay.css";

interface Project {
  company: string;
  service: string;
  description: string;
  backgroundColor: string;
}

const projects: Project[] = [
  {
    company: "Nigerian agip oil company limited",
    service: "Procurement of Various Electrical Materials",
    description:
      "The project involves the procurement of a wide range of electrical materials to support industrial and residential installations. This includes high-quality transformers, switchgears, electrical wiring accessories, power cables, circuit breakers, electrical panels, and energy-efficient lighting solutions. The procurement process focuses on ensuring all items meet the industry standards for safety and durability.",
    backgroundColor: "#fff",
    //backgroundColor: "#FDEDEC"
  },
  {
    company: "PowerTech Solutions",
    service:
      "Electrical Design, Installation and Maintenance\nFor Industrial and Residential Projects",
    description:
      "Our electrical services include comprehensive construction and installation of high/low voltage transmission systems, transformers, and rural electrification projects. We handle commissioning and maintenance of gas turbines, substations, booster pumps, and load centers. Additionally, we specialize in the insulation of alkaline batteries, bus bar insulation, and integrity checks on MCC panels. PowerTech provides top-quality materials, including electrical appliances, electronic apparatus, and equipment, ensuring reliability and longevity in all electrical installations.",
    backgroundColor: "#fff",
    //backgroundColor: "#EBF5FB"
  },
  {
    company: "MegaBuild Inc.",
    service:
      "Mechanical Construction and Supervision\nIncluding Inspection and Quality Control",
    description:
      "MegaBuild offers extensive mechanical construction services, including welding and fabrication of complex structures. We handle repairs and maintenance on pipelines, plot piping, and provide structural steel design for industrial applications. Our expertise covers diesel engines/generators repairs, compressors – pneumatics, and offshore mooring buoy maintenance. We also fabricate flashing supports and hook-up arms, ensuring precision in each step. With a focus on thermal and cold insulation, we supply mechanical tools and materials essential for large-scale projects.",
    backgroundColor: "#fff",
    //backgroundColor: "#E8F8F5"
  },
  {
    company: "EcoSafe Developers",
    service: "Civil Design and Construction\nFor Urban and Rural Development",
    description:
      "EcoSafe Developers is renowned for its civil engineering capabilities, specializing in reinforced concrete wall embankments and residential estate developments. We manage flood and erosion control projects, design methanol tanks, and road pavements, ensuring environmental stability. Our team undertakes foundation and bund wall rehabilitation, jetty constructions, and maintenance of infrastructure. Additionally, we handle roof waterproofing, water treatment plant installations, and borehole drilling for sustainable water supply systems.",
    backgroundColor: "#fff",
    //backgroundColor: "#FEF9E7"
  },
  {
    company: "FireGuard Technologies",
    service:
      "Fire Proofing and Passive Protection\nAgainst Jet and Hydrocarbon Fires",
    description:
      "FireGuard Technologies delivers robust fire-proofing solutions for offshore platforms, facilities, and installations. We specialize in passive fire protection strategies to mitigate the risks associated with jet and hydrocarbon fires. Our services are engineered to enhance the safety of industrial and residential setups by integrating the latest in fire-resistant materials and technologies. Our team's attention to detail ensures that all protective measures adhere to stringent safety standards, reducing potential fire hazards.",
    backgroundColor: "#fff",
    //backgroundColor: "#FDFEFE"
  },
  {
    company: "Machinery World",
    service:
      "Plant and Equipment Hire\nFor Industrial and Construction Projects",
    description:
      "Machinery World provides a diverse range of plant and equipment hire services tailored to meet industrial and construction needs. We offer downhole gauges, blasting and painting equipment, and advanced cathodic protection/pipeline integrity check tools. Our inventory includes scaffolding materials like tubes, couplers, and ladders, as well as specialized drilling equipment like hammer rigs and rotary tripods. With our high-quality machinery, we enable clients to execute their projects with greater efficiency and precision.",
    backgroundColor: "#fff", //backgroundColor: "#EAF2F8"
  },
];

const ProjectDisplay: React.FC = () => {
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card"
          style={{ backgroundColor: project.backgroundColor }}
        >
          <h4>{project.company}</h4>
          <h3>{project.service}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectDisplay;
