import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { universitiesData } from '../Data/universitiesData';
import UniversityHero from '../Components/Universities/UniversityDetail/UniversityHero';
import UniversityOverview from '../Components/Universities/UniversityDetail/UniversityOverview';
import UniversityCourses from '../Components/Universities/UniversityDetail/UniversityCourses';
import UniversityAdmissionSteps from '../Components/Universities/UniversityDetail/UniversityAdmissionSteps';
import LeadEnquiryForm from '../Components/reusable/LeadEnquiryForm';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';

const UniversityDetail = () => {
  const { slug } = useParams();
  const [showModalForm, setShowModalForm] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState('');

  // Find matching university
  const university = universitiesData.find((u) => u.slug === slug);

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

  return (
    <div className="bg-slate-50/60 min-h-screen font-sans">
      
      {/* 1. University Hero Banner */}
      <UniversityHero
        university={university}
        onOpenForm={() => {
          setSelectedCourseForModal('');
          setShowModalForm(true);
        }}
      />

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Left Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <UniversityOverview university={university} />

            {/* Offered Courses */}
            <UniversityCourses
              university={university}
              onSelectCourse={handleOpenCourseInquiry}
            />

            {/* Admission Steps */}
            <UniversityAdmissionSteps
              onStartAdmission={() => {
                setSelectedCourseForModal('');
                setShowModalForm(true);
              }}
            />

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            
            {/* Lead Form */}
            <LeadEnquiryForm
              title={`Inquire About ${university.name}`}
              subtitle="Get official syllabus, fee structure & counselor guidance."
              buttonText="Request Callback"
              courseName={selectedCourseForModal || university.name}
            />

            {/* Counselor Helpline Box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2d8f5e] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black tracking-widest text-[#2d8f5e] uppercase block">
                    Divine Jaipur Desk
                  </span>
                  <h4 className="text-slate-900 font-bold text-sm font-serif">
                    Counselor Helpline
                  </h4>
                </div>
              </div>

              <p className="text-slate-500 text-xs font-light leading-relaxed">
                Connect with our certified admissions counselors in Jaipur for free profile guidance.
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href="tel:9828477772"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 hover:bg-[#59c28a] text-white hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: +91 98284 77772</span>
                </a>

                <a
                  href="https://wa.me/919828477772?text=Hello%20Divine%20Institute,%20I%20want%20information%20regarding%20university%20admission"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#2d8f5e] font-bold text-xs transition-colors border border-emerald-200"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Inquiry Form Modal */}
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
              title={selectedCourseForModal ? `Apply for ${selectedCourseForModal}` : `Apply to ${university.name}`}
              subtitle="Fill details below to lock your seat & scholarship concession."
              buttonText="Submit Application"
              courseName={selectedCourseForModal || university.name}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default UniversityDetail;
