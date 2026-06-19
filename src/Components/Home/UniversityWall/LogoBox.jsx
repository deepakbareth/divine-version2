import React from 'react';

const LogoBox = ({ logo }) => {
  return (
    <div className={`
        bg-white flex items-center justify-center p-3 rounded-2xl border border-gray-100
        /* The Magic Hover Classes */
        transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] cursor-pointer
        hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_rgba(211,47,47,0.15)] hover:border-red-100 
        /* z-index management so the lifted box overlaps its neighbors cleanly */
        z-0 hover:z-20 relative
        /* Applies the massive spans from your array */
        ${logo.spanClass || ""}
      `}>
      <img
        src={logo.src}
        alt={logo.name}
        className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
        onError={(e) => {
          // Fallback if logo fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      {/* Fallback Text */}
      <span className="hidden text-center text-[10px] md:text-xs font-bold text-gray-500">
        {logo.name}
      </span>
    </div>
  );
};

export default LogoBox;