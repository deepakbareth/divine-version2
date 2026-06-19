import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BenefitItem from './BenefitItem';

const BenefitsSection = () => {
  const coreData = [
    { id: 1, title: "Capstone Projects &\nSimulations", icon: "🗂️" },
    { id: 2, title: "Campus Visit – Feel the\nProgram", icon: "🏫" },
    { id: 3, title: "Scholarships & Easy EMI\nOptions", icon: "🎓" },
    { id: 4, title: "Career Services – from\nResume to Offer", icon: "💻" },
    { id: 5, title: "Salary, Promotions, Role\nChange", icon: "📈" },
    { id: 6, title: "Placement Opportunities", icon: "💼" },
  ];

  // Create the infinite array loop
  const infiniteData = Array(10).fill(coreData).flat().map((item, index) => ({
    ...item,
    uniqueKey: index
  }));

  const sliderRef = useRef(null);

  // Start in the middle of the array
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 2;
    }
  }, []);

  // Snap back to middle if reaching the edges
  const handleScroll = (e) => {
    const slider = e.target;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft < 200) {
      slider.scrollLeft = slider.scrollWidth / 2;
    } else if (slider.scrollLeft > maxScroll - 200) {
      slider.scrollLeft = slider.scrollWidth / 2 - slider.clientWidth;
    }
  };

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 px-4 flex flex-col items-center bg-white font-sans relative">
      
      {/* Top Red Badge */}
      <div className="bg-gradient-to-b from-[#D32F2F] to-[#B71C1C] text-white px-8 py-2.5 rounded-full font-bold shadow-xl border border-red-500/20 mb-6 z-10">
        Why Online?
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-medium text-[#212121] mb-12 text-center tracking-tight">
        Benefits of Online Learning
      </h2>

      {/* Slider Container Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center group">
        
        {/* Left Arrow (ADDED 'hidden md:flex') */}
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-4 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-md hover:bg-gray-50 hover:shadow-lg transition-all text-gray-600 focus:outline-none"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Area (CHANGED 'px-12' to 'px-4 md:px-12') */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex items-start gap-4 md:gap-10 overflow-x-auto hide-scrollbar w-full px-4 md:px-12 snap-x snap-mandatory py-4"
        >
          {infiniteData.map((benefit) => (
            <BenefitItem key={benefit.uniqueKey} benefit={benefit} />
          ))}
        </div>

        {/* Right Arrow (ADDED 'hidden md:flex') */}
        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-4 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-md hover:bg-gray-50 hover:shadow-lg transition-all text-gray-600 focus:outline-none"
        >
          <ChevronRight size={24} />
        </button>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </section>
  );
};

export default BenefitsSection;