import React from 'react';
import { Search, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

const CounsellingProcess = () => {
  const steps = [
    {
      id: "01",
      icon: Search,
      title: "1:1 Profile Analysis",
      desc: "Our expert advisors analyze your work experience, learning goals, budget, and timing preferences to map the ideal career upgrade path.",
      themeColor: "text-emerald-500",
      bgAccent: "bg-emerald-50"
    },
    {
      id: "02",
      icon: Compass,
      title: "Unbiased Matching",
      desc: "We screen and compare programs across 50+ partner online universities to shortlist the top matches, keeping recommendations 100% objective.",
      themeColor: "text-blue-500",
      bgAccent: "bg-blue-50"
    },
    {
      id: "03",
      icon: ShieldCheck,
      title: "Hassle-Free Admission",
      desc: "DIMS manages your entire documentation, checks eligibility directly with academic partners, and supports paperless direct admission.",
      themeColor: "text-purple-500",
      bgAccent: "bg-purple-50"
    },
    {
      id: "04",
      icon: HeartHandshake,
      title: "Continuous Support",
      desc: "From onboarding to MCQ-based assessments and graduation coordination, our academic advisors stay in touch throughout your journey.",
      themeColor: "text-rose-500",
      bgAccent: "bg-rose-50"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-24 font-sans relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block px-5 py-2 rounded-full bg-slate-50 shadow-sm border border-slate-200 text-slate-800 font-bold text-xs tracking-widest uppercase mb-4">
            <span className="text-[#59c28a]">✦</span> Our Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif leading-tight">
            The Student-First <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59c28a] to-[#92e0b3]">Counselling Journey</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            How we guide you step-by-step from choosing the right course to securing your accredited degree.
          </p>
        </div>

        {/* Timeline Grid (Vertical on mobile, Horizontal on desktop) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-slate-100 z-0"></div>

          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.id} 
                className="relative bg-slate-50/50 p-8 rounded-3xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group hover:bg-white z-10"
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 right-6 text-slate-200 group-hover:text-[#92e0b3]/40 transition-colors font-serif font-black text-4xl">
                  {s.id}
                </div>

                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl ${s.bgAccent} ${s.themeColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                {/* Step Title */}
                <h3 className="text-xl font-bold text-slate-950 font-serif mb-3 group-hover:text-[#59c28a] transition-colors leading-tight">
                  {s.title}
                </h3>
                
                {/* Step Desc */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CounsellingProcess;
