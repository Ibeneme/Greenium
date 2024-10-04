import CenteredTextSection from "./CenteredTextSection/CenteredTextSection";
import CenteredTextSectionPink from "./CenteredTextSection/Others/CenteredTextPink";
import CenteredTextSectionContact from "./CenteredTextSection/Others/CenteredTextSectionContact";
import FirstSection from "./Section/FirstSection";
import SecondSection from "./SectionSection/SecondSection";
import ThirdSection from "./SectionSectionThird/ThirdSection";
import FourthSection from "./SectionSectionThirdFourth/FourthSection";
import BlogHero from "./Sections/BlogHero/BlogHero";
import Footer from "./Sections/Footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <BlogHero title="About Us" />
      <FirstSection />
      <SecondSection />
      <CenteredTextSectionContact />
      <CenteredTextSectionPink />
      <ThirdSection />
      <FourthSection />
      <CenteredTextSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
