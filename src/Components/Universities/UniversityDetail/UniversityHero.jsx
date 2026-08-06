import React from 'react';
import { Building2, MapPin, Award, ShieldCheck, Calendar, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const UniversityHero = ({ university, onOpenForm }) => {
  const {
    name,
    logo,
    buildingImg,
    campusImg,
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
    tagline,
    shortName
  } = university;

  const bgImage = campusImg || buildingImg;

  return (
    <div className="min-h-0 sm:min-h-[520px] lg:min-h-[660px] bg-gradient-to-b from-[#021124] via-[#002147] to-[#04162c] text-white pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 lg:pb-16 relative overflow-hidden font-sans border-b border-white/10 flex items-center">

      {/* Background Campus Building Architecture Photo (Cinematic Overlay) */}
      {bgImage && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={bgImage}
            alt={name}
            className="w-full h-full object-cover object-center opacity-20 sm:opacity-25 scale-105 transform filter contrast-125 transition-transform duration-1000"
          />
        </div>
      )}

      {/* Background Ambient Glows & Grid Pattern */}
      {/* <div className="absolute top-0 right-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#59c28a]/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#0066b2]/20 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-300 mb-5 sm:mb-6 flex-wrap">
          <Link to="/divine/" className="hover:text-[#59c28a] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/divine/universities" className="hover:text-[#59c28a] transition-colors">Universities</Link>
          <span>/</span>
          <span className="text-[#59c28a] font-semibold">{shortName || name}</span>
        </nav>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Details */}
          <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-extrabold text-[10px] sm:text-[11px] tracking-wider uppercase border ${category === 'online'
                ? 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                : category === 'distance'
                  ? 'bg-purple-500/20 text-purple-300 border-purple-400/30'
                  : 'bg-amber-500/20 text-amber-300 border-amber-400/30'
                }`}>
                {mode || badge}
              </span>

              {nirfRank && (
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px] sm:text-[11px] flex items-center gap-1.5 border border-amber-400/30">
                  <Award className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span>{nirfRank}</span>
                </span>
              )}

              {naacGrade && (
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-slate-200 font-medium text-[10px] sm:text-[11px] flex items-center gap-1.5 border border-white/10">
                  <Award className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span>{naacGrade}</span>
                </span>
              )}

              {/* {rating && (
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-amber-300 font-bold text-[10px] sm:text-[11px] flex items-center gap-1.5 border border-white/10">
                  <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-300 text-amber-300" />
                  <span>{rating} / 5.0 {reviewsCount && `(${reviewsCount} Reviews)`}</span>
                </span>
              )} */}

              {establishedYear && (
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-slate-200 font-medium text-[10px] sm:text-[11px] flex items-center gap-1.5 border border-white/10">
                  <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-300" />
                  <span>Est. {establishedYear}</span>
                </span>
              )}
            </div>

            {/* University Title & Tagline */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif tracking-tight leading-tight text-white mb-1.5 break-words">
                {name}
              </h1>
              {tagline && (
                <p className="text-slate-100 text-xs sm:text-xl font-light italic">
                  "{tagline}"
                </p>
              )}
            </div>

            {/* Location & Counselor Guarantee */}
            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 sm:gap-x-6 text-xs sm:text-xl text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#59c28a]" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#59c28a]" />
                <span>Verified Counseling Partner</span>
              </div>
            </div>

            {/* Approvals Tags */}
            {approvals && approvals.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5">
                {approvals.map((app, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-slate-200 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-lg border border-white/15 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#59c28a]" />
                    <span>{app}</span>
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenForm}
                className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-[#59c28a] hover:bg-[#46aa75] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer flex items-center justify-center sm:justify-start gap-2"
              >
                <span>Inquire for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Logo Card */}
          {/* <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-slate-100 flex flex-col items-center justify-center text-center w-full max-w-[120px] sm:max-w-[210px] aspect-4/3 sm:aspect-square">
              <img
                src={logo}
                alt={name}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />

            </div>
          </div> */}
          {/*                                                                                               */}
        </div>

      </div>
    </div>
  );
};

export default UniversityHero;
