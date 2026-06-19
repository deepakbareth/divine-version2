import React from 'react';
import LogoBox from './LogoBox';

const UniversityWall = () => {
  // Using Clearbit API to pull real logos. 
  // We use 'spanClass' to make the middle ones massive like in your screenshot.
const universities = [
  // --- Row 1 & 2 (Top Government & Tech) ---
  { id: 1, name: "IIT Madras", src: "https://www.google.com/s2/favicons?sz=128&domain=jainuniversity.ac.in" },
  { id: 2, name: "IIT Delhi", src: "https://www.google.com/s2/favicons?sz=128&domain=iitd.ac.in" },
  { id: 3, name: "IIT Bombay", src: "https://www.google.com/s2/favicons?sz=128&domain=iitb.ac.in" },
  { id: 4, name: "IIT Kanpur", src: "https://www.google.com/s2/favicons?sz=128&domain=jainuniversity.ac.in" },
  { id: 5, name: "IIM Ahmedabad", src: "https://www.google.com/s2/favicons?sz=128&domain=upes.ac.in" },
  { id: 6, name: "IIM Bangalore", src: "https://www.google.com/s2/favicons?sz=128&domain=iitd.ac.in" },
  { id: 7, name: "IISc Bangalore", src: "https://www.google.com/s2/favicons?sz=128&domain=iisc.ac.in" },
  { id: 8, name: "NIT Trichy", src: "https://www.google.com/s2/favicons?sz=128&domain=nitt.edu" },
  { id: 9, name: "BITS Pilani", src: "https://www.google.com/s2/favicons?sz=128&domain=bits-pilani.ac.in" },
  { id: 10, name: "VIT Vellore", src: "https://www.google.com/s2/favicons?sz=128&domain=vit.ac.in" },
  { id: 11, name: "SRM Institute", src: "https://www.google.com/s2/favicons?sz=128&domain=cuchd.in" },
  { id: 12, name: "Anna University", src: "https://www.google.com/s2/favicons?sz=128&domain=annauniv.edu" },

  // --- Center Highlighted Logos (Spanning) ---
  { 
    id: 13, 
    name: "JNU Delhi", 
    src: "https://cdn.brandfetch.io/idQU36VGHo/w/290/h/343/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B", 
    spanClass: "col-span-2 row-span-2 md:col-span-3 md:row-span-2 p-8" 
  },
  { 
    id: 14, 
    name: "DU (Delhi University)", 
    src: "https://www.ssbm.ch/wp-content/uploads/2015/09/SSBM-1000x350-1.png", 
    spanClass: "col-span-2 row-span-2 md:col-span-3 md:row-span-2 p-8" 
  },
  { 
    id: 15, 
    name: "Manipal (MAHE)", 
    src: "https://www.google.com/s2/favicons?sz=128&domain=manipal.edu", 
    spanClass: "col-span-2 row-span-1 md:col-span-2" 
  },
  { 
    id: 16, 
    name: "Amity University", 
    src: "https://www.google.com/s2/favicons?sz=128&domain=amity.edu", 
    spanClass: "col-span-2 row-span-1 md:col-span-2" 
  },

  // --- Row 3 & 4 (State & Private Leaders) ---
  { id: 17, name: "BHU Varanasi", src: "https://www.google.com/s2/favicons?sz=128&domain=cuchd.in" },
  { id: 18, name: "Thapar Institute", src: "https://www.google.com/s2/favicons?sz=128&domain=manipal.edu" },
  { id: 19, name: "LPU", src: "https://www.google.com/s2/favicons?sz=128&domain=lpu.in" },
  { id: 20, name: "Chandigarh Uni", src: "https://www.google.com/s2/favicons?sz=128&domain=cuchd.in" },
  { id: 21, name: "Shiv Nadar Uni", src: "https://www.google.com/s2/favicons?sz=128&domain=snu.edu.in" },
  { id: 22, name: "Symbiosis", src: "https://www.google.com/s2/favicons?sz=128&domain=siu.edu.in" },
  { id: 23, name: "UPES Dehradun", src: "https://www.google.com/s2/favicons?sz=128&domain=upes.ac.in" },
  { id: 24, name: "Jain University", src: "https://www.google.com/s2/favicons?sz=128&domain=jainuniversity.ac.in" },
  { id: 25, name: "NMIMS Mumbai", src: "https://www.google.com/s2/favicons?sz=128&domain=nmims.edu" },
  { id: 26, name: "Ashoka University", src: "https://www.google.com/s2/favicons?sz=128&domain=ashoka.edu.in" },
  { id: 27, name: "Nirma University", src: "https://www.google.com/s2/favicons?sz=128&domain=nirmauni.ac.in" },
  { id: 28, name: "Galgotias", src: "https://www.google.com/s2/favicons?sz=128&domain=galgotiasuniversity.edu.in" },
  { id: 29, name: "Bennett University", src: "https://www.google.com/s2/favicons?sz=128&domain=bennett.edu.in" },
  { id: 30, name: "O.P. Jindal", src: "https://www.google.com/s2/favicons?sz=128&domain=jgu.edu.in" },
  { id: 31, name: "Krea University", src: "https://www.google.com/s2/favicons?sz=128&domain=krea.edu.in" },
  { id: 32, name: "Plaksha", src: "https://www.google.com/s2/favicons?sz=128&domain=plaksha.edu.in" },
   { id: 33, name: "IIT Madras", src: "https://www.google.com/s2/favicons?sz=128&domain=iitm.ac.in" },
  { id: 34, name: "IIT Delhi", src: "https://www.google.com/s2/favicons?sz=128&domain=iitd.ac.in" },
  { id: 35, name: "IIT Bombay", src: "https://www.google.com/s2/favicons?sz=128&domain=iitb.ac.in" },
  { id: 36, name: "IIT Kanpur", src: "https://www.google.com/s2/favicons?sz=128&domain=iitk.ac.in" },
  { id: 37, name: "IIM Ahmedabad", src: "https://www.google.com/s2/favicons?sz=128&domain=iima.ac.in" },
  { id: 38, name: "IIM Bangalore", src: "https://www.google.com/s2/favicons?sz=128&domain=iimb.ac.in" },
];
  return (
    // Outer Background: A very soft red/pink exactly like the screenshot
    <section className="w-full pt-16 font-sans bg-[#FFF5F5] flex flex-col items-center overflow-hidden">
      
      {/* --- Top Header Section --- */}
      <div className="flex flex-col items-center mb-10 z-20 px-4">
        {/* Red Pill Badge */}
        <div className="bg-gradient-to-b from-[#D32F2F] to-[#B71C1C] text-white text-[11px] md:text-xl font-bold px-6 py-2 rounded-full shadow-lg mb-6">
          Online Universities
        </div>
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-medium text-gray-800 text-center leading-snug tracking-tight">
          Compare & Choose from the Best Verified <br className="hidden md:block" />
          <span className="text-[#D32F2F] font-bold">Online Universities!</span>
        </h2>
      </div>

      {/* --- Grid Wall Container --- */}
      {/* relative positioning is required here so the edge-fades stick to this box */}
      <div className="relative w-full max-w-[1800px] mx-auto px-2 md:px-8">
        
        {/* The Grid: 
            - grid-flow-row-dense allows small boxes to fill in the gaps around large boxes
            - auto-rows-[60px] forces a consistent height so row-span-2 perfectly doubles it 
        */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-4 grid-flow-row-dense auto-rows-[60px] md:auto-rows-[80px] pb-16">
          {universities.map((logo, index) => (
            <LogoBox key={index} logo={logo} />
          ))}
        </div>

        {/* --- The Magic Fade Effects (Overlays) --- */}
        {/* Left Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#FFF5F5] to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Fade */}
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#FFF5F5] to-transparent z-10 pointer-events-none"></div>
        
        {/* Bottom Fade (Stronger to blend into the next section) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-[#FFF5F5] via-[#FFF5F5]/80 to-transparent z-10 pointer-events-none"></div>

      </div>
    </section>
  );
};

export default UniversityWall;