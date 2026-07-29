import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { title, tagline, duration, eligibility, feeSemester, badge, slug, categoryName } = course;

  // Generate dynamic tags based on the existing course information
  const highlights = [
    badge,
    duration,
    eligibility ? eligibility.split("from")[0].split("with")[0].trim() : null,
    feeSemester
  ].filter(Boolean);

  return (
    <div className="group bg-white rounded-3xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[#59c28a]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between h-full relative">

      <div>
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-1.5 transition-colors">
          {title}
        </h3>

        {/* Subtitle Stream */}
        <p className="text-slate-500 text-xs sm:text-sm font-medium mb-6">
          {categoryName} • DIMS
        </p>

        {/* Highlight Label */}
        <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3.5">
          DIMS Program Highlights
        </span>

        {/* Highlight Pills Grid */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          {highlights.map((tag, idx) => (
            <span
              key={idx}
              className="bg-[#e2f2fe] text-[#0066b2] rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-colors group-hover:bg-[#e2f2fe]/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tagline Description Footer with CTA Button */}
      <div className="mt-auto pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light line-clamp-2 sm:max-w-[70%]">
          {tagline}
        </p>
        <Link
          to={`/divine/course/${slug}`}
          className="w-full sm:w-auto inline-flex items-center justify-center py-2.5 px-5 rounded-xl bg-slate-950 hover:bg-[#59c28a] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer text-center"
        >
          View Details
        </Link>
      </div>

    </div>
  );
};

export default CourseCard;
