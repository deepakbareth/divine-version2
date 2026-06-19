import React, { useState } from 'react';
import TrendingCard from './TrendingCard';
import { MonitorPlay, GraduationCap } from 'lucide-react';

const TrendingSection = () => {
  const [activeTab, setActiveTab] = useState('Specializations');

  const trendingData = [
    {
      id: 1,
      category: 'Specializations',
      title: 'AI and ML',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600',
      point1: 'Powering the Future of Automation',
      point2: 'Ideal for Tech-Driven Innovators'
    },
    {
      id: 2,
      category: 'Specializations',
      title: 'Cyber Security',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
      point1: 'Safeguarding the Digital World',
      point2: 'Ideal for Security & Risk Professionals'
    },
    {
      id: 3,
      category: 'Specializations',
      title: 'Information Technology',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
      point1: 'Backbone of the Digital Enterprise',
      point2: 'Ideal for IT & Systems Professionals'
    },
    {
      id: 4,
      category: 'Specializations',
      title: 'Operations Management',
      image: 'https://images.unsplash.com/photo-1573164574397-dd250bc8a598?auto=format&fit=crop&q=80&w=600',
      point1: 'Streamlining Business Efficiency',
      point2: 'Ideal for Process & Production Managers'
    },
    // Dummy Data for 'Programs' Tab
    {
      id: 5,
      category: 'Programs',
      title: 'Executive MBA',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
      point1: 'Leadership for the Modern Era',
      point2: 'Ideal for Mid-Senior Managers'
    }
  ];

  const filteredData = trendingData.filter(course => course.category === activeTab);

  return (
    <section className="w-full py-16 px-2 md:px-2 lg:px-8 mt-8 font-sans bg-white flex flex-col items-center overflow-hidden">
      
      {/* Top Badge & Header */}
      <div className="flex flex-col items-center mb-8 z-10">
        <div className="bg-gradient-to-r from-[#D32F2F] to-[#9A0000] text-white text-xs md:text-xl font-bold px-6 py-1.5 rounded-full shadow-lg mb-4">
          #Trending
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">
          Explore Trending Online Courses in India
        </h2>
      </div>

      {/* --- WIDER Dark Grid Container --- */}
      {/* Changed max-w-7xl to max-w-[1536px] and w-[98%] to make it stretch across the screen */}
      <div className="relative w-[98%] md:w-[95%] max-w-[1536px] bg-[#0A0A0A] rounded-xl md:rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-800/60 flex flex-col items-center">
        
        {/* Subtle Grid Background Pattern */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl" 
             style={{ 
               backgroundImage: `
                 linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                 linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
               `, 
               backgroundSize: '45px 45px' 
             }}>
        </div>

        {/* Enhanced Red Glowing Flares (Edges) */}
        {/* Made them taller (top-0 bottom-0) and adjusted blur to match the first screenshot */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-red-600/40 blur-[80px] pointer-events-none rounded-l-3xl"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-red-600/40 blur-[80px] pointer-events-none rounded-r-3xl"></div>

        {/* --- Inner Content --- */}
        <div className="relative z-10 flex flex-col items-center w-full">
          
          {/* Filter Tabs Container */}
          <div className="flex items-center gap-1 mb-10 bg-[#1A1A1A] p-1 rounded border border-gray-700/50">
            <button 
              onClick={() => setActiveTab('Specializations')}
              className={`flex items-center gap-2 px-6 py-2 text-sm font-semibold transition-all rounded-sm ${
                activeTab === 'Specializations' 
                ? 'bg-[#D32F2F] text-white shadow-md' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              <MonitorPlay size={16} />
              Specializations
            </button>
            <button 
              onClick={() => setActiveTab('Programs')}
              className={`flex items-center gap-2 px-6 py-2 text-sm font-semibold transition-all rounded-sm ${
                activeTab === 'Programs' 
                ? 'bg-white text-black shadow-md' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              <GraduationCap size={16} />
              Programs
            </button>
          </div>

          {/* Cards Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredData.map(course => (
              <TrendingCard key={course.id} course={course} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrendingSection;