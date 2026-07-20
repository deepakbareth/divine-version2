import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, GraduationCap, CheckCircle2, FileText, Download, ChevronRight } from 'lucide-react';

const CourseHero = ({ course, onOpenForm }) => {
  const { title, shortTitle, tagline, categoryName, duration, eligibility, mode, feeTotal, badge } = course;

  return (
    <section className="bg-slate-900 text-white py-22 sm:py-22 lg:py-24 relative overflow-hidden font-sans border-b border-slate-800">

      {/* Background Decorative Neon Glows */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-[#59c28a]/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">

        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 flex-wrap">
          <Link to="/divine/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <Link to="/divine/courses" className="hover:text-white transition-colors">Courses</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[#92e0b3] font-bold truncate max-w-xs">{shortTitle || title}</span>
        </div>

        {/* Category & Badge Row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-slate-300 font-semibold text-xs uppercase tracking-wider border border-white/10">
            {categoryName}
          </span>
          {badge && (
            <span className="px-4 py-1.5 rounded-full bg-[#59c28a]/20 text-[#92e0b3] font-bold text-xs uppercase tracking-wider border border-[#59c28a]/40 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              {badge}
            </span>
          )}
        </div>

        {/* Course Title & Tagline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-tight mb-4 max-w-4xl">
          {title}
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl font-light mb-8">
          {tagline}
        </p>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md mb-8 max-w-4xl">
          <div className="space-y-1">
            <span className="text-slate-400 text-xs uppercase font-semibold tracking-wider flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#92e0b3]" /> Duration
            </span>
            <p className="text-white text-sm sm:text-base font-bold font-serif">{duration}</p>
          </div>

          <div className="space-y-1">
            <span className="text-slate-400 text-xs uppercase font-semibold tracking-wider flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-[#92e0b3]" /> Eligibility
            </span>
            <p className="text-white text-xs sm:text-sm font-bold line-clamp-1">{eligibility}</p>
          </div>

          <div className="space-y-1">
            <span className="text-slate-400 text-xs uppercase font-semibold tracking-wider flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#92e0b3]" /> Mode
            </span>
            <p className="text-white text-xs sm:text-sm font-bold line-clamp-1">{mode}</p>
          </div>

          <div className="space-y-1">
            <span className="text-slate-400 text-xs uppercase font-semibold tracking-wider flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-[#92e0b3]" /> Total Fee
            </span>
            <p className="text-[#92e0b3] text-xs sm:text-sm font-extrabold font-serif line-clamp-1">{feeTotal}</p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenForm}
            className="px-8 py-4 rounded-xl bg-[#59c28a] hover:bg-[#46aa75] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-[#59c28a]/20 cursor-pointer"
          >
            Apply for Admission
          </button>

          <button
            // onClick={onOpenForm}
            className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wider uppercase transition-colors border border-white/15 flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Syllabus</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CourseHero;
