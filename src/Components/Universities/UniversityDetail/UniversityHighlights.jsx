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
  Sparkles,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

// Rich contextual configuration for each highlight metric
const HIGHLIGHT_CONFIG = {
  "Established In": {
    icon: Calendar,
    tag: "Legacy",
    subtitle: "Two decades of academic excellence",
    colorClass: "from-amber-500/10 to-orange-500/5 text-amber-600 border-amber-200/70",
    iconBg: "bg-amber-500/10 text-amber-600",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200/60"
  },
  "Programs Offered": {
    icon: BookOpen,
    tag: "Curriculum",
    subtitle: "Industry-aligned UG, PG & Dual degrees",
    colorClass: "from-blue-500/10 to-indigo-500/5 text-blue-600 border-blue-200/70",
    iconBg: "bg-blue-500/10 text-blue-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200/60"
  },
  "Learning Mode": {
    icon: Laptop,
    tag: "Flexible",
    subtitle: "24/7 Digital LMS + Live weekend sessions",
    colorClass: "from-indigo-500/10 to-sky-500/5 text-indigo-600 border-indigo-200/70",
    iconBg: "bg-indigo-500/10 text-indigo-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200/60"
  },
  "Accreditation": {
    icon: Award,
    tag: "Top Rated",
    subtitle: "UGC Entitled at par with campus degree",
    colorClass: "from-emerald-500/10 to-teal-500/5 text-emerald-600 border-emerald-200/70",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    featured: true
  },
  "Placement Support": {
    icon: Briefcase,
    tag: "Career Ready",
    subtitle: "Resume audits, job drives & 1:1 mentorship",
    colorClass: "from-rose-500/10 to-pink-500/5 text-rose-600 border-rose-200/70",
    iconBg: "bg-rose-500/10 text-rose-600",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200/60",
    featured: true
  },
  "Fee Flexibility": {
    icon: Percent,
    tag: "Zero-Cost",
    subtitle: "No-cost monthly EMI options available",
    colorClass: "from-teal-500/10 to-emerald-500/5 text-teal-600 border-teal-200/70",
    iconBg: "bg-teal-500/10 text-teal-600",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200/60"
  },
  "Exam Mode": {
    icon: ShieldCheck,
    tag: "Convenient",
    subtitle: "Take exams from the comfort of home",
    colorClass: "from-sky-500/10 to-blue-500/5 text-sky-600 border-sky-200/70",
    iconBg: "bg-sky-500/10 text-sky-600",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200/60"
  },
  "Global Validity": {
    icon: Globe2,
    tag: "Worldwide",
    subtitle: "Accepted for WES, Canada PR & global jobs",
    colorClass: "from-violet-500/10 to-purple-500/5 text-violet-600 border-violet-200/70",
    iconBg: "bg-violet-500/10 text-violet-600",
    badgeBg: "bg-violet-50 text-violet-700 border-violet-200/60"
  }
};

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
        {/* RESPONSIVE MODERN BENTO GRID (1-col mobile, 2-col tablet, 4-col desktop)   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {highlights.map((item, idx) => {
            const config = HIGHLIGHT_CONFIG[item.label] || {
              icon: Sparkles,
              tag: "Highlight",
              subtitle: "Verified institution metric",
              colorClass: "from-emerald-500/10 to-teal-500/5 text-emerald-600 border-emerald-200/70",
              iconBg: "bg-[#59c28a]/10 text-[#1e7e4d]",
              badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/60"
            };

            const IconComponent = config.icon;

            return (
              <div
                key={idx}
                className={`relative p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#59c28a]/70 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                  config.featured ? 'ring-1 ring-[#59c28a]/30' : ''
                }`}
              >
                {/* Subtle top card accent glow on hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#59c28a]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Card Header: Icon + Micro Pill Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-11 h-11 rounded-2xl ${config.iconBg} border border-black/5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shrink-0`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${config.badgeBg}`}>
                      {config.tag}
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
                    {config.subtitle}
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
