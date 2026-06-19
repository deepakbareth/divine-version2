import './App.css'
import { Routes, Route } from "react-router-dom";

import Banner from './Components/Home/Banner'
// import BenefitsSection from './Components/Home/BenefitsSection/BenefitsSection'
import CompareCTA from './Components/Home/CompareCTA'
import CounsellingSection from './Components/Home/CounsellingForm/CounsellingSection'

import CourseSection from './Components/Home/CourseSection/CourseSection'
import MediaSection from './Components/Home/featuredMedia/MediaSection'
import ExpertsSection from './Components/Home/ExpertsSection/ExpertsSection'
// import Footer from './Components/Layout/Footer/Footer'
import InsightSection from './Components/Home/InsightSection/InsightSection'
import LogoTicker from './Components/Home/LogoTicker'
// import Navbar from './Components/Layout/Navber'
import TestimonialParallax from './Components/Home/Testimonials/Testimonials'
import Testimonials from './Components/Home/Testimonials/Testimonials'
import TrendingSection from './Components/Home/TrendingSection/TrendingSection'
import UniversitySearch from './Components/Home/UniversitySearch'
import UniversityWall from './Components/Home/UniversityWall/UniversityWall'
import Home from './pages/Home'
import About from './pages/About';
import Navbar from './Components/Layout/Navber';
import Footer from './Components/Layout/Footer/Footer';




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/divine/" element={<Home />} />
        <Route path="/divine/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} />  */}
      </Routes>
      <Footer />
    </>
  );
}

export default App






{/* <Navbar /> */ }
{/* <Banner />
<LogoTicker />
<CourseSection /> */}
{/* <BenefitsSection />
<UniversitySearch />
<TrendingSection />
<UniversityWall />
<CompareCTA />
<ExpertsSection />
<Testimonials />
<MediaSection />
<InsightSection />
<CounsellingSection /> */}
{/* <Footer /> */ }