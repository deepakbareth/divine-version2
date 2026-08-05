import React from 'react';
import {
  Building2,
  Briefcase,
  TrendingUp,
  BarChart3,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  Users,
  DollarSign,
  Sparkles,
  Info
} from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

// Local company images from src/assets/universities/companies/
import accentureImg from '../../../assets/universities/companies/accenture.png';
import amazonImg from '../../../assets/universities/companies/amazon.png';
import cognizantImg from '../../../assets/universities/companies/cognizant.png';
import deloitteImg from '../../../assets/universities/companies/deloitte.png';
import hpImg from '../../../assets/universities/companies/hp.png';
import ibmImg from '../../../assets/universities/companies/ibm.png';
import iciciImg from '../../../assets/universities/companies/icici.png';
import infosysImg from '../../../assets/universities/companies/infosys.png';
import merceImg from '../../../assets/universities/companies/merce.png';
import microsoftImg from '../../../assets/universities/companies/microsoft.png';
import nestleImg from '../../../assets/universities/companies/nestle.png';
import niitImg from '../../../assets/universities/companies/niit.png';
import tcsImg from '../../../assets/universities/companies/tcs.png';
import wiproImg from '../../../assets/universities/companies/wipro.png';

// Mapping dictionary with custom scaling for equal visual optical balance
const COMPANY_CONFIG = {
  'microsoft': { img: microsoftImg, scale: 'scale-[1.85] sm:scale-[2]' },
  'niit': { img: niitImg, scale: 'scale-[1.45] sm:scale-[1.55]' },
  'accenture': { img: accentureImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'amazon': { img: amazonImg, scale: 'scale-[1.1] sm:scale-[1.2]' },
  'cognizant': { img: cognizantImg, scale: 'scale-[1.1] sm:scale-[1.2]' },
  'deloitte': { img: deloitteImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'hp': { img: hpImg, scale: 'scale-[1.1] sm:scale-[1.2]' },
  'ibm': { img: ibmImg, scale: 'scale-[1.1] sm:scale-[1.2]' },
  'icici': { img: iciciImg, scale: 'scale-[1.2] sm:scale-[1.3]' },
  'icici bank': { img: iciciImg, scale: 'scale-[1.2] sm:scale-[1.3]' },
  'infosys': { img: infosysImg, scale: 'scale-[1.1] sm:scale-[1.2]' },
  'mercedes': { img: merceImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'mercedes-benz': { img: merceImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'merce': { img: merceImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'nestle': { img: nestleImg, scale: 'scale-[1.05] sm:scale-[1.15]' },
  'tcs': { img: tcsImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'tata': { img: tcsImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'wipro': { img: wiproImg, scale: 'scale-[1.1] sm:scale-[1.2]' }
};

// Helper function to get company image config
const getCompanyConfig = (name) => {
  const norm = (name || '').toLowerCase().trim();
  for (const [key, conf] of Object.entries(COMPANY_CONFIG)) {
    if (norm.includes(key)) {
      return conf;
    }
  }
  return null;
};

// Role Icon Resolver matching Divine brand palette
const getRoleIcon = (iconType) => {
  switch (iconType) {
    case 'briefcase':
      return {
        icon: Briefcase,
        bg: 'bg-[#59c28a]/10 text-[#1e7e4d] border-[#59c28a]/30'
      };
    case 'chart':
      return {
        icon: BarChart3,
        bg: 'bg-blue-500/10 text-blue-600 border-blue-200/60'
      };
    case 'trend':
      return {
        icon: TrendingUp,
        bg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200/60'
      };
    case 'rocket':
      return {
        icon: Rocket,
        bg: 'bg-indigo-500/10 text-indigo-600 border-indigo-200/60'
      };
    default:
      return {
        icon: Briefcase,
        bg: 'bg-[#59c28a]/10 text-[#1e7e4d] border-[#59c28a]/30'
      };
  }
};

const UniversityHiringPartners = ({ partners, universityName, placementData, onOpenForm }) => {
  if (!partners || partners.length === 0) return null;

  // Duplicate the list for seamless marquee scroll
  const marqueeList = [...partners, ...partners, ...partners];

  // Default salary insights fallback if university doesn't have custom data
  const salaryInsights = placementData?.salaryInsights || [
    {
      role: "Management Consultant",
      category: "Management",
      salary: "₹6 LPA – ₹8 LPA",
      yoy: "18% YoY",
      iconType: "briefcase"
    },
    {
      role: "Business Development Executive",
      category: "Sales & Strategy",
      salary: "₹3 LPA – ₹6 LPA",
      yoy: "26% YoY",
      iconType: "chart"
    },
    {
      role: "Financial Analyst",
      category: "Finance & Accounts",
      salary: "₹4.5 LPA – ₹8 LPA",
      yoy: "15% YoY",
      iconType: "trend"
    },
    {
      role: "Marketing Manager",
      category: "Digital & Brand",
      salary: "₹5 LPA – ₹10 LPA",
      yoy: "22% YoY",
      iconType: "rocket"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/70 to-slate-50 font-sans border-t border-slate-200/80 overflow-hidden relative">

      {/* Inline styles for smooth right-to-left marquee animation */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .hiring-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 65s linear infinite;
        }
        .hiring-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#59c28a]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#002147]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {/* ========================================================================= */}
        {/* 1. PLACEMENT & SALARY INSIGHTS GRID (Divine Navy & Emerald Theme)         */}
        {/* ========================================================================= */}
        <div className="space-y-6">

          {/* Header with Divine Brand Styling */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#59c28a]/10 border border-[#59c28a]/25 text-[#1e7e4d] text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#59c28a]" />
              <span>Placements & Careers</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-[#002147] tracking-tight">
              {placementData?.title ? (
                placementData.title
              ) : (
                <>
                  {universityName} Placement — <span className="text-[#2a925e]">Jobs, Salaries & Recruiters</span>
                </>
              )}
            </h2>
            <div className="w-20 h-1 bg-[#59c28a] rounded-full mt-3.5" />
          </div>

          {/* 2-Column Split: Deep Divine Navy Card + Right Job Roles List */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

            {/* LEFT: Premium Divine Navy Placement Highlights Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#021124] via-[#002147] to-[#041a33] text-white rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-white/10">

              {/* Ambient Divine Glow inside card */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#59c28a]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-5 sm:space-y-6">

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#59c28a] bg-[#59c28a]/10 px-2.5 py-1 rounded-full border border-[#59c28a]/20">
                    Corporate Connect
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold font-serif tracking-tight text-white mt-2">
                    Placement Highlights
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 font-light leading-relaxed">
                    Direct corporate access with high ROI career acceleration for working professionals and freshers.
                  </p>
                </div>

                {/* 3 Stat Badges (Ultra-responsive on small screens) */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1 sm:py-2">

                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-center backdrop-blur-xs">
                    <p className="text-base sm:text-xl lg:text-2xl font-black text-[#59c28a] leading-tight">450+</p>
                    <span className="text-[9.5px] sm:text-[11px] text-slate-200 font-semibold mt-0.5 leading-tight">Hiring Partners</span>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-center backdrop-blur-xs">
                    <p className="text-base sm:text-xl lg:text-2xl font-black text-white leading-tight">1 Lac+</p>
                    <span className="text-[9.5px] sm:text-[11px] text-slate-200 font-semibold mt-0.5 leading-tight">Jobs Created</span>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-center backdrop-blur-xs">
                    <p className="text-base sm:text-xl lg:text-2xl font-black text-amber-300 leading-tight">100%</p>
                    <span className="text-[9.5px] sm:text-[11px] text-slate-200 font-semibold mt-0.5 leading-tight">Placement Support</span>
                  </div>

                </div>

              </div>

              {/* Action Buttons */}
              <div className="relative z-10 pt-5 sm:pt-6 space-y-2.5 sm:space-y-3">
                <button
                  type="button"
                  onClick={onOpenForm}
                  className="w-full py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-[#59c28a] hover:bg-[#46aa75] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer group active:scale-98"
                >
                  <span>Get Placement Guidance</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-slate-300/80 text-center">
                  <Info className="w-3.5 h-3.5 text-[#59c28a] shrink-0" />
                  <span>Salary figures verified from alumni surveys & hiring drives.</span>
                </div>
              </div>

            </div>

            {/* RIGHT: High-Demand Job Roles & Average Salaries (Scrollable & Fully Responsive) */}
            <div className="lg:col-span-7 flex flex-col justify-between">

              {/* Header with responsive wrapping and indicator badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 pb-2 px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#59c28a] animate-pulse shrink-0" />
                  <span className="text-[11.5px] sm:text-xs font-bold uppercase tracking-wider text-[#002147]">
                    High-Demand Job Roles & Compensation
                  </span>
                </div>
                {salaryInsights.length > 4 && (
                  <span className="w-fit text-[10px] sm:text-[11px] font-medium text-slate-500 bg-slate-100/95 border border-slate-200/80 px-2.5 py-0.5 rounded-full">
                    Scroll for more ({salaryInsights.length} Roles)
                  </span>
                )}
              </div>

              {/* Scrollable Role Cards List (Smooth scroll chaining + bottom shadow padding) */}
              <div className="overflow-y-auto custom-scrollbar px-1 pt-1 pb-4 pr-1.5 sm:pr-2 space-y-2.5 sm:space-y-3 max-h-[330px] sm:max-h-[385px] lg:max-h-[360px] scroll-smooth">
                {salaryInsights.map((roleItem, idx) => {
                  const iconMeta = getRoleIcon(roleItem.iconType);
                  const IconComponent = iconMeta.icon;

                  return (
                    <div
                      key={idx}
                      className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/85 shadow-xs hover:shadow-md hover:border-[#59c28a]/60 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-3 sm:gap-4 group"
                    >
                      {/* Left: Icon + Role info */}
                      <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                        <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl ${iconMeta.bg} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>

                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-base font-bold text-slate-900 truncate">
                            {roleItem.role}
                          </h4>
                          <p className="text-[10px] sm:text-xs text-slate-500 font-light mt-0.5">
                            Annual Average Salary
                          </p>
                        </div>
                      </div>

                      {/* Right: Salary figure + YoY growth badge */}
                      <div className="text-right shrink-0">
                        <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-[#59c28a]/10 text-[#1e7e4d] border border-[#59c28a]/25 text-[9.5px] sm:text-[10.5px] font-extrabold mb-0.5">
                          {roleItem.yoy}
                        </span>
                        <p className="text-xs sm:text-base font-black text-[#002147]">
                          {roleItem.salary}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>


        {/* ========================================================================= */}
        {/* 2. RECRUITER BRAND LOGOS MARQUEE                                         */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-slate-200/80 space-y-6">

          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#002147]">
              Top Multinational Corporations & Hiring Partners
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-light mt-1">
              Graduates from {universityName} are hired across Fortune 500 enterprises and market leaders.
            </p>
          </div>

          {/* Marquee Track */}
          <div className="relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="hiring-marquee-track gap-5 sm:gap-6 items-center cursor-grab active:cursor-grabbing">
              {marqueeList.map((partner, idx) => {
                const config = getCompanyConfig(partner);

                return (
                  <div
                    key={idx}
                    className="w-[180px] sm:w-[205px] h-[90px] sm:h-[100px] px-5 py-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_3px_14px_-2px_rgba(0,0,0,0.05)] hover:border-[#59c28a]/70 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-center group shrink-0 select-none overflow-hidden"
                  >
                    {config ? (
                      <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        <img
                          src={config.img}
                          alt={partner}
                          className={`max-h-12 sm:max-h-14 max-w-[140px] sm:max-w-[155px] object-contain transition-transform duration-300 ${config.scale}`}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#2d8f5e] group-hover:bg-[#59c28a] group-hover:text-slate-950 flex items-center justify-center transition-colors">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-slate-800 text-xs font-sans truncate max-w-[150px]">
                          {partner}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default UniversityHiringPartners;
