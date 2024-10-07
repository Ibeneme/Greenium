import BlogHero from "./Sections/BlogHero/BlogHero";
import Footer from "./Sections/Footer/Footer";
import ProjectDisplay from "./Sections/OurProjects/ProjectDisplay";

const OurProjects = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <BlogHero title="Our Projects Executed" />
      <br /> <br />
      <ProjectDisplay />
      <Footer />
    </div>
  );
};

export default OurProjects;
