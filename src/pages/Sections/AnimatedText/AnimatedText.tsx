import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./animatedTextStyles.css"; // Import CSS file

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Component
const AnimatedText: React.FC = () => {
  useEffect(() => {
    // Animation logic
    const textElements = gsap.utils.toArray(".lastsection-Text");
    textElements.forEach((text: any) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="lastsection-Container">
      <h1 className="lastsection-Text">OUR PARTNERS & CLIENTS</h1>
      <h1 className="lastsection-Text">Akwa Ibom State Government </h1>
      <h1 className="lastsection-Text">Eastern Obolo Local Government Area</h1>
      <h1 className="lastsection-Text">Ikot Abasi Local Government Area</h1>
      <h1 className="lastsection-Text">
        Sterling Global Oil Exploration and Production Co. Ltd
      </h1>
      <h1 className="lastsection-Text">
        Natural Oilfield Services Limited (NOSL)
      </h1>
      <h1 className="lastsection-Text">Nemissis Nigeria Limited (NNL)</h1>
      <h1 className="lastsection-Text">
        Niger Delta Development Commission (NDDC)
      </h1>
      <h1 className="lastsection-Text">Arise</h1>
      <h1 className="lastsection-Text">
        Silver Tiara Logistics Limited (STLL){" "}
      </h1>

      <h1 className="lastsection-Text">Ibom Developer FZE</h1>
      <h1 className="lastsection-Text">Alacrity Production </h1>
    </div>
  );
};

export default AnimatedText;
