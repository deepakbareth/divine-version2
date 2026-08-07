import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import admissionImg from '../../../assets/universities/contentimgs/admission.jpg';

const defaultAdmissionProcess = [
  {
    step: 1,
    title: "Select Your Program",
    description: "Explore accredited online degree options and choose the specialization that best aligns with your career goals."
  },
  {
    step: 2,
    title: "Complete Online Application",
    description: "Fill in your personal and academic details, upload required educational documents and valid ID proof."
  },
  {
    step: 3,
    title: "Pay Program Fees & 0% EMI",
    description: "Pay the application/semester fee securely through online net banking, cards, or choose zero-cost EMI plans."
  },
  {
    step: 4,
    title: "Enrollment & LMS Access",
    description: "Receive your official University Student PRN, enrollment letter, and 24/7 access to the online learning portal."
  }
];

const UniversityAdmissionSteps = ({ university, onStartAdmission }) => {
  const scrollRef = useRef(null);

  const universityName = university?.shortName || university?.name || "University";
  const fullName = university?.name || universityName;
  const rawSteps = university?.admissionProcess || defaultAdmissionProcess;
  const introText = university?.admissionIntro;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#020617] text-white font-sans relative overflow-hidden border-t border-slate-800/80">
      {/* Full Section Background Image with soft blur and deep black tint */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-[2px] scale-105 pointer-events-none"
        style={{ backgroundImage: `url(${admissionImg})` }}
      />
      {/* Deep black & dark vignette overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-black/80 to-[#020617]/95 pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Divine brand color theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#59c28a]/10 border border-[#59c28a]/30 text-[#59c28a] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Admission Guide 2026
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Key Insights You must know before choosing{' '}
              <span className="inline-block bg-[#59c28a] text-slate-950 px-3 sm:px-4 py-1 rounded-lg text-xl sm:text-2xl lg:text-3xl font-black mt-1 tracking-wide shadow-[0_4px_18px_rgba(89,194,138,0.35)]">
                {universityName} In 2026
              </span>
            </h2>

            <p className="text-slate-300 font-medium text-base sm:text-lg mt-3">
              {universityName} Admission Process 2026: Step-by-Step Guide
            </p>

            {introText && (
              <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed max-w-3xl mt-2 font-light">
                {introText}
              </p>
            )}
          </div>

          {/* Navigation arrow buttons for slider */}
          <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous step"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 hover:bg-[#59c28a] hover:border-[#59c28a] hover:text-slate-950 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next step"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 hover:bg-[#59c28a] hover:border-[#59c28a] hover:text-slate-950 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step Cards Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {rawSteps.map((item, idx) => {
            const stepNum = item.step || idx + 1;
            return (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 snap-start bg-[#101b2b]/90 backdrop-blur-md border border-slate-700/60 hover:border-[#59c28a]/60 hover:shadow-[0_10px_30px_rgba(89,194,138,0.2)] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  {/* Glowing 3D Emerald Ball Badge */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#7fe2ac] via-[#59c28a] to-[#207a4a] text-slate-950 font-black text-xl flex items-center justify-center border border-[#a3f3c7]/60 group-hover:scale-105 transition-transform duration-300">
                      {stepNum}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                      Step {stepNum} of {rawSteps.length}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 font-sans leading-snug group-hover:text-[#59c28a] transition-colors">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#59c28a]" />
                  <span>100% Digital & Paperless</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation CTA Bar with Brand Theme */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0d1827] via-[#102035] to-[#0d1827] border border-slate-700/70 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#59c28a]/10 border border-[#59c28a]/30 text-[#59c28a] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#59c28a]" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">
                Want personalized guidance for {fullName}?
              </h4>
              <p className="text-slate-300 text-xs font-light">
                Our expert academic counsellors at Divine Institute will assist you with eligibility verification, document check, and no-cost EMI.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onStartAdmission}
            className="py-3 px-6 rounded-xl bg-[#59c28a] hover:bg-[#46aa75] text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0  active:scale-95"
          >
            <span>Start Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default UniversityAdmissionSteps;
