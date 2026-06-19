import React from 'react';

const InsightCard = ({ data }) => {
  return (
    <div className="group relative aspect-[3/4.4] rounded-[1.8rem] overflow-hidden cursor-pointer shadow-md border border-zinc-200 bg-zinc-100">
      
      {/* Image with Smooth Zoom */}
      <img 
        src={data.img} 
        alt={data.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
      />

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg">
           <div className="w-0 h-0 border-t-[9px] border-t-transparent border-l-[16px] border-l-white border-b-[9px] border-b-transparent ml-1"></div>
        </div>
      </div>

      {/* Deep Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent z-0"></div>

      {/* Text Overlay */}
      <div className="absolute bottom-0 p-6 w-full z-20">
        <h3 className="text-white text-[14.5px] leading-[1.5] font-medium transition-all group-hover:text-red-400">
          {data.title}
        </h3>
      </div>
    </div>
  );
};

export default InsightCard;