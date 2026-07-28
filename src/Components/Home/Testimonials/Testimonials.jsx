import React from 'react';
import TestimonialCard from './TestimonialCard';

// Import local student profile images
import kc_jain from '../../../assets/testimonialimg/kc_jain.jpg';
import kuldeep from '../../../assets/testimonialimg/kuldeep.jpg';
import praveen from '../../../assets/testimonialimg/praveen.jpg';
import vinod from '../../../assets/testimonialimg/vinod.jpg';
import prakash from '../../../assets/testimonialimg/prakash.jpg';
import kailash from '../../../assets/testimonialimg/kailash.jpg';
import amit from '../../../assets/testimonialimg/amit.jpg';
import dangayach from '../../../assets/testimonialimg/dangayach.jpg';

const TestimonialsSection = () => {
  // Live testimonials scraped from the website
  const row1 = [
    { 
      id: 1, 
      userName: "K.C. Jain", 
      designation: "Manager, Bansal Enterprises", 
      feedback: "As a working professional, we have to juggle with family, work and other commitments. With less time to pursue higher studies, the online options provided by Divine institute proved to be a boon for me to up-skill myself.", 
      userImage: kc_jain 
    },
    { 
      id: 2, 
      userName: "Kuldeep Singh Shekhawat", 
      designation: "Executive Chef, Ecotel Hotel", 
      feedback: "With a full time job in hand, it was really tough for me to even think about higher education, let alone do the planning. Thanks to the call that I received from Divine institute which was so clear and concise that cleared all my doubts .", 
      userImage: kuldeep 
    },
    { 
      id: 3, 
      userName: "Praveen Sawant", 
      designation: "Sales Manager, Reliance", 
      feedback: "Divine Institute exceeded my expectations in every way. Their team was knowledgeable, supportive, and always went above and beyond to ensure that I was successful in pursuing the course and finish it in a timely manner.", 
      userImage: praveen 
    },
    { 
      id: 4, 
      userName: "Vinod Kumar Chouhan", 
      designation: "Territory Manager, SANOFI INDIA LTD", 
      feedback: "Divine Institute of Management studies, A Great education destination where students obtain quality education and opportunity. My Personal experience has been extremely good.They have given a solid shape to my career, great counseling and guidance,all support goes to divine Institute,& specially credit goes to Ms Neha Chauhan Mam. Thank you again for your hard work and dedication to our learning.", 
      userImage: vinod 
    }
  ];

  const row2 = [
    { 
      id: 5, 
      userName: "Prakash Yadav", 
      designation: "Executive Chef, Marriott int.", 
      feedback: "I am so impressed with the level of professionalism and expertise at Divine Institute. Their team is very reliable, friendly, and always willing to help their students succeed. I would recommend them to anyone looking for guidance.", 
      userImage: prakash 
    },
    { 
      id: 6, 
      userName: "Kailash Chand", 
      designation: "MD Rivo Mobile Technology", 
      feedback: "Thanks to Divine Institute, I was able to find a program that perfectly aligned with my academic and career goals. Their counselors are experts in their field and are always there to support their students every step of the way.", 
      userImage: kailash 
    },
    { 
      id: 7, 
      userName: "Amit Batra", 
      designation: "Senior Manager, Axis Bank", 
      feedback: "I would recommend Divine Institute to anyone looking for assistance with the college application process. Their team is very empathetic and understanding and always willing to go the extra mile to help their students succeed.", 
      userImage: amit 
    },
    { 
      id: 8, 
      userName: "Dangayach Group Of Hotels", 
      designation: "General Manager, Chomu Palace", 
      feedback: "I would recommend Divine Institute to anyone looking for assistance with the college application process. Their team is very empathetic and understanding and always willing to go the extra mile to help their students succeed.", 
      userImage: dangayach 
    }
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
        <h2 className="text-[60px] md:text-[90px] lg:text-[110px] font-black text-[#222222] text-center leading-[0.95] tracking-tighter font-serif">
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

      {/* --- Row 2: Moves Left to Right --- */}
      <div className="relative flex overflow-hidden mb-6 pause-on-hover">
        <div className="flex animate-scroll-right w-max p-7">
          {/* Tripling the array ensures it never runs out of cards before looping */}
          {[...row2, ...row2, ...row2].map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
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