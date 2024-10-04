import FirstSection from "./Section/FirstSection";
import BlogHero from "./Sections/BlogHero/BlogHero";
import Footer from "./Sections/Footer/Footer";
import OurPartnersGrid from "./Sections/OuPartners/OurPartnersGrid";

const OurPartners = () => {
  return (
    <div>
      <BlogHero title="Our Partners" />
      {/* <AnimatedText /> */}
      <OurPartnersGrid />
      <FirstSection />
      <Footer />
    </div>
  );
};

export default OurPartners;
