import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  // Dummy data matching the video
  const row1 = [
    { id: 1, userName: "Varun Kumar", designation: "Deputy General Manager (DGM)", feedback: "I was confused about choosing the right online MBA university, but the Divine counsellor guided me clearly. The admission process was smooth and hassle-free.", userImage: "https://i.pravatar.cc/150?u=varun", companyLogo: "https://logo.clearbit.com/ntpc.co.in" },
    { id: 2, userName: "Deepanshu Gupta", designation: "Senior Associate - US Taxation", feedback: "What I liked about Divine is its honest approach. They understood my career goals and suggested options without pushing any university.", userImage: "https://i.pravatar.cc/150?u=deepanshu", companyLogo: "https://logo.clearbit.com/formidium.com" },
    { id: 3, userName: "Himanshu Singh", designation: "Senior Associate", feedback: "As a working professional, I needed flexibility and clarity. The team guided me toward a university that matched both my schedule and budget.", userImage: "https://i.pravatar.cc/150?u=himanshu", companyLogo: "" },
  ];

  const row2 = [
    { id: 4, userName: "Aditi Mahajan", designation: "General Manager", feedback: "They helped me understand the difference between various online universities and accreditation details in a simple way.", userImage: "https://i.pravatar.cc/150?u=aditi", companyLogo: "https://logo.clearbit.com/jpmorgan.com" },
    { id: 5, userName: "Aman Agrawal", designation: "Sales & Purchase Manager", feedback: "The guidance from Divine's counsellor felt genuine and personalized. They focused on what was right for me.", userImage: "https://i.pravatar.cc/150?u=aman", companyLogo: "https://logo.clearbit.com/tcs.com" },
    { id: 6, userName: "Sumit Heerani", designation: "Assistant Manager", feedback: "Their one-on-one counselling session really made a difference in my final decision. Highly recommended.", userImage: "https://i.pravatar.cc/150?u=sumit", companyLogo: "https://logo.clearbit.com/google.com" },
  ];

  return (
    // Soft pink/white gradient background
    <section className="w-full pt-20 pb-16 bg-gradient-to-b from-[#9dccb1] via-[#FFF5F5] to-white overflow-hidden font-sans">

      {/* --- Huge Header Section --- */}
      <div className="flex flex-col items-center mb-16 md:mb-24 px-4">
        {/* Dark Pill Badge */}
        <div className="bg-gradient-to-b from-gray-800 to-black text-white text-[10px] md:text-xs font-bold px-6 py-2 rounded-full mb-8 shadow-lg">
          Testimonials
        </div>

        {/* Massive Typography */}
        <h2 className="text-[60px] md:text-[90px] lg:text-[110px] font-black text-[#222222] text-center leading-[0.95] tracking-tighter">
          What <br /> Our Learners <br /> Say...
        </h2>
      </div>

      {/* --- Infinite Marquee CSS --- */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left { animation: scroll-left 40s linear infinite; }
          .animate-scroll-right { animation: scroll-right 40s linear infinite; }
          
          /* Pauses animation when user hovers over the row */
          .pause-on-hover:hover .animate-scroll-left,
          .pause-on-hover:hover .animate-scroll-right {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* --- Row 1: Moves Right to Left --- */}
      <div className="relative flex overflow-hidden mb-6 pause-on-hover">
        <div className="flex animate-scroll-left w-max p-7">
          {/* Tripling the array ensures it never runs out of cards before looping */}
          {[...row1, ...row1, ...row1].map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </div>
        {/* Soft edge fades */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FFF5F5] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FFF5F5] to-transparent z-10 pointer-events-none"></div>
      </div>


    </section>
  );
};

export default TestimonialsSection;