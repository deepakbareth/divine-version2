import React from 'react';
import { Clock, ClipboardList, Briefcase, BookOpen, Award, Headphones } from 'lucide-react';

const WhyChooseUsAbout = () => {
  const benefits = [
    {
      id: 1,
      icon: Clock,
      title: "Flexible Time Management",
      desc: "Specially designed for working professionals. Study at your own pace from home or office, and balance your studies with work commitments.",
      themeColor: "text-emerald-500",
      bgAccent: "bg-emerald-50"
    },
    {
      id: 2,
      icon: ClipboardList,
      title: "MCQ-Based Examinations",
      desc: "Fast-track and evaluate actual understanding through modern multiple-choice questions (MCQs), eliminating the need for long written exams.",
      themeColor: "text-blue-500",
      bgAccent: "bg-blue-50"
    },
    {
      id: 3,
      icon: Briefcase,
      title: "100% Placement Support",
      desc: "Connecting you with leading multinational hiring partners to ensure career acceleration and transitions in premium sectors.",
      themeColor: "text-red-500",
      bgAccent: "bg-red-50"
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Excellent Course Materials",
      desc: "Access comprehensive, case-study-oriented digital books, curriculum structures, and resources anytime from our e-learning platform.",
      themeColor: "text-indigo-500",
      bgAccent: "bg-indigo-50"
    },
    {
      id: 5,
      icon: Award,
      title: "No Entrance Exams",
      desc: "Direct admissions based on organizational and professional experience, removing stressful entrance criteria for higher management studies.",
      themeColor: "text-amber-500",
      bgAccent: "bg-amber-50"
    },
    {
      id: 6,
      icon: Headphones,
      title: "Dedicated Academic Support",
      desc: "Get personalized guidance from empathetic academic advisors and support counsellors via call, WhatsApp, or email throughout your course.",
      themeColor: "text-teal-500",
      bgAccent: "bg-teal-50"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-24 font-sans relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 rounded-full bg-slate-50 shadow-sm border border-slate-200 text-slate-800 font-bold text-xs tracking-widest uppercase mb-4">
            <span className="text-[#59c28a]">✦</span> Why Choose Divine Institute
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif">
            Designed to Fit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59c28a] to-[#92e0b3]">Busy Lifestyle</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We deliver quality management education structured to empower working professionals who want to grow in their career paths without quitting their job.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group hover:bg-white"
              >
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl ${b.bgAccent} ${b.themeColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Text content */}
                <h3 className="text-xl font-bold text-slate-950 font-serif mb-3 group-hover:text-[#59c28a] transition-colors">
                  {b.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsAbout;
