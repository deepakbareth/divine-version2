import React from 'react';

const SectionHeader = ({ badgeText, title, titleHighlight, description, centered = true }) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {badgeText && (
        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
          <span className="text-[#59c28a] mr-1.5">✦</span>{badgeText}
        </div>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif leading-tight">
          {title}{' '}
          {titleHighlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59c28a] to-[#92e0b3]">
              {titleHighlight}
            </span>
          )}
        </h2>
      )}
      {description && (
        <p className="text-slate-600 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed font-light mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
