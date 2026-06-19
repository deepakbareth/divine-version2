import React, { useRef, useEffect, useState } from 'react';
import ExpertCard from './ExpertCard';

const ExpertsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const expertsData = [
    { id: 1, name: "Priya Jain", experience: 4, counsellingCount: 5000, image: "https://media.licdn.com/dms/image/v2/D4D03AQGVfTHte74UGw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696679089082?e=2147483647&v=beta&t=8diOwMU944iPrmZdnYuZtr_BPC3pRVfLLvjtRCxKm00", tag: null },
    { id: 2, name: "Puja Bora", experience: 7, counsellingCount: 5200, image: "https://media.licdn.com/dms/image/v2/D4D03AQFBfqygX77XkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710763785123?e=2147483647&v=beta&t=3EwsBUu8ZtdKXtIuIhX3MgvvzdAvmNTqwy-xX2vKTi4", tag: "BOS" },
    { id: 3, name: "Sahil Arora", experience: 5, counsellingCount: 3000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-wC6k1t9ZFSDaeIMgUBjHbejkCfbJ3NOYQ&s", tag: null },
    { id: 4, name: "Ankur Pathak", experience: 8, counsellingCount: 5100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqpropG11hmdT7oKzrFps1c1dYO_l4QuF9tQ&s", tag: null },
  ];

  // Infinite data duplication for seamless loop
  const infiniteExperts = Array(12).fill(expertsData).flat().map((item, index) => ({
    ...item,
    uniqueId: index
  }));

  useEffect(() => {
    if (scrollRef.current) {
      // Start in the middle of the generated list
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
    }
  }, []);

  // --- Auto-Slide Logic (Every 2 Seconds) ---
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        // card width (310) + margin (24) = 334px
        const cardWidth = 334; 
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });

        // Reset to middle if reaching the end of the cloned items
        if (scrollLeft + clientWidth >= scrollWidth - cardWidth) {
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.style.scrollBehavior = 'auto';
              scrollRef.current.scrollLeft = scrollWidth / 3;
              scrollRef.current.style.scrollBehavior = 'smooth';
            }
          }, 600); 
        }
      }
    }, 1500); 

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      className="w-full py-16 px-4 md:px-12 lg:px-20 font-sans overflow-hidden bg-[#222222]"
      style={{
        background: 'radial-gradient(circle at 95% 10%, #3d1a3d 0%, #222222 65%)'
      }}
    >
      <div className="flex flex-col items-center">
        {/* Top Header Badge */}
        <div className="bg-[#B71C1C] text-white px-8 py-2 rounded-full font-bold shadow-lg mb-6 text-sm">
          Career Experts
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl text-white font-medium mb-10 text-center leading-tight">
          Meet Your <span className="text-[#E53935] font-bold">"Sathi"</span> – Partners in <br /> Your Journey
        </h2>

        {/* Slidable Area */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex w-full overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing py-10 snap-x snap-mandatory"
        >
          {infiniteExperts.map((expert) => (
            <ExpertCard key={expert.uniqueId} expert={expert} />
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ExpertsSection;