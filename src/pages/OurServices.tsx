import BlogHero from "./Sections/BlogHero/BlogHero";
import OurServicesEight from "./Sections/OurServicesEight";
import OurServicesFirst from "./Sections/OurServicesFirst";
import OurServicesFive from "./Sections/OurServicesFive";
import OurServicesFourth from "./Sections/OurServicesFourth";
import OurServicesSecond from "./Sections/OurServicesSecond";
import OurServicesSeven from "./Sections/OurServicesSeven";
import OurServicesSix from "./Sections/OurServicesSix";
import OurServicesThird from "./Sections/OurServicesThird";

const OurServices = () => {
  return (
    <div>
      <BlogHero title="Our Services" />
      <OurServicesFirst />
      <OurServicesSecond />
      <OurServicesFourth />
      <OurServicesThird />
      <OurServicesFive />
      <OurServicesSix />
      <OurServicesSeven />
      <OurServicesEight />
    </div>
  );
};

export default OurServices;
