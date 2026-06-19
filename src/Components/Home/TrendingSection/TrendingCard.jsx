import React from 'react';
import { Settings, Circle } from 'lucide-react'; 

const TrendingCard = ({ course }) => {
  return (
    <div className="flex flex-col bg-[#262626] rounded-xl overflow-hidden shadow-lg border border-gray-700/50 hover:-translate-y-1 hover:shadow-2xl hover:border-red-500/50 transition-all duration-300 group h-full z-10 relative">
      
      {/* Top Half: Taller Image Container */}
      <div className="relative h-[220px] w-full overflow-hidden bg-gray-800">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Trending Badge */}
        <span className="absolute top-4 right-4 bg-[#A5E095] text-green-900 text-xs font-bold px-3 py-1 rounded shadow-sm">
          Trending
        </span>
      </div>

      {/* Bottom Half: Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-xl mb-4 leading-tight">
          {course.title}
        </h3>

        {/* Bullet Points */}
        <div className="flex flex-col gap-3 mb-6 flex-1">
          <div className="flex items-start gap-2">
            <Settings size={14} className="text-gray-400 mt-1 flex-shrink-0" />
            <p className="text-gray-300 text-sm leading-snug">{course.point1}</p>
          </div>
          <div className="flex items-start gap-2">
            {/* Small green dot icon */}
            <Circle size={10} className="text-[#A5E095] fill-[#A5E095] mt-1.5 flex-shrink-0" />
            <p className="text-gray-300 text-sm leading-snug">{course.point2}</p>
          </div>
        </div>

        {/* Know More Button (Right Aligned, Outlined) */}
        <div className="mt-auto self-end">
          <button className="border border-gray-500 text-gray-300 text-[11px] font-semibold tracking-wider px-4 py-1.5 hover:bg-white hover:text-black transition-colors rounded-sm">
            KNOW MORE
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default TrendingCard;