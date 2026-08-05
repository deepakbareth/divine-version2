import React from 'react';
import { Building2, MapPin, Award, ShieldCheck, Calendar, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const UniversityHero = ({ university, onOpenForm }) => {
  const {
    name,
    logo,
    category,
    badge,
    naacGrade,
    location,
    establishedYear,
    mode,
    approvals,
    nirfRank,
    rating,
    reviewsCount,
    tagline
  } = university;

  return (
    <div className="bg-[#002147] text-white pt-28 pb-14 sm:pb-16 relative overflow-hidden font-sans">
      {/* Background Accent Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#59c28a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0066b2]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6 flex-wrap">
          <Link to="/divine/" className="hover:text-[#59c28a] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/divine/universities" className="hover:text-[#59c28a] transition-colors">Universities</Link>
          <span>/</span>
          <span className="text-[#59c28a] font-semibold">{name}</span>
        </nav>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-5">
            
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`px-3 py-1 rounded-full font-extrabold text-[11px] tracking-wider uppercase border ${
                category === 'online'
                  ? 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                  : category === 'distance'
                  ? 'bg-purple-500/20 text-purple-300 border-purple-400/30'
                  : 'bg-amber-500/20 text-amber-300 border-amber-400/30'
              }`}>
                {mode || badge}
              </span>

              {nirfRank && (
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[11px] flex items-center gap-1.5 border border-amber-400/30">
                  <Award className="w-3.5 h-3.5" />
                  {nirfRank}
                </span>
              )}

              {naacGrade && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-[#59c28a] font-bold text-[11px] flex items-center gap-1.5 border border-emerald-400/30">
                  <Award className="w-3.5 h-3.5" />
                  {naacGrade}
                </span>
              )}

              {rating && (
                <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 font-bold text-[11px] flex items-center gap-1.5 border border-white/10">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  {rating} / 5.0 {reviewsCount && `(${reviewsCount} Reviews)`}
                </span>
              )}

              {establishedYear && (
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 font-medium text-[11px] flex items-center gap-1.5 border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-slate-300" />
                  Est. {establishedYear}
                </span>
              )}
            </div>

            {/* University Title & Tagline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight leading-tight text-white mb-2">
                {name}
              </h1>
              {tagline && (
                <p className="text-slate-300 text-sm sm:text-base font-light italic">
                  "{tagline}"
                </p>
              )}
            </div>

            {/* Location & Counselor Guarantee */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#59c28a]" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#59c28a]" />
                <span>Verified Counseling Partner</span>
              </div>
            </div>

            {/* Approvals Tags */}
            {approvals && approvals.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {approvals.map((app, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-slate-200 text-xs px-3 py-1 rounded-lg border border-white/15 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#59c28a]" />
                    {app}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenForm}
                className="py-3.5 px-7 rounded-xl bg-[#59c28a] hover:bg-[#46aa75] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer flex items-center gap-2"
              >
                <span>Inquire for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Logo Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 flex flex-col items-center justify-center text-center w-full max-w-xs">
              <div className="w-full h-32 bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center justify-center mb-4">
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
                  <Building2 className="w-10 h-10 text-slate-400" />
                </div>
              </div>

              <span className="text-[10px] font-bold tracking-widest text-[#002147] uppercase bg-slate-100 px-3 py-1 rounded-full mb-1">
                Official Admission Desk
              </span>
              <p className="text-slate-500 text-xs font-light mt-1">
                Divine Institute Jaipur
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default UniversityHero;
