import React from 'react';
import { Building2, MapPin, CheckCircle2, Award, ArrowRight } from 'lucide-react';

const UniversityCard = ({ university, onOpenModal }) => {
  const { logo, name, badge, naacGrade, location, description, approvals, popularCourses } = university;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[#59c28a]/40 transition-all duration-300 p-6 flex flex-col justify-between group">
      <div>
        {/* Top Logo & Badges Area */}
        <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
          <div className="w-36 bg-slate-50 rounded-xl p-2 border border-slate-100 flex items-center justify-center shrink-0">
            <img
              src={logo}
              alt={name}
              className="max-h-full max-w-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full items-center justify-center text-slate-400 font-bold text-xs">
              <Building2 className="w-6 h-6 text-slate-400" />
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="px-3 py-1 rounded-full bg-[#e2f2fe] text-[#0066b2] font-bold text-[11px] uppercase tracking-wider">
              {badge}
            </span>
            {naacGrade && (
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#46aa75] font-semibold text-[10px] flex items-center gap-1 border border-emerald-100">
                <Award className="w-3 h-3" />
                {naacGrade}
              </span>
            )}
          </div>
        </div>

        {/* University Name & Location */}
        <h3 className="text-xl font-bold text-slate-900 transition-colors leading-snug mb-1">
          {name}
        </h3>

        <p className="text-slate-500 text-xs font-semibold flex items-center gap-1 mb-4">
          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>{location}</span>
        </p>

        {/* Exact Word Document Description */}
        <p className="text-slate-600 text-xs leading-relaxed font-normal mb-5 line-clamp-4">
          {description}
        </p>

        {/* Approvals List Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {approvals.map((app, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-[10px] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#59c28a]" />
              {app}
            </span>
          ))}
        </div>

        {/* Popular Programs Offered */}
        {popularCourses && (
          <div className="pt-3 border-t border-slate-100 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Key Offered Programs:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {popularCourses.map((crs, idx) => (
                <span key={idx} className="bg-[#e2f2fe]/60 text-[#0066b2] px-2.5 py-0.5 rounded-full text-[11px] font-medium">
                  {crs}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Action Button */}
      <button
        onClick={() => onOpenModal(name)}
        className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#59c28a] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer shadow-md"
      >
        <span>Request Fee Details</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </button>
    </div>
  );
};

export default UniversityCard;
