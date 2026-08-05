import React from 'react';
import {
  Calendar,
  BookOpen,
  Laptop,
  Award,
  Briefcase,
  Percent,
  ShieldCheck,
  Globe2,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

const iconMap = {
  "Established In": Calendar,
  "Programs Offered": BookOpen,
  "Learning Mode": Laptop,
  "Accreditation": Award,
  "Placement Support": Briefcase,
  "Fee Flexibility": Percent,
  "Exam Mode": ShieldCheck,
  "Global Validity": Globe2
};

const UniversityHighlights = ({ highlights, universityName }) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="py-12 bg-white border-y border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badgeText="Institutional Strengths"
          title="Key Institutional Highlights of"
          titleHighlight={universityName}
          description="Everything you need to know about academic standards, digital delivery, and career support."
          centered={true}
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8">
          {highlights.map((item, idx) => {
            const IconComponent = iconMap[item.label] || Sparkles;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-[#59c28a]/70 hover:bg-emerald-50/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200/70 text-[#2d8f5e] group-hover:bg-[#59c28a] group-hover:text-slate-950 group-hover:border-transparent flex items-center justify-center mb-4 transition-all duration-300 shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5 font-sans">
                    {item.label}
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug group-hover:text-[#002147] transition-colors font-serif">
                    {item.value}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default UniversityHighlights;
