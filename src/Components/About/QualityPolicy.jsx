import React from 'react';
import { Award, GraduationCap, Clock, Briefcase, Bookmark } from 'lucide-react';

const QualityPolicy = () => {
  const bulletPoints = [
    {
      id: 1,
      title: "Centre of Excellence",
      text: "We at The Divine Institute are committed to making the institute a centre of excellence and it is an enthusiastic attempt by The Divine Institute to expose the best of International management principles, practices and managerial function to the students. We want our students to excel in management learning and carry out research, consultancy and training that fulfills the needs and expectation of students, parents, business and society at large. We aim to do this with high degree of social sensitivity through innovation."
    },
    {
      id: 2,
      title: "No College Entrance Exams",
      text: "As part of our focus on making higher education highly accessible, The Divine Institute does not require students to take college entrance exams. Instead, the Institute suggests that students are employed or have access to an organizational environment that allows them to apply the concepts learned in the courses."
    },
    {
      id: 3,
      title: "Innovative Approach",
      text: "The Divine Institute offers an innovative approach to higher education. Focused on meeting the needs of working students, we believe it is important to provide educational opportunities that are not only convenient and accessible, but also up-to-date and applicable to the real world. This philosophy is reflected in many areas throughout The Divine Institute."
    },
    {
      id: 4,
      title: "Flexible Time Management",
      text: "Working to remove the barriers to education, Institute offers flexible time management that allows students to enroll at any time, as well as convenient learning that enable students to learn at home or at office. Together, these elements help expand educational opportunities for students who previously may have been excluded due to personal, geographic or employment circumstances."
    }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      label: "MCQ Based Exam",
      desc: "Fast and convenient assessment system",
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: Clock,
      label: "Flexible Programs",
      desc: "Learn from home or office anytime",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Briefcase,
      label: "100% Placement",
      desc: "Comprehensive corporate hiring assistance",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-24 font-sans relative overflow-hidden border-b border-slate-100">
      {/* Decorative background shapes */}
      <div className="absolute top-1/3 left-[-10%] w-96 h-96 bg-[#92e0b3]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-[-10%] w-96 h-96 bg-red-100/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-slate-800 font-bold text-xs tracking-widest uppercase mb-4">
            <span className="text-[#59c28a]">✦</span> Institutional Guidelines
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif">
            Quality Policy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59c28a] to-[#92e0b3]">Admissions Criteria</span>
          </h2>
        </div>

        {/* Quality Policy Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {bulletPoints.map((point) => (
            <div 
              key={point.id} 
              className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#59c28a]/20 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 bg-[#59c28a] rounded-full group-hover:scale-y-110 transition-transform"></div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-serif">
                  {point.title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Highlights Badges Row */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((h, idx) => {
            const Icon = h.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center group"
              >
                <div className={`w-12 h-12 rounded-xl ${h.bgColor} ${h.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide mb-1 font-serif">
                  {h.label}
                </h4>
                <p className="text-xs text-slate-500 leading-normal">
                  {h.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default QualityPolicy;
