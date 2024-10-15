import React from "react";
import "./ProjectDisplay.css";
import coaster from "../../../assets/projects/newcoaster.jpg";
import grass_cutter from "../../../assets/projects/grass_cutter.jpeg";
import sandbags from "../../../assets/projects/sandbags.jpeg";
import electrical from "../../../assets/projects/electrical.jpeg";
import hardwood from "../../../assets/projects/hardwood.jpeg";
import lan from "../../../assets/projects/lan.jpg";

interface Project {
  company: string;
  service: string;
  description: string;
  backgroundColor: string;
  image?: string;
}

const projects: Project[] = [
  {
    company: "Nigerian Agip Oil Company Limited",
    service: "Procurement of Various Electrical Materials",
    description:
      "The project involves the procurement of a wide range of electrical materials to support industrial and residential installations. This includes high-quality transformers, switchgears, electrical wiring accessories, power cables, circuit breakers, electrical panels, and energy-efficient lighting solutions. The procurement process focuses on ensuring all items meet the industry standards for safety and durability.",
    backgroundColor: "#fff",
    image: electrical,
  },
  {
    company: "SILVER TIARA LOGISTICS LIMITED",
    service: "Vehicle Deployment and Maintenance for Operational Services",
    description:
      "This project offer from GREENIUM RESOURCES LIMITED to SILVER TIARA LOGISTICS LIMITED details the provision of comprehensive fleet management services, including the deployment of various vehicle types, primarily Hilux, Sienna, Hiace buses, and Coaster buses, for diverse operational needs. The primary objective is to facilitate AGO distribution, base operations, security, interstate movements, drilling, surveillance, food distribution, airport movements, warehouse logistics, and workers’ transportation.",
    backgroundColor: "#fff",
    image: coaster,
  },
  {
    company: "NOSL",
    service:
      "Provision of Internal and external grass cutting services in and around former rig 4 site (Ekim west) on callout Basis",
    description:
      "The project involves the provision of comprehensive grass cutting and vegetation management services for both internal and external areas surrounding the former Rig 4 site (Ekim West). These services will be delivered on a callout basis, ensuring prompt response and maintenance whenever required. The primary objective is to maintain a clean, safe, and visually appealing environment by controlling the growth of grass and other vegetation, adhering to industry standards for safety and site aesthetics.",
    backgroundColor: "#fff",
    image: grass_cutter,
  },
  {
    company: "NEMISSIS NIG LTD",
    service:
      "Renovation of 5 Caravans and Erection of Security Sandbag Posts for Navy at OGPF Area",
    description:
      "This project involves the renovation of five caravans to enhance their structural integrity, functionality, and comfort for personnel stationed at the OGPF area. Additionally, the project includes the erection of strategically positioned security sandbag posts to bolster defensive capabilities for the Navy. The goal is to improve the living and working conditions for naval forces while providing reinforced security measures, ensuring a safer and more secure operational environment.",
    backgroundColor: "#fff",
    image: sandbags,
  },
  {
    company: "Nigerian Agip Oil Company Limited",
    service: "Procurement of High-Quality Hardwood Materials",
    description:
      "This project involves the procurement of durable hardwood materials essential for various construction and industrial applications. The range of hardwood includes treated timber, plywood, and other wood products that meet the industry's highest standards for strength, durability, and resistance to environmental factors. The procurement process ensures that all materials are sourced sustainably, adhering to environmental regulations and quality control measures to provide long-lasting solutions for both structural and decorative uses.",
    backgroundColor: "#fff",
    image: hardwood,
  },
  {
    company: "Bqube",
    service: "Supply and Installation of LAN Structural Cabling",
    description:
      "The project involves the supply and installation of Local Area Network (LAN) structural cabling at the OGPF office operations and maintenance admin block in Iko Town, Akwa Ibom State. This includes the provision of high-quality cables, connectors, and network hardware to establish a robust communication infrastructure. The focus is on ensuring efficient data transmission, network stability, and seamless connectivity across the office premises. The installation process adheres to industry standards and best practices to guarantee long-term reliability and performance.",
    backgroundColor: "#fff",
    image: lan,
  },
];

const ProjectDisplay: React.FC = () => {
  return (
    <div className="project-container" style={{ marginTop: 120 }}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-card ${index % 2 === 0 ? "even" : "odd"}`}
          style={{ backgroundColor: project.backgroundColor }}
        >
          {index % 2 === 0 ? (
            <>
              <div className="project-info">
                <h4>{project.company}</h4>
                <h3>{project.service}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-image">
                <img src={project.image} alt={`${project.company} project`} />
              </div>
            </>
          ) : (
            <>
              <div className="project-image">
                <img src={project.image} alt={`${project.company} project`} />
              </div>
              <div className="project-info">
                <h4>{project.company}</h4>
                <h3>{project.service}</h3>
                <p>{project.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectDisplay;