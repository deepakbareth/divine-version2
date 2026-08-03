import React from 'react';

const FaqHero = () => {
  return (
    <div className="text-center mb-12 md:mb-16">
      {/* Official Website Badge */}
      <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
        <span className="text-[#59c28a] mr-1.5">✦</span> Help & Support Center
      </div>

      {/* Official Website Heading with Serif & Gradient Highlight */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif leading-tight">
        Frequently Asked{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59c28a] to-[#92e0b3]">
          Questions
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-slate-600 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed font-light mx-auto">
        Find authentic answers regarding UGC-DEB recognition, partner universities, flexible admissions, zero-cost EMI, and online examinations.
      </p>
    </div>
  );
};

export default FaqHero;
