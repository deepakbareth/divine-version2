import React from 'react';

const MediaLeft = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-[#8B0000] border border-red-900 shadow-2xl">
      {/* Newspaper Badge */}
      <div className="absolute top-5 right-5 bg-white px-3 py-0 rounded-xl shadow-md">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7OMXU8Oeih7cOb-NWKKCVJ30IR0PtPGoiA&s" 
          alt="Hindustan Times" 
          className=" w-20 h-6 object-contain" 
        />
      </div>

      <div className="p-8 text-center">
        <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase leading-none">
          ClikPick
        </h2>
        <p className="text-[10px] text-white/70 tracking-[0.3em] uppercase font-bold mt-1">
          Powered by Divine
        </p>

        {/* The main visual area for team/app mockup */}
        <div className="mt-10 rounded-xl overflow-hidden border border-white/10 shadow-lg">
          <img 
            src="https://thedivineinstitute.com/img/gallery/10.jpg" 
            alt="Media Feature" 
            className="w-full h-100  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaLeft;