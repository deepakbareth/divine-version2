import React from 'react';
import { MousePointer2, Check, Square } from 'lucide-react';

const CompareCTA = () => {
  // Simulating the selected universities (index 2 and 3)
  const selectedUnis = [2, 3]; 

  const miniLogos = [
    { name: "Online Manipal", src: "https://logo.clearbit.com/onlinemanipal.com" },
    { name: "Sharda Online", src: "https://logo.clearbit.com/sharda.ac.in" },
    { name: "NMIMS", src: "https://logo.clearbit.com/nmims.edu" },
    { name: "Amity University", src: "https://logo.clearbit.com/amity.edu" },
    { name: "CU Online", src: "https://logo.clearbit.com/cuchd.in" },
    { name: "DY Patil", src: "https://logo.clearbit.com/dpu.edu.in" }
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-16 md:py-24 font-sans flex items-center">
      
      {/* --- Background Split (White Top, Red Bottom/Diagonal) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-end">
        {/* Slanted red background extending to the right */}
        <div className="absolute top-[40%] lg:top-[35%] -left-[10%] w-[120%] h-[150%] bg-[#D32F2F] -rotate-3 transform origin-center"></div>
        {/* Sweeping curve on the far left */}
        <div className="absolute top-[20%] -left-[15%] w-[40%] h-[100%] bg-[#E53935] rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-center">
        
        {/* --- Left Side: White Floating Card --- */}
        <div className="w-full lg:w-[45%] bg-white rounded-3xl p-8 md:p-14 lg:pr-24 shadow-[0_15px_40px_rgba(0,0,0,0.12)] z-9 relative lg:left-12 mb-10 lg:mb-0">
          
          <h2 className="text-4xl md:text-[46px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-8">
            Not Sure What <br />
            to Choose?
          </h2>
          
          <button className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white text-base md:text-lg font-bold px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(211,47,47,0.3)] hover:shadow-[0_12px_25px_rgba(211,47,47,0.5)] hover:-translate-y-1 transition-all duration-300">
            Compare with ClikPick
          </button>
          
        </div>

        {/* --- Right Side: Sleek CSS Laptop Mockup --- */}
        <div className="w-full lg:w-[65%] z-10 relative lg:-ml-12 perspective-1000">
          
          <div className="relative mx-auto w-full max-w-[850px]">
            
            {/* Laptop Screen Frame (Realistic MacBook Black Glass) */}
            <div className="relative bg-black rounded-t-xl md:rounded-t-2xl p-1.5 md:p-2.5 pb-1 border-t border-l border-r border-gray-500/50 shadow-2xl z-10">
              
              {/* Camera Dot */}
              <div className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full border border-gray-800"></div>
              
              {/* --- The Screen Content Area --- */}
              <div className="bg-gradient-to-br from-[#FFF2F2] via-[#FFF8F8] to-[#FFEBEB] rounded-t-md md:rounded-t-lg overflow-hidden aspect-[16/10] relative select-none">
                
                {/* --- Background Floating White Cards (Left Side) --- */}
                <div className="absolute left-[-5%] md:left-[2%] top-1/2 -translate-y-1/2 flex items-center z-10 pointer-events-none">
                  
                  {/* Left Logo (Amity) */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 w-24 md:w-32 opacity-60 scale-90 translate-x-10">
                    {/* <img src="https://logo.clearbit.com/amity.edu" className="h-8 md:h-12 w-full object-contain" alt="bg-logo" /> */}
                  </div>
                  
                  {/* Center Logo (NMIMS) */}
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 w-28 md:w-36 z-10">
                    {/* <img src="https://logo.clearbit.com/nmims.edu" className="h-10 md:h-14 w-full object-contain" alt="bg-logo" /> */}
                  </div>
                  
                  {/* Right Logo (Manipal) */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 w-24 md:w-32 opacity-60 scale-90 -translate-x-10">
                    {/* <img src="https://logo.clearbit.com/onlinemanipal.com" className="h-8 md:h-12 w-full object-contain" alt="bg-logo" /> */}
                  </div>

                </div>

                {/* Soft White Gradient over the left side to blend it */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-white/80 pointer-events-none z-10"></div>

                {/* --- The Main Compare UI Glass Panel --- */}
                <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-[55%] max-w-[340px] bg-white rounded-2xl shadow-[0_15px_40px_rgba(211,47,47,0.1)] p-4 md:p-6 flex flex-col border border-white z-20">
                  
                  <h4 className="text-center text-[10px] md:text-xs font-extrabold text-gray-800 mb-4 tracking-wide">
                    Compare the best online universities!
                  </h4>

                  {/* 2x3 Grid of Universities */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1 mb-5">
                    {miniLogos.map((logo, index) => {
                      const isSelected = selectedUnis.includes(index);
                      return (
                        <div 
                          key={index}
                          className={`relative rounded-lg border bg-white flex items-center justify-center p-3 h-14 md:h-16 transition-colors cursor-pointer ${
                            isSelected ? 'border-red-500 shadow-[0_2px_10px_rgba(239,68,68,0.15)]' : 'border-gray-100 shadow-sm'
                          }`}
                        >
                          {/* Checkbox */}
                          {isSelected ? (
                            <div className="absolute top-1.5 right-1.5 bg-black w-3.5 h-3.5 rounded-[3px] flex items-center justify-center">
                              <Check size={10} className="text-white" strokeWidth={4} />
                            </div>
                          ) : (
                            <Square className="absolute top-1.5 right-1.5 text-gray-200 w-3.5 h-3.5" />
                          )}
                          
                          {/* Logo Image
                          <img src={logo.src} alt={logo.name} className="max-h-full max-w-full object-contain p-1" /> */}
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="flex gap-3 w-full">
                    <button className="flex-1 bg-[#333333] text-white text-[10px] md:text-xs font-bold py-2.5 md:py-3 rounded-lg hover:bg-black transition-colors shadow-md">
                      Back
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-[#E53935] to-[#D32F2F] text-white text-[10px] md:text-xs font-bold py-2.5 md:py-3 rounded-lg hover:shadow-lg transition-all relative group">
                      Compare
                      
                      {/* Fake Mouse Cursor Hovering over Amity Card */}
                      <div className="absolute -top-16 -left-10 md:-top-20 md:-left-12 text-black drop-shadow-lg pointer-events-none z-30">
                        <MousePointer2 size={26} fill="black" className="md:w-8 md:h-8 -rotate-12" />
                      </div>
                    </button>
                  </div>

                </div>

              </div>
            </div>

            {/* Laptop Base (Sleek Silver Aluminum Look) */}
            <div className="relative z-20 w-[114%] -ml-[7%] h-3 md:h-4 bg-gradient-to-b from-[#EAEAEA] via-[#CCCCCC] to-[#A3A3A3] rounded-b-xl md:rounded-b-2xl border-t border-gray-300 shadow-2xl flex justify-center">
              {/* Trackpad Notch */}
              <div className="w-1/5 h-1 md:h-1.5 bg-[#B0B0B0] rounded-b-md shadow-inner"></div>
            </div>

            {/* Laptop Bottom Drop Shadow */}
            <div className="absolute -bottom-6 left-[5%] w-[90%] h-8 bg-black/40 blur-[20px] rounded-[100%] z-0"></div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CompareCTA;