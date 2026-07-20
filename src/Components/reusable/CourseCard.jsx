import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, GraduationCap, ArrowRight, Award } from 'lucide-react';

const CourseCard = ({ course }) => {
  const { title, shortTitle, tagline, duration, eligibility, feeSemester, badge, slug, categoryName } = course;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#59c28a]/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
      
      {/* Top Header Area */}
      <div className="p-6 sm:p-7 border-b border-slate-100 relative bg-gradient-to-br from-slate-50 to-white">
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#92e0b3]/20 text-[#59c28a] font-bold text-xs uppercase tracking-wider mb-4 border border-[#92e0b3]/40">
            <Award className="w-3.5 h-3.5" />
            {badge}
          </div>
        )}
        
        <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif leading-tight mb-2 group-hover:text-[#59c28a] transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 leading-relaxed font-light">
          {tagline}
        </p>
      </div>

      {/* Course Key Details */}
      <div className="p-6 sm:p-7 space-y-4 flex-grow">
        <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
          <Clock className="w-4 h-4 text-[#59c28a] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-900 block">Duration</span>
            <span className="font-light">{duration}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
          <GraduationCap className="w-4 h-4 text-[#59c28a] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-900 block">Eligibility</span>
            <span className="font-light line-clamp-1">{eligibility}</span>
          </div>
        </div>

        {feeSemester && (
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Fee Option</span>
            <span className="text-sm font-extrabold text-slate-900 font-serif">{feeSemester}</span>
          </div>
        )}
      </div>

      {/* Card Action Link */}
      <div className="p-6 sm:p-7 pt-0">
        <Link
          to={`/divine/course/${slug}`}
          className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-[#59c28a] text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer"
        >
          <span>Explore Course</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
};

export default CourseCard;
