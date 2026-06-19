import React from 'react';
// import { Linkedin } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-[280px] mx-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
      
      {/* Top: Profile Info */}
      <div>
        <div className="flex items-center gap-4 mb-5">
          <img 
            src={testimonial.userImage} 
            alt={testimonial.userName} 
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border border-gray-200"
          />
          <div>
            <h4 className="font-bold text-gray-900 text-base leading-tight">
              {testimonial.userName}
            </h4>
            <p className="text-gray-500 text-[11px] md:text-xs font-medium mt-0.5">
              {testimonial.designation}
            </p>
          </div>
        </div>

        {/* Middle: Review Text */}
        <p className="text-gray-600 text-sm leading-relaxed font-medium">
          {testimonial.feedback}
        </p>
      </div>

   
    </div>
  );
};

export default TestimonialCard;