import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-between h-full shadow-lg relative mt-4 md:mt-0">
      
      {/* Dynamic Badge (Only shows if course.badge exists) */}
      {course.badge && (
        <span className="absolute -top-3 bg-[#66BB6A] text-white text-[9px] font-bold px-3 py-1 rounded-sm tracking-wider uppercase shadow-sm">
          {course.badge}
        </span>
      )}

      {/* Course Icon/Image */}
      <div className="mt-4 mb-4 h-12 flex items-center justify-center">
        {/* Note: I am using an emoji here to simulate your colorful graphics. 
            You can replace this <span> with an <img src={course.image} /> */}
        <span className="text-4xl">{course.icon}</span>
      </div>

      {/* Course Title */}
      <h3 className="text-gray-800 font-bold text-[13px] md:text-sm text-center mb-5 leading-tight flex-1">
        {course.title}
      </h3>

      {/* View Details Button */}
      <button className="w-full bg-[#E53935] text-white py-2 rounded-xl text-xs font-bold hover:bg-red-700 transition-colors shadow-md">
        View Details
      </button>
    </div>
  );
};

export default CourseCard;