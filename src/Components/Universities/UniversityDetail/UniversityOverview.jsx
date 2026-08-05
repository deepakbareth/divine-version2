import React from 'react';
import { Award, Globe, MapPin, CheckCircle2, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

const UniversityOverview = ({ university }) => {
  const { name, aboutTitle, description, mode, naacGrade, location, approvals, highlights } = university;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 font-sans space-y-6">
      
      <SectionHeader
        badgeText="About Institution"
        title="Overview of"
        titleHighlight={name}
        centered={false}
      />

      {/* University Description */}
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
        {description}
      </p>

      {/* Institutional Highlights Grid */}
      {highlights && highlights.length > 0 ? (
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#2d8f5e]" />
            <h4 className="text-sm font-bold text-slate-800 font-serif">
              Key Institutional Highlights
            </h4>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col justify-between"
              >
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Fallback Summary Grid */
        <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#2d8f5e] flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Learning Mode</p>
              <p className="text-sm font-bold text-slate-800">{mode || "Online / Distance Education"}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0066b2] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Accreditation</p>
              <p className="text-sm font-bold text-slate-800">{naacGrade || "UGC-DEB Approved"}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Campus Location</p>
              <p className="text-sm font-bold text-slate-800">{location}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Approvals</p>
              <p className="text-sm font-bold text-slate-800">{approvals?.join(", ") || "UGC-DEB, AICTE"}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default UniversityOverview;
