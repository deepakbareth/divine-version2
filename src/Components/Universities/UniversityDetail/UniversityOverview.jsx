import React from 'react';
import { 
  Award, 
  Globe, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Laptop, 
  Star,
  Sparkles,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

const UniversityOverview = ({ university, onOpenForm }) => {
  const { 
    name, 
    shortName,
    aboutTitle, 
    description, 
    mode, 
    naacGrade, 
    location, 
    approvals, 
    establishedYear,
    rating,
    reviewsCount,
    nirfRank,
    logo
  } = university;

  // Metadata for statutory approvals with specific context
  const getApprovalMeta = (approvalName) => {
    const text = String(approvalName).toLowerCase();
    if (text.includes('ugc')) {
      return {
        title: 'UGC-DEB',
        fullTitle: 'UGC-DEB Entitled',
        desc: 'Recognized by UGC for offering 100% valid online degrees',
        color: 'from-blue-500/10 to-blue-600/5 text-blue-700 border-blue-200/80',
        badgeColor: 'bg-blue-600 text-white',
        icon: ShieldCheck
      };
    }
    if (text.includes('naac')) {
      return {
        title: naacGrade || 'NAAC A+',
        fullTitle: 'NAAC A+ Accredited',
        desc: 'Highest tier institutional quality accreditation by Govt of India',
        color: 'from-emerald-500/10 to-emerald-600/5 text-emerald-700 border-emerald-200/80',
        badgeColor: 'bg-emerald-600 text-white',
        icon: Award
      };
    }
    if (text.includes('aicte')) {
      return {
        title: 'AICTE',
        fullTitle: 'AICTE Approved',
        desc: 'Approved by All India Council for Technical & Management Programs',
        color: 'from-purple-500/10 to-purple-600/5 text-purple-700 border-purple-200/80',
        badgeColor: 'bg-purple-600 text-white',
        icon: Building2
      };
    }
    if (text.includes('wes')) {
      return {
        title: 'WES Recognized',
        fullTitle: 'WES (USA / Canada)',
        desc: 'Evaluated & accepted globally for higher education & PR/visa',
        color: 'from-cyan-500/10 to-cyan-600/5 text-cyan-700 border-cyan-200/80',
        badgeColor: 'bg-cyan-600 text-white',
        icon: Globe
      };
    }
    if (text.includes('qs')) {
      return {
        title: 'QS World Rated',
        fullTitle: 'QS Stars & Ranking',
        desc: 'Top ranked internationally for online learning excellence',
        color: 'from-amber-500/10 to-amber-600/5 text-amber-700 border-amber-200/80',
        badgeColor: 'bg-amber-600 text-white',
        icon: Star
      };
    }
    if (text.includes('nirf')) {
      return {
        title: nirfRank || 'NIRF Ranked',
        fullTitle: 'NIRF Top Ranking',
        desc: 'Ranked amongst Top Indian Universities by Ministry of Education',
        color: 'from-rose-500/10 to-rose-600/5 text-rose-700 border-rose-200/80',
        badgeColor: 'bg-rose-600 text-white',
        icon: Award
      };
    }
    return {
      title: approvalName,
      fullTitle: approvalName,
      desc: 'Statutory approval for academic standards and degree validity',
      color: 'from-slate-500/10 to-slate-600/5 text-slate-700 border-slate-200/80',
      badgeColor: 'bg-slate-700 text-white',
      icon: CheckCircle2
    };
  };

  const approvalList = approvals && approvals.length > 0
    ? approvals
    : ["UGC-DEB Entitled", "NAAC A+ Accredited", "AICTE Approved", "WES Recognized (Canada/USA)", "QS World Ranked", "NIRF Top 25 Ranked"];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/90 font-sans relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main 2-Column Institutional Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#002147] via-[#59c28a] to-[#002147]" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Side (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#59c28a]/10 border border-[#59c28a]/25 text-[#1e7e4d] text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#59c28a]" />
                <span>About Institution & Legacy</span>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-[#002147] tracking-tight leading-snug">
                  {aboutTitle ? (
                    aboutTitle
                  ) : (
                    <>
                      {name} — <span className="text-[#2a925e]">Excellence in Higher Education</span>
                    </>
                  )}
                </h2>
                <div className="w-20 h-1 bg-[#59c28a] rounded-full mt-3.5" />
              </div>

              {/* Description Paragraphs */}
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal text-justify">
                <p>
                  {description}
                </p>
              </div>

              {/* Key Fast Facts / Stats Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
                
                {establishedYear && (
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-semibold mb-1">
                      <Calendar className="w-3.5 h-3.5 text-[#59c28a]" />
                      <span>Established</span>
                    </div>
                    <p className="text-base sm:text-lg font-black text-[#002147]">{establishedYear}</p>
                    <span className="text-[10px] text-slate-400 font-medium">20+ Years Legacy</span>
                  </div>
                )}

                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-semibold mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-[#59c28a]" />
                    <span>Programs</span>
                  </div>
                  <p className="text-base sm:text-lg font-black text-[#002147]">80+ Courses</p>
                  <span className="text-[10px] text-slate-400 font-medium">UG, PG & Certifications</span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-semibold mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-[#59c28a]" />
                    <span>Placements</span>
                  </div>
                  <p className="text-base sm:text-lg font-black text-[#002147]">450+ Partners</p>
                  <span className="text-[10px] text-slate-400 font-medium">Top MNCs & Startups</span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-semibold mb-1">
                    <Laptop className="w-3.5 h-3.5 text-[#59c28a]" />
                    <span>Mode</span>
                  </div>
                  <p className="text-base sm:text-lg font-black text-[#002147]">100% Online</p>
                  <span className="text-[10px] text-slate-400 font-medium">Remote Proctored Exams</span>
                </div>

              </div>

            </div>

            {/* Right Trust & Guarantee Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#021124] via-[#002147] to-[#04162c] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-white/10">
                
                {/* Ambient glow inside card */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#59c28a]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  
                  {/* Top Badge & Logo */}
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#59c28a] bg-[#59c28a]/10 px-2.5 py-1 rounded-full border border-[#59c28a]/20">
                        Authorized Admissions
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1.5">Official Counseling Gateway</h3>
                    </div>

                    {logo && (
                      <div className="w-14 h-14 bg-white rounded-2xl p-1.5 shadow-lg flex items-center justify-center shrink-0">
                        <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
                      </div>
                    )}
                  </div>

                  {/* Trust Pillars */}
                  <div className="space-y-3 pt-1">
                    
                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[#59c28a] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-slate-100">100% Direct University Admission</h5>
                        <p className="text-[11px] text-slate-300">Enroll directly with official university registration & verified enrollment ID.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <ShieldCheck className="w-5 h-5 text-[#59c28a] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-slate-100">Govt. UGC-DEB Degree Equality</h5>
                        <p className="text-[11px] text-slate-300">Degree is 100% equivalent to on-campus degrees for UPSC, Govt. exams & MNCs.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <Star className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-slate-100">0% Interest Easy EMI Support</h5>
                        <p className="text-[11px] text-slate-300">Flexible no-cost EMI options starting as low as ₹4,500/month with zero hidden charges.</p>
                      </div>
                    </div>

                  </div>

                  {/* Quick Action Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={onOpenForm}
                      className="w-full py-3 px-5 rounded-xl bg-[#59c28a] hover:bg-[#46aa75] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg cursor-pointer flex items-center justify-center gap-2 group active:scale-98"
                    >
                      <span>Check Admission Eligibility</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Enhanced Statutory Approvals & Accreditations Section */}
        <div className="space-y-6 pt-4">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#002147] mb-1">
                <ShieldCheck className="w-4 h-4 text-[#59c28a]" />
                <span>Statutory Approvals & Accreditations</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#002147]">
                Government & Global Recognitions
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-500 max-w-md sm:text-right font-light">
              All degrees awarded by <span className="font-semibold text-slate-700">{shortName || name}</span> hold full statutory entitlement and are legally valid worldwide.
            </p>
          </div>

          {/* Rich 6-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {approvalList.map((app, idx) => {
              const meta = getApprovalMeta(app);
              const IconComp = meta.icon;

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl bg-gradient-to-b ${meta.color} border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div className="space-y-3">
                    
                    {/* Icon & Verified check */}
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
                        {meta.title}
                      </h4>
                      <p className="text-[11px] font-medium text-slate-600 mt-0.5 line-clamp-1">
                        {meta.fullTitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] text-slate-500 leading-normal font-light">
                      {meta.desc}
                    </p>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default UniversityOverview;
