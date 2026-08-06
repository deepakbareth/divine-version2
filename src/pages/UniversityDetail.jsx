import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { universityDetailData } from '../Data/universityDetailData';
import { universitiesData } from '../Data/universitiesData';

// Sub-components
import UniversityHero from '../Components/Universities/UniversityDetail/UniversityHero';
import UniversityHighlights from '../Components/Universities/UniversityDetail/UniversityHighlights';
import UniversityOverview from '../Components/Universities/UniversityDetail/UniversityOverview';
import UniversityProgramsSlider from '../Components/Universities/UniversityDetail/UniversityProgramsSlider';
import UniversityHiringPartners from '../Components/Universities/UniversityDetail/UniversityHiringPartners';
import UniversityAdmissionSteps from '../Components/Universities/UniversityDetail/UniversityAdmissionSteps';
import UniversityFaqs from '../Components/Universities/UniversityDetail/UniversityFaqs';
import UniversityBottomAdmissionDesk from '../Components/Universities/UniversityDetail/UniversityBottomAdmissionDesk';
import LeadEnquiryForm from '../Components/reusable/LeadEnquiryForm';

const UniversityDetail = () => {
  const { slug } = useParams();
  const [showModalForm, setShowModalForm] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState('');

  // Primary source: dedicated university detail data repository
  // Secondary fallback: universitiesData listing array
  const university = universityDetailData[slug] || universitiesData.find((u) => u.slug === slug);

  if (!university) {
    return (
      <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-4 font-sans py-24">
        <div className="text-center bg-white p-10 rounded-3xl border border-slate-200 shadow-xl max-w-md">
          <h2 className="text-3xl font-extrabold text-slate-900 font-serif mb-3">University Not Found</h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed font-light">
            The requested university profile may have been updated. Explore our full portfolio of partner institutions.
          </p>
          <Link
            to="/divine/universities"
            className="inline-block py-3.5 px-6 rounded-xl bg-[#59c28a] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#46aa75] transition-colors"
          >
            Browse All Universities
          </Link>
        </div>
      </div>
    );
  }

  const handleOpenCourseInquiry = (courseName) => {
    setSelectedCourseForModal(courseName);
    setShowModalForm(true);
  };

  const scrollToAdmissionDesk = () => {
    const el = document.getElementById('admission-desk');
    if (el) {
      const headerOffset = 10;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      setSelectedCourseForModal('');
      setShowModalForm(true);
    }
  };

  return (
    <div className="bg-slate-50/60 min-h-screen font-sans">

      {/* 1. Luxury University Hero Banner */}
      <UniversityHero
        university={university}
        onOpenForm={scrollToAdmissionDesk}
      />

      {/* 2. About & Institutional Overview & Approvals */}
      <UniversityOverview
        university={university}
        onOpenForm={scrollToAdmissionDesk}
      />

      {/* 3. Key Institutional Highlights (Bento Grid Section) */}
      <UniversityHighlights
        highlights={university.highlights}
        universityName={university.shortName || university.name}
      />

      {/* 4. Academic Programs (Swiper Slider with Category Tabs) */}
      <UniversityProgramsSlider
        university={university}
        onSelectCourse={handleOpenCourseInquiry}
      />

      {/* 5. Placements, Salary Insights & Top Corporate Recruiters */}
      <UniversityHiringPartners
        partners={university.hiringPartners}
        universityName={university.shortName || university.name}
        placementData={university.placementData}
        onOpenForm={scrollToAdmissionDesk}
      />

      {/* 6. Step-by-Step Admission Process */}
      <UniversityAdmissionSteps
        university={university}
        onStartAdmission={scrollToAdmissionDesk}
      />

      {/* 7. Frequently Asked Questions (Categorized like CollegeSathi) */}
      <UniversityFaqs
        faqs={university.faqs}
        faqCategories={university.faqCategories}
        universityName={university.shortName || university.name}
      />

      {/* 8. Full-Width Bottom Admission Desk & Helpline */}
      <UniversityBottomAdmissionDesk
        university={university}
        selectedCourse={selectedCourseForModal}
      />

      {/* Quick Modal Popup (for Course-Specific Inquiries) */}
      {showModalForm && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full relative">
            <button
              onClick={() => setShowModalForm(false)}
              className="absolute -top-10 right-0 text-white font-bold text-sm bg-white/10 px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 cursor-pointer"
            >
              ✕ Close
            </button>
            <LeadEnquiryForm
              title={selectedCourseForModal ? `Inquire for ${selectedCourseForModal}` : `Inquire for ${university.name}`}
              subtitle="Fill details below to lock your seat & receive official fee breakdown."
              buttonText="Request Callback"
              courseName={selectedCourseForModal || university.name}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default UniversityDetail;
