import React, { useState, useEffect } from 'react';
import { Search, CheckCircle2, Circle, PhoneCall } from 'lucide-react';

const UniversitySearch = () => {
  // State to track which timeline feature is currently active
  const [activeIndex, setActiveIndex] = useState(2); // Starting at index 2 (Unbiased Selection)

  // The list of features in the timeline
const CircularLogos = [
  {
    id: 1,
    img: "https://www.collegesathi.com/images/homeimages/icons/unidesktoplogo.svg"
  },
  {
    id: 2,
    img: "https://www.collegesathi.com/images/homeimages/icons/unidesktoplogo2.svg"
  },
  {
    id: 3,
    img: "https://www.collegesathi.com/images/homeimages/icons/unidesktoplogo3.svg"
  },
  {
    id: 4,
    img: "https://www.collegesathi.com/images/homeimages/icons/lpudesktop.webp"
  }
];

  const features = [
    "1:1 Counselling",
    "Verified Universities",
    "Unbiased University Selection",
    "100% Admission Support",
    "Real-Time Notifications",
    "AI-Mode ClikPick"
  ];

  // Auto-cycle the active feature every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [features.length]);

  return (
    // Outer Deep Red Background Container
    <section className="relative w-full bg-[#B71C1C] pt-12 pb-32 px-4 md:px-8 lg:px-12 font-sans flex flex-col items-center">
      
      {/* Top Dark Pill Badge */}
      <div className="bg-gradient-to-b from-gray-800 to-black text-white text-xs md:text-xl font-bold px-6 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)] border border-gray-600 mb-6 z-10">
        University Highlights
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl text-white font-medium mb-8 text-center z-10">
        Search Best Online University Here
      </h2>

      {/* --- Main White Container (Search Area) --- */}
      {/* Note: I added a placeholder background color. Replace 'bg-gray-50' with 
          bg-[url('/images/your-building-bg.png')] when you have the sketch image */}
     <div className="w-full max-w-6xl rounded-[2rem] p-6 md:p-12 shadow-2xl relative overflow-hidden z-10 min-h-[300px] flex flex-col items-center justify-center">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://img.freepik.com/premium-vector/university-building-architecture-exterior-campus-college-academic-studying-knowledge_1162612-5091.jpg')"
    }}
  ></div>

  {/* Blur + Dull Overlay */}
  <div className="absolute inset-0 backdrop-blur-[3px] bg-white/70"></div>   
        {/* Faint Background Image Overlay goes here if needed */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('/images/building-sketch.png')"}}></div>

        {/* Search Bar */}
        <div className="relative w-full max-w-4xl z-20">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="NMIMS-CDOE" 
            className="w-full pl-12 pr-4 py-0 md:py-2 rounded-full border border-red-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700 text-lg"
          />
        </div>

        {/* Circular Logos Below Search */}
        <div className="flex items-center gap-4 md:gap-8 mt-8 z-20">
           {/* Placeholder circles - replace src with actual logo paths */}
           {CircularLogos.map((logo) => (
             <div key={logo.id} className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center p-2">
               <img src={logo.img} alt='Logo'/>
             </div>
           ))}
        </div>
      </div>

      {/* --- Auto-Cycling Timeline --- */}
      <div className="w-full max-w-7xl mx-auto mt-8 relative z-10">
        
        {/* Scrollable Container for Mobile */}
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar py-4 px-2 scroll-smooth">
         

           {/* Timeline Items */}
           {features.map((feature, index) => {
             const isActive = index === activeIndex;
             
             return (
               <div 
                 key={index}
                 onClick={() => setActiveIndex(index)} // Allows user to manually click one too!
                 className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-500 cursor-pointer border ${
                   isActive 
                    ? 'bg-gradient-to-b from-gray-700 to-black text-white border-black scale-105 shadow-lg' 
                    : 'bg-white text-gray-600 border-gray-300 shadow-sm hover:bg-gray-50'
                 }`}
               >
                 {isActive ? (
                   <CheckCircle2 size={18} className="text-white" />
                 ) : (
                   <Circle size={18} className="text-black" />
                 )}
                 <span className={`text-sm md:text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>
                   {feature}
                 </span>
               </div>
             );
           })}
        </div>
      </div>

      {/* --- Bottom Floating Call-to-Action Card --- */}
      {/* Positioned absolutely at the bottom so it overlaps the next section */}
      <div className="absolute -bottom-16 w-[90%] max-w-3xl bg-white rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100 z-30">
        
        {/* Left: Icon & Text */}
        <div className="flex items-center gap-4">
           {/* Placeholder for the boy illustration */}
           <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-2xl">
              🤔
           </div>
           <div>
             <h3 className="text-xl font-bold text-gray-900">Still Exploring?</h3>
             <p className="text-gray-500 text-sm">It's High Time!!</p>
           </div>
        </div>

        {/* Right: Button */}
        <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#E53935] text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-md">
           <PhoneCall size={18} />
           Schedule Your Call Now!
        </button>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </section>
  );
};

export default UniversitySearch;