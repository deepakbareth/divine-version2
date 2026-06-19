import React from 'react';
import MediaLeft from './MediaLeft';
import MediaRight from './MediaRight';
import AutoSlider from './MediaSlider';
import MediaSlider from './MediaSlider';

const MediaSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Yellow Header Label */}
        <div className="mb-12 inline-block">
          <div className="bg-[#FFE600] text-black font-bold px-6 py-3 text-xl rounded-sm shadow-[5px_5px_0px_0px_#FF0000] -rotate-1">
            Divine Featured in Media 📌
          </div>
        </div>

        {/* 2-Column Grid for Children */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <MediaLeft />
          <MediaRight />
        </div>
<MediaSlider />
      </div>
    </section>
  );
};

export default MediaSection;