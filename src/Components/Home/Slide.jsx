import React from 'react';

const Slide = ({ slide, isActive }) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        {/* Dark Gradient Overlay - Text Visibility ke liye sabse zaroori */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/85 rounded-[1.5rem] md:rounded-[2rem]"></div>
      </div>

      {/* --- Layout 1: Admissions & Online Courses --- */}
      {slide.layoutType === 'layout1' && (
        <div className="relative h-full w-full flex flex-col justify-center px-5 sm:px-10 md:px-20">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight whitespace-pre-line drop-shadow-lg">
            {slide.title}
          </h1>
          {/* Added line-clamp and max-width for mobile to prevent overflow */}
          <p className="text-gray-200 mt-2  max-w-[260px] sm:max-w-md md:max-w-lg text-xs sm:text-base md:text-lg whitespace-pre-line drop-shadow-md line-clamp-3 sm:line-clamp-none">
            {slide.subtitle}
          </p>
          <div className="mt-4 sm:mt-8">
            <button className="bg-[#B71C1C] cursor-pointer text-white px-5 py-2 sm:px-10 sm:py-3 rounded-lg sm:rounded-full font-bold text-xs sm:text-lg hover:bg-red-800 transition-colors shadow-xl border border-red-500/30">
              {slide.buttonText}
            </button>
          </div>
        </div>
      )}

      {/* --- Layout 2: Distance Education --- */}
      {slide.layoutType === 'layout2' && (
        <div className="relative h-full w-full flex flex-col justify-between px-5 py-6 sm:px-12 sm:py-12 md:px-20 md:py-16">
          {/* Top Left Text */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium whitespace-pre-line drop-shadow-lg leading-snug">
            {slide.title}
          </h1>

          {/* Bottom Center Content */}
          <div className="flex flex-col items-center self-center text-center mt-auto w-full">
            <div className="bg-[#B71C1C] text-white px-3 py-1 sm:px-6 sm:py-1.5 text-[10px] sm:text-sm md:text-lg font-bold tracking-wider mb-1.5 sm:mb-2 rounded shadow-md">
              {slide.bottomTagline}
            </div>
            <h2 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl text-white font-black italic tracking-wide drop-shadow-xl mb-3 sm:mb-6">
              {slide.bottomTitle}
            </h2>
            <button className="bg-white cursor-pointer text-[#B71C1C] px-5 py-2 sm:px-12 sm:py-3 rounded-lg sm:rounded-full font-bold text-xs sm:text-lg hover:bg-gray-100 transition-colors shadow-xl">
              {slide.buttonText}
            </button>
          </div>
        </div>
      )}

      {/* --- Layout 3: Counselling Services --- */}
      {slide.layoutType === 'layout3' && (
        <div className="relative h-full w-full flex flex-col items-center justify-center sm:justify-between py-6 sm:py-12 px-3 sm:px-8 space-y-4 sm:space-y-0">
          {/* Top Center Title */}
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black text-center whitespace-pre-line leading-tight drop-shadow-xl">
            {slide.title}
          </h1>

          {/* Middle Side Texts - Changed to row on mobile so it doesn't take much vertical space */}
          <div className="w-full flex flex-row justify-center md:justify-between items-center px-1 sm:px-4 md:px-16 lg:px-24 flex-1 gap-2 sm:gap-6 md:gap-0">
            {/* Left Side */}
            <div className="text-center md:text-left bg-black/40 md:bg-transparent p-2 sm:p-4 md:p-0 rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none border border-white/10 md:border-transparent w-full md:w-auto">
              <h3 className="text-[11px] sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md">{slide.leftTitle}</h3>
              <p className="text-[10px] sm:text-xl md:text-2xl font-bold text-[#FF5252] drop-shadow-md">{slide.leftSubtitle}</p>
            </div>
            {/* Right Side */}
            <div className="text-center md:text-right bg-black/40 md:bg-transparent p-2 sm:p-4 md:p-0 rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none border border-white/10 md:border-transparent w-full md:w-auto">
              <h3 className="text-[11px] sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md">{slide.rightTitle}</h3>
              <p className="text-[10px] sm:text-xl md:text-2xl font-bold text-[#FF5252] whitespace-pre-line drop-shadow-md">{slide.rightSubtitle}</p>
            </div>
          </div>

          {/* Bottom Black Button */}
          <div>
            <button className="bg-black cursor-pointer text-white px-6 py-2 sm:px-14 sm:py-3 rounded-lg sm:rounded-full font-bold text-xs sm:text-lg hover:bg-gray-800 transition-colors shadow-2xl border border-white/20">
              {slide.buttonText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;