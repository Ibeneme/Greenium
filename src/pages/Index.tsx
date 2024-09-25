import CenteredTextSection from "./CenteredTextSection/CenteredTextSection";
import CenteredTextSectionPink from "./CenteredTextSection/Others/CenteredTextPink";
import CenteredTextSectionContact from "./CenteredTextSection/Others/CenteredTextSectionContact";
import HeroSection from "./Hero/HeroSection";
import FirstSection from "./Section/FirstSection";
import SecondSection from "./SectionSection/SecondSection";
import ThirdSection from "./SectionSectionThird/ThirdSection";
import FourthSection from "./SectionSectionThirdFourth/FourthSection";
import AnimatedText from "./Sections/AnimatedText/AnimatedText";
import Footer from "./Sections/Footer/Footer";
import OurTeam from "./Sections/Our_Teams/OurTeams";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <CenteredTextSectionContact />
      <CenteredTextSectionPink />
      <ThirdSection />
      <FourthSection />
      <AnimatedText />
      <OurTeam />
      <FirstSection />
      <CenteredTextSection />
      <Footer />
    </div>
  );
};

export default Index;
