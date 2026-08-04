import React from 'react';
import { Award, Users, Building2, Briefcase, ArrowDown } from 'lucide-react';
import SectionHeader from '../reusable/SectionHeader';

const CareerHero = ({ onExploreClick }) => {
  return (
    <div className="mb-12">
      {/* Reusable Section Header Matching All Other Pages */}
      <SectionHeader
        badgeText="We Are Hiring • Join Our Team"
        title="Build a Rewarding Career in"
        titleHighlight="Higher Education Counseling"
        description="Empower thousands of working professionals and students to achieve their degree dreams. Join Jaipur's leading UGC-approved educational counseling network."
      />

      {/* 4 Metric Stats Cards Matching Other Page Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8">
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#3ba36f] flex items-center justify-center mx-auto mb-2">
            <Award className="w-5 h-5" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">15+ Yrs</p>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Education Legacy</p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066b2] flex items-center justify-center mx-auto mb-2">
            <Users className="w-5 h-5" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">100+</p>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Team Members</p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-2">
            <Building2 className="w-5 h-5" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">2 Offices</p>
          <p className="text-xs text-slate-500 font-medium mt-0.5">C-Scheme & Jagatpura</p>
        </div>


      </div>


    </div>
  );
};

export default CareerHero;
