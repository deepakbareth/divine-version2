import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import CourseListing from './pages/CourseListing';
import CourseDetail from './pages/CourseDetail';
import UniversityListing from './pages/UniversityListing';
import UniversityDetail from './pages/UniversityDetail';
import Gallery from './pages/Gallery';
import BlogListing from './pages/BlogListing';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';
import Careers from './pages/Careers';

import Navbar from './Components/Layout/Navber';
import Footer from './Components/Layout/Footer/Footer';
import ScrollToTop from './Components/Layout/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/divine/" element={<Home />} />
        <Route path="/divine/about" element={<About />} />
        <Route path="/divine/courses" element={<CourseListing />} />
        <Route path="/divine/course/:slug" element={<CourseDetail />} />
        <Route path="/divine/universities" element={<UniversityListing />} />
        <Route path="/divine/university/:slug" element={<UniversityDetail />} />
        <Route path="/divine/gallery" element={<Gallery />} />
        <Route path="/divine/blogs" element={<BlogListing />} />
        <Route path="/divine/blog/:slug" element={<BlogDetail />} />
        <Route path="/divine/contact-us" element={<Contact />} />
        <Route path="/divine/faqs" element={<Faq />} />
        <Route path="/divine/careers" element={<Careers />} />
        <Route path="/divine/cs-careers" element={<Careers />} />
        <Route path="/divine/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/divine/terms-conditions" element={<TermsConditions />} />
        <Route path="/divine/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/divine/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;