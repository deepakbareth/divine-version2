import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../Data/coursesData';
import CourseHero from '../Components/Courses/CourseHero';
import CourseTabs from '../Components/Courses/CourseTabs';
import AdmissionProcessSteps from '../Components/Courses/AdmissionProcessSteps';
import FaqAccordion from '../Components/reusable/FaqAccordion';
import SectionHeader from '../Components/reusable/SectionHeader';
import LeadEnquiryForm from '../Components/reusable/LeadEnquiryForm';

const CourseDetail = () => {
  const { slug } = useParams();
  const [showModalForm, setShowModalForm] = useState(false);

  // Find course matching slug
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-4 font-sans">
        <div className="text-center bg-white p-10 rounded-3xl border border-slate-200 shadow-xl max-w-md">
          <h2 className="text-3xl font-extrabold text-slate-900 font-serif mb-3">Course Not Found</h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            The requested course program may have been moved or updated. Explore our list of accredited courses.
          </p>
          <Link
            to="/divine/courses"
            className="inline-block py-3.5 px-6 rounded-xl bg-[#59c28a] text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#59c28a]/20 hover:bg-[#46aa75] transition-colors"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 min-h-screen font-sans">
      
      {/* Course Hero Banner */}
      <CourseHero course={course} onOpenForm={() => setShowModalForm(true)} />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Column: Tabs, Admission Process & FAQs */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Tabs View */}
            <CourseTabs course={course} />

            {/* Admission Roadmap */}
            <AdmissionProcessSteps />

            {/* FAQs Section */}
            {course.faqs && course.faqs.length > 0 && (
              <div>
                <SectionHeader
                  badgeText="Common Doubts"
                  title="Frequently Asked"
                  titleHighlight="Questions"
                  centered={false}
                />
                <FaqAccordion faqs={course.faqs} />
              </div>
            )}

          </div>

          {/* Sidebar Column: Sticky Lead Capture Form */}
          <div className="lg:col-span-4 sticky top-28">
            <LeadEnquiryForm
              title={`Inquire About ${course.shortTitle || course.title}`}
              subtitle="Get instant fee structure, syllabus PDF & counselor call."
              buttonText="Request Callback"
              courseName={course.title}
            />
          </div>

        </div>
      </div>

      {/* Slide-over Form Modal Backdrop if user clicks Hero CTA */}
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
              title={`Apply for ${course.shortTitle}`}
              subtitle="Fill details below to lock your seat & scholarship."
              buttonText="Submit Application"
              courseName={course.title}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default CourseDetail;
