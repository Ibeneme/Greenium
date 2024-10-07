import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurServices from "./pages/OurServices";
import Navbar from "./pages/Navbar/Navbar";
import OurPartners from "./pages/OurPartners";
import AboutUs from "./pages/AboutUs";
import OurProjects from "./pages/OurProjects";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/partners" element={<OurPartners />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<OurProjects />} />
      </Routes>
    </>
  );
}

export default App;
