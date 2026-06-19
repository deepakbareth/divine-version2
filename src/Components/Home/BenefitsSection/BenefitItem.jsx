import React from 'react';

const BenefitItem = ({ benefit }) => {
  return (
    // 'flex-shrink-0' ensures the items don't squash together in the slider
    // 'w-36 md:w-48' gives them a fixed width so the text wraps nicely like the screenshot
    <div className="flex flex-col items-center justify-start text-center w-36 md:w-48 flex-shrink-0 snap-center">
      
      {/* Icon Container */}
      <div className="h-20 mb-3 flex items-center justify-center drop-shadow-md transition-transform hover:scale-110">
        {/* Note: Using emojis as placeholders for your 3D graphics. 
            Replace <span className="text-5xl">...</span> with <img src={benefit.image} className="h-full object-contain" /> when you have the assets */}
        <span className="text-5xl">{benefit.icon}</span>
      </div>

      {/* Text Label */}
      <h4 className="text-[#333333] text-[13px] md:text-[15px] font-medium leading-snug px-2 whitespace-pre-line">
        {benefit.title}
      </h4>
      
    </div>
  );
};

export default BenefitItem;