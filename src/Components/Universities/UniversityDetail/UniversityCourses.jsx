import React from 'react';
import { GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

const UniversityCourses = ({ university, onSelectCourse }) => {
  const { name, popularCourses, mode } = university;

  if (!popularCourses || popularCourses.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 font-sans space-y-6">
      
      <SectionHeader
        badgeText="Academic Programs"
        title="Popular Programs Offered at"
        titleHighlight={name}
        description="Select any degree to receive direct syllabus details, eligibility criteria, and fee structure."
        centered={false}
      />

      <div className="grid sm:grid-cols-2 gap-4 pt-2">
        {popularCourses.map((courseName, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#59c28a]/60 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#2d8f5e] font-bold text-[10px] uppercase tracking-wider border border-emerald-100">
                  {mode || "Accredited Program"}
                </span>
                <GraduationCap className="w-5 h-5 text-slate-400 group-hover:text-[#59c28a] transition-colors" />
              </div>

              <h4 className="font-bold text-slate-900 text-base font-serif mb-2">
                {courseName}
              </h4>

              <p className="text-slate-500 text-xs font-light mb-4">
                UGC recognized degree curriculum designed for flexible learning.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectCourse(courseName)}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#59c28a] text-white hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Inquire This Program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default UniversityCourses;
