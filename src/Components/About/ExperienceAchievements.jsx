import React from 'react';
import { Award, Users, School, UserCheck, CheckCircle } from 'lucide-react';

const ExperienceAchievements = () => {
  const stats = [
    {
      id: 1,
      icon: Users,
      value: "15,000+",
      label: "Alumni Transformed",
      desc: "More than 15K working professionals guided to secure premium accredited management degrees."
    },
    {
      id: 2,
      icon: School,
      value: "50+",
      label: "UGC-Approved Partner Universities",
      desc: "Formed strategic tie-ups with India's leading approved universities for distance and online learning."
    },
    {
      id: 3,
      icon: UserCheck,
      value: "100+",
      label: "Empathetic Advisors",
      desc: "A massive, skilled support network of counsellors providing 1:1 unbiased career consultations."
    },
    {
      id: 4,
      icon: Award,
      value: "ISO 9001:2008",
      label: "Quality Certified DIMS",
      desc: "Internationally recognized quality standards in administrative and educational guidance processes."
    }
  ];

  return (
    <section 
      className="py-20 lg:py-24 font-sans relative overflow-hidden bg-[#121824]"
      style={{
        background: 'radial-gradient(circle at 10% 20%, #1e293b 0%, #0f172a 80%)'
      }}
    >
      {/* Decorative neon light elements */}
      <div className="absolute top-1/2 left-[-10%] w-[30%] h-[50%] bg-[#59c28a]/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[50%] bg-emerald-700/10 rounded-full blur-3xl opacity-35"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 font-bold text-xs tracking-widest uppercase mb-4">
            ✦ Certifications & Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif leading-tight">
            Our Experience, Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59c28a] to-[#92e0b3]">Competitive Advantage</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.id} 
                className="bg-white/[0.02] backdrop-blur-md p-8 rounded-[2rem] border border-white/5 hover:border-[#59c28a]/30 shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Icon block */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#92e0b3] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Metric Value */}
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 font-serif tracking-tight">
                  {s.value}
                </h3>
                
                {/* Metric Label */}
                <h4 className="text-sm font-semibold text-[#59c28a] uppercase tracking-wider mb-4 leading-snug">
                  {s.label}
                </h4>
                
                {/* Divider */}
                <div className="w-8 h-[2px] bg-white/10 group-hover:bg-[#59c28a]/40 transition-colors mb-4"></div>
                
                {/* Metric Desc */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quality Policy Box */}
        <div className="mt-16 bg-white/[0.03] backdrop-blur-md p-8 sm:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#59c28a]/5 rounded-full blur-3xl -z-10 group-hover:bg-[#59c28a]/10 transition-colors"></div>
          
          <div className="w-16 h-16 rounded-2xl bg-[#59c28a]/15 text-[#92e0b3] flex items-center justify-center shrink-0">
            <CheckCircle className="w-8 h-8" />
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">ISO 9001:2008 Quality Policy</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              At Divine Institute, we are committed to maintaining international standards in educational counselling. We strive to provide transparent guidance, hassle-free paperless admissions support, and persistent candidate aid, enabling professionals to comfortably advance in their educational journeys.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceAchievements;
