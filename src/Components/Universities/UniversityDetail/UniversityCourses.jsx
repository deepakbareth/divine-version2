import React, { useState } from 'react';
import { GraduationCap, ArrowRight, Clock, IndianRupee, Layers, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

const UniversityCourses = ({ university, onSelectCourse }) => {
  const { name, programs, popularCourses, mode } = university;
  const [activeCategory, setActiveCategory] = useState('All');

  // If detailed programs array is available
  if (programs && programs.length > 0) {
    const categories = ['All', ...Array.from(new Set(programs.map((p) => p.category || 'Programs')))];

    const filteredPrograms = activeCategory === 'All'
      ? programs
      : programs.filter((p) => (p.category || 'Programs') === activeCategory);

    return (
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 font-sans space-y-6">
        <SectionHeader
          badgeText="Academic Programs"
          title="In-Demand"
          titleHighlight={`${name} Courses`}
          description="Accredited online & distance degree programs designed for career enhancement and high-paying jobs."
          centered={false}
        />

        {/* Category Filter Tabs */}
        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 pt-1 border-b border-slate-100 pb-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#002147] text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 gap-5 pt-2">
          {filteredPrograms.map((prog, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#59c28a]/60 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Header row with duration & EMI */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#2d8f5e] font-bold text-[10px] uppercase tracking-wider border border-emerald-100">
                    {prog.level || "Degree"}
                  </span>

                  {prog.monthlyEmi && (
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 font-bold text-[10px] tracking-wide border border-amber-200">
                      EMI: {prog.monthlyEmi}
                    </span>
                  )}
                </div>

                {/* Program Name */}
                <h4 className="font-bold text-slate-900 text-base font-serif group-hover:text-[#002147] transition-colors leading-snug">
                  {prog.name}
                </h4>

                {/* Duration & Fee info */}
                <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-slate-500 font-light">
                  {prog.duration && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#2d8f5e]" />
                      <span>{prog.duration}</span>
                    </div>
                  )}
                  {prog.totalFee && (
                    <div className="flex items-center gap-1 font-medium text-slate-700">
                      <IndianRupee className="w-3.5 h-3.5 text-[#2d8f5e]" />
                      <span>{prog.totalFee}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {prog.description && (
                  <p className="text-slate-500 text-xs font-light line-clamp-2 leading-relaxed">
                    {prog.description}
                  </p>
                )}

                {/* Eligibility */}
                {prog.eligibility && (
                  <div className="text-[11px] text-slate-600 bg-white/80 p-2.5 rounded-xl border border-slate-200/60 leading-relaxed">
                    <span className="font-bold text-slate-700">Eligibility:</span> {prog.eligibility}
                  </div>
                )}

                {/* Specializations Tags */}
                {prog.specializations && prog.specializations.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Popular Electives:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.specializations.slice(0, 4).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-200/60 text-slate-700 text-[10px] font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                      {prog.specializations.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-slate-200/60 text-slate-500 text-[10px] font-medium">
                          +{prog.specializations.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-auto">
                <button
                  type="button"
                  onClick={() => onSelectCourse(prog.name)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#59c28a] text-white hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Inquire / Get Fee Structure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Fallback if only popularCourses list is present
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
