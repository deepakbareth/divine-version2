import React, { useState } from 'react';
import { BookOpen, CheckCircle, GraduationCap, Briefcase, FileCheck, Layers } from 'lucide-react';

const CourseTabs = ({ course }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const { overview, scope, curriculum, careers, eligibility, feeSemester, feeTotal, duration, mode } = course;

  const tabs = [
    { id: 'overview', label: 'Overview & Scope', icon: BookOpen },
    { id: 'eligibility', label: 'Eligibility & Fees', icon: GraduationCap },
    { id: 'curriculum', label: 'Syllabus', icon: Layers },
    { id: 'careers', label: 'Career Scope', icon: Briefcase }
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-8">
      
      {/* Navigation Buttons Header */}
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#59c28a]' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Panels */}
      <div>

        {/* TAB 1: OVERVIEW & SCOPE */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif mb-4">
                Course Program Overview
              </h3>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                {overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {scope && scope.length > 0 && (
              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 font-serif mb-4">
                  Key Highlights & Learning Scope
                </h4>
                <ul className="space-y-3">
                  {scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base">
                      <CheckCircle className="w-5 h-5 text-[#59c28a] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: ELIGIBILITY & FEES */}
        {activeTab === 'eligibility' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
                <span className="text-xs font-bold text-[#59c28a] uppercase tracking-wider">Required Qualification</span>
                <h4 className="text-lg font-bold text-slate-900 font-serif">Academic Eligibility</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">{eligibility}</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
                <span className="text-xs font-bold text-[#59c28a] uppercase tracking-wider">Learning Duration</span>
                <h4 className="text-lg font-bold text-slate-900 font-serif">Program Timeframe</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">{duration} ({mode})</p>
              </div>
            </div>

            <div className="bg-emerald-50/50 p-6 sm:p-8 rounded-2xl border border-emerald-100 space-y-4">
              <h4 className="text-xl font-bold text-slate-900 font-serif">Flexible Fee Structure</h4>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Program Fee</span>
                  <span className="text-xl font-extrabold text-slate-900 font-serif">{feeTotal}</span>
                </div>
                {feeSemester && (
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Semester Installment</span>
                    <span className="text-xl font-extrabold text-[#59c28a] font-serif">{feeSemester}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CURRICULUM / SYLLABUS */}
        {activeTab === 'curriculum' && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif mb-2">
              Semester-Wise Syllabus & Subjects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {curriculum.map((sem, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-[#59c28a] font-bold text-sm uppercase tracking-wider font-serif">
                    <FileCheck className="w-4 h-4" />
                    <span>{sem.semesterName}</span>
                  </div>
                  <ul className="space-y-2">
                    {sem.subjects.map((sub, sIdx) => (
                      <li key={sIdx} className="text-slate-700 text-xs sm:text-sm font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#59c28a]"></span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CAREER SCOPE */}
        {activeTab === 'careers' && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif mb-2">
              Career Opportunities & Expected Packages
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {careers.map((car, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-serif">{car.role}</h4>
                    <span className="text-xs text-slate-500">Corporate & Public Sectors</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-semibold">Package Scope</span>
                    <span className="text-sm font-extrabold text-[#59c28a] font-serif">{car.avgSalary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default CourseTabs;
