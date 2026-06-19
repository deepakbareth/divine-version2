import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import InsightCard from './InsightCard';

import 'swiper/css';
import 'swiper/css/navigation';

const InsightSection = () => {
  const insights = [
    { id: 1, title: "HIDDEN costs of Online Courses no one tells you about!", img: "https://www.shutterstock.com/image-photo/portrait-teacher-coach-online-conference-260nw-2280743053.jpg" },
    { id: 2, title: "Top 7 reasons why Online Education is a smart choice", img: "https://www.shutterstock.com/image-photo/asian-muslim-woman-talking-camera-260nw-2665261315.jpg" },
    { id: 3, title: "Are Online Degrees accepted for government and private jobs?", img: "https://www.shutterstock.com/image-photo/cute-little-girl-talking-on-260nw-2598480139.jpg" },
    { id: 4, title: "How to avail Scholarships and Discounts for Online Courses?", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QjxTMdnBNM3LYEivL1sU7dtY5DTtkr1KXw&s" },
    { id: 5, title: "Is online education right for your career?", img: "https://www.shutterstock.com/image-photo/portrait-teacher-coach-online-conference-260nw-2280743053.jpg" }, 
  ];

  return (
    <section className="relative bg-white pt-16 pb-24 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-100/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6">
        
        {/* Header Area */}
        <div className="text-center mb-12">
          {/* 3D Expert Insights Badge */}
          <div className="inline-block bg-gradient-to-b from-gray-700 to-[#1a1a1a] text-white text-[13px] px-8 py-2.5 rounded-full font-medium tracking-wide shadow-[0_8px_15px_rgba(0,0,0,0.3)] mb-6 border border-gray-600/50">
            Expert Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#333333] tracking-tight">
            Quick Tips before You take <br />
            <span className="text-[#c1121f] mt-2 block">Online Admission</span>
          </h2>
        </div>

        {/* Carousel Wrapper - REMOVED 'group' CLASS HERE */}
        <div className="relative">
          
          {/* Floating Navigation Buttons */}
          <button className="custom-prev absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <button className="custom-next absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800} 
            autoplay={{
              delay: 2500, 
              disableOnInteraction: false, 
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }, 
            }}
            className="insight-swiper rounded-[2rem] px-2"
          >
            {insights.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`}>
                <InsightCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;