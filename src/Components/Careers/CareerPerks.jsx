import React from 'react';
import { careerPerks } from '../../Data/careersData';
import { TrendingUp, Award, Users, Building2, Smile, BookOpen } from 'lucide-react';
import SectionHeader from '../reusable/SectionHeader';

const iconMap = {
  TrendingUp: TrendingUp,
  Award: Award,
  Users: Users,
  Building2: Building2,
  Smile: Smile,
  BookOpen: BookOpen
};

const CareerPerks = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-10 mb-16 font-sans">
      <SectionHeader
        badgeText="Work Culture & Growth"
        title="Why Build Your Career at"
        titleHighlight="Divine Institute?"
        description="We foster an empowering, goal-driven environment where your contributions are rewarded with top incentives, promotions, and supportive leadership."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {careerPerks.map((perk) => {
          const IconComponent = iconMap[perk.icon] || TrendingUp;
          return (
            <div
              key={perk.id}
              className="bg-slate-50 border border-slate-200/70 rounded-2xl p-6 hover:border-[#59c28a]/40 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#3ba36f] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#59c28a] group-hover:text-slate-950 transition-all duration-300 border border-emerald-100">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-serif group-hover:text-slate-950">
                {perk.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                {perk.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerPerks;
