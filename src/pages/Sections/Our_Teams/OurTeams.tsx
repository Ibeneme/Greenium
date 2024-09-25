import React, { useEffect, useRef } from "react";
import "./OurTeam.css"; // Import the CSS file for styling

// Import images using ES6 syntax
import sampleImage from "../../../assets/images/Hero.jpg";

// Updated team members with new roles and sample names
const teamMembers = [
  {
    name: "John Doe",
    title: "Managing Director",
    bio: "John Doe has over 15 years of experience leading organizations and driving corporate strategy in the engineering and construction industry.",
    linkedin: "https://www.linkedin.com/in/johndoe",
    image: sampleImage,
  },
  {
    name: "Jane Smith",
    title: "Director of Administration",
    bio: "Jane Smith is responsible for overseeing the company's administrative operations, ensuring smooth day-to-day business processes.",
    linkedin: "https://www.linkedin.com/in/janesmith",
    image: sampleImage,
  },
  {
    name: "Emily Johnson",
    title: "Company Secretary",
    bio: "Emily Johnson brings extensive legal and corporate governance experience to the team, ensuring compliance and effective corporate communication.",
    linkedin: "https://www.linkedin.com/in/emilyjohnson",
    image: sampleImage,
  },
  {
    name: "Michael Brown",
    title: "Company Accountant",
    bio: "Michael Brown oversees the financial management of the company, ensuring sound fiscal practices and financial reporting.",
    linkedin: "https://www.linkedin.com/in/michaelbrown",
    image: sampleImage,
  },
  {
    name: "David Williams",
    title: "Project Engineer",
    bio: "David Williams has a solid engineering background and leads the execution of major projects with a focus on quality and efficiency.",
    linkedin: "https://www.linkedin.com/in/davidwilliams",
    image: sampleImage,
  },
  {
    name: "Sarah Taylor",
    title: "Project Manager",
    bio: "Sarah Taylor is an experienced project manager responsible for ensuring the timely delivery of projects, from planning to execution.",
    linkedin: "https://www.linkedin.com/in/sarahtaylor",
    image: sampleImage,
  },
  {
    name: "James Anderson",
    title: "H.S.E. Manager",
    bio: "James Anderson specializes in health, safety, and environmental management, ensuring compliance with industry standards.",
    linkedin: "https://www.linkedin.com/in/jamesanderson",
    image: sampleImage,
  },
  {
    name: "Olivia Martin",
    title: "QA/QC Manager",
    bio: "Olivia Martin leads the quality assurance and quality control team, ensuring that all projects meet the highest standards of quality.",
    linkedin: "https://www.linkedin.com/in/oliviamartin",
    image: sampleImage,
  },
];

const OurTeam: React.FC = () => {
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-content");
          } else {
            entry.target.classList.remove("show-content");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the item is in view
    );

    overlayRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      overlayRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="our-team">
      <h2 className="section-header-teams">Our Team</h2>
      <p className="section-paragraph-teams">Profiles of Key Team Members</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div
            className="team-member"
            key={index}
            ref={(el) => (overlayRefs.current[index] = el)}
          >
            <div className="team-member-image">
              <img src={member.image} alt={member.name} />
              <div className="team-member-bio">
                <p>{member.bio}</p>
              </div>
            </div>
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#000",
                  color: "#C4D92E",
                  padding: "4px 12px",
                }}
              >
                View LinkedIn
              </a>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
