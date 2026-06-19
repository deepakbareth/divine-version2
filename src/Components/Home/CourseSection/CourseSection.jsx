import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import CourseCard from './CourseCard';

const CourseSection = () => {
  // 1. State for the Active Tab
  const [activeTab, setActiveTab] = useState('PG Courses');

  // 2. Categories for the filter bar
  const categories = [
    "PG Courses", "UG Courses", "Diploma", "Certificate", "Executive Programs", "Doctorate"
  ];

  // 3. Raw Data coming from the Parent
  const coursesData = [
    // PG Courses
    { id: 1, category: 'PG Courses', title: 'Online MBA', icon: '🎓', badge: '#1 Choice' },
    { id: 2, category: 'PG Courses', title: '1-year Online MBA', icon: '📅', badge: null },
    { id: 3, category: 'PG Courses', title: 'Online M.Tech', icon: '💻', badge: null },
    { id: 4, category: 'PG Courses', title: 'Online PGDM', icon: '📜', badge: null },
    { id: 5, category: 'PG Courses', title: 'Online MCA', icon: '📍', badge: '#Popular' },
    { id: 6, category: 'PG Courses', title: 'Dual MBA', icon: '👨‍💼', badge: null },
    
    // UG Courses (Just examples to test the filter)
    { id: 7, category: 'UG Courses', title: 'Online BBA', icon: '📊', badge: 'Trending' },
    { id: 8, category: 'UG Courses', title: 'Online BCA', icon: '🖥️', badge: null },
    
    // Diploma
    { id: 9, category: 'Diploma', title: 'Diploma in IT', icon: '⚙️', badge: null },
  ];

  // 4. Filter Logic: Only show courses that match the selected tab
  const filteredCourses = coursesData.filter(course => course.category === activeTab);

  return (
    <div className="w-full py-12 px-4 md:px-12 flex flex-col items-center font-sans relative">
      
      {/* Floating Top Badge */}
      <div className="absolute top-6 z-10 bg-gradient-to-b from-[#E53935] to-[#B71C1C] text-white px-8 py-2.5 rounded-full font-bold shadow-xl border border-red-400/30">
        Online Courses
      </div>

      {/* Main Dark Background Container */}
      <div className="w-full max-w-7xl bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] rounded-[2rem] p-4 md:p-8 pt-16 shadow-2xl">
        
        {/* --- Filter Tabs Bar --- */}
        <div className="w-full max-w-4xl mx-auto bg-white rounded-full p-1.5 flex items-center mb-8 overflow-x-auto hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === category 
                  ? 'bg-gradient-to-r from-[#B71C1C] to-[#8B0000] text-white shadow-md' 
                  : 'text-gray-600 hover:text-red-700 bg-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Inner Red Box containing Cards --- */}
        <div className="bg-[#780000] rounded-2xl md:rounded-[2rem] p-4 md:p-6 shadow-inner relative">
          
          {/* Responsive Grid for Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* View All Link */}
          <div className="flex justify-end mt-6">
            <button className="flex items-center gap-1 text-white text-sm font-medium hover:underline hover:underline-offset-4 transition-all">
              View all <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>

      {/* Hide scrollbar for mobile tabs (Add this to your globals.css if you want perfectly hidden scrollbars) */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default CourseSection;