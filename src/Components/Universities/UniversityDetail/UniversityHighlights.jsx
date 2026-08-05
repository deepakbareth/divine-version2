import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

const UniversityHighlights = ({ highlights, universityName }) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 border-y border-slate-200/80 font-sans relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#59c28a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#002147]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

        <SectionHeader
          badgeText="Institutional Strengths"
          title="Key Institutional Highlights of"
          titleHighlight={universityName}
          description="Everything you need to know about academic standards, digital delivery, flexible fees, and career support."
          centered={true}
        />

        {/* ========================================================================= */}
        {/* RESPONSIVE MODERN BENTO GRID (Universal Clean Aesthetic)                  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {highlights.map((item, idx) => {
            return (
              <div
                key={idx}
                className="relative p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#59c28a]/70 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Subtle top card accent glow on hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#59c28a]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Card Header: Universal ShieldCheck Icon + Verified Pill Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#59c28a]/10 text-[#1e7e4d] border border-[#59c28a]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#59c28a] group-hover:text-slate-950 group-hover:shadow-md transition-all duration-300 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border bg-emerald-50 text-[#1e7e4d] border-emerald-200/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#59c28a]"></span>
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Label */}
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block font-sans mb-1">
                    {item.label}
                  </span>

                  {/* Value / Highlight Text */}
                  <h4 className="text-base sm:text-lg font-black text-[#002147] font-serif leading-snug group-hover:text-[#2a925e] transition-colors">
                    {item.value}
                  </h4>
                </div>

                {/* Subtitle / Explanatory Note */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <p className="text-xs text-slate-500 font-light leading-normal line-clamp-1 group-hover:text-slate-700 transition-colors">
                    {item.subtitle || (item.label?.toLowerCase().includes("established") && item.value?.match(/\d{4}/)
                      ? `${new Date().getFullYear() - Number(item.value.match(/\d{4}/)[0])}+ years of academic legacy`
                      : "Statutory verified institutional standard")}
                  </p>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#59c28a] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
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
