import React from 'react';

const ExpertCard = ({ expert }) => {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[310px] bg-white rounded-3xl overflow-hidden shadow-2xl mx-3 snap-center transform transition-transform duration-300 hover:scale-105 hover:z-10 cursor-pointer">
      {/* Image Container with Hover Effect */}
      <div className="relative h-[280px] w-full bg-[#E8D9D9] overflow-hidden">
        <img 
          src={expert.image} 
          alt={expert.name} 
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
        />
        
        {/* Green Counselling Badge */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#D1F7C4] text-[#2F855A] text-[11px] font-bold px-4 py-1.5 rounded shadow-sm border border-white whitespace-nowrap z-20">
          {expert.counsellingCount}+ Counselling
        </div>
      </div>

      {/* Content Area */}
      <div className="pt-8 pb-6 px-4 text-center flex flex-col items-center">
        <h3 className="text-gray-900 font-bold text-xl mb-1">
          {expert.name}
        </h3>
        
        {/* Short Red Bar */}
        <div className="w-8 h-0.5 bg-[#E53935] mb-5"></div>

        <p className="text-gray-500 text-sm font-medium mb-3">
          {expert.experience}+ Years Of Experience
        </p>

        {/* Conditional "BOS" Badge from your localhost screenshot */}
        {expert.tag && (
          <div className="bg-[#FFEAEA] text-[#E53935] text-[10px] font-bold px-3 py-0.5 rounded shadow-sm">
            {expert.tag}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpertCard;