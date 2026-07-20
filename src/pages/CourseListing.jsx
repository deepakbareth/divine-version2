import React, { useState } from 'react';
import { coursesData, courseCategories } from '../Data/coursesData';
import CourseCard from '../Components/reusable/CourseCard';
import SectionHeader from '../Components/reusable/SectionHeader';
import LeadEnquiryForm from '../Components/reusable/LeadEnquiryForm';

const CourseListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = selectedCategory === 'all'
    ? coursesData
    : coursesData.filter((c) => c.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen py-22 sm:py-22 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Section Header */}
        <SectionHeader
          badgeText="Accredited Programs"
          title="Explore Distance & Online"
          titleHighlight="Management Courses"
          description="Select from recognized Doctorate, Masters, Graduation, and Diploma programs structured specifically for working class professionals."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {courseCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${isSelected
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                  }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 mb-16">
            <h3 className="text-xl font-bold text-slate-800 font-serif">No courses found in this category.</h3>
            <p className="text-slate-500 text-sm mt-2">Please select another category or request a custom course consultation.</p>
          </div>
        )}

        {/* Lead Form Banner */}
        <div className="max-w-3xl mx-auto">
          <LeadEnquiryForm
            title="Need Guidance Choosing the Right Program?"
            subtitle="Speak to our senior educational counsellors for customized program selection."
            buttonText="Request Free Consultation"
          />
        </div>

      </div>
    </div>
  );
};

export default CourseListing;
