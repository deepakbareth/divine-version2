import React from 'react';
import { Briefcase, Building } from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

const UniversityHiringPartners = ({ partners, universityName }) => {
  if (!partners || partners.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 font-sans space-y-6">
      <SectionHeader
        badgeText="Career & Placements"
        title="Top Hiring Partners &"
        titleHighlight="Recruiters"
        description={`Leading multinational companies and corporate partners hiring graduates from ${universityName}.`}
        centered={false}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex items-center justify-center gap-2 text-center group"
          >
            <Building className="w-4 h-4 text-slate-400 group-hover:text-[#2d8f5e] shrink-0" />
            <span className="font-bold text-slate-800 text-xs sm:text-sm font-sans truncate">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityHiringPartners;
