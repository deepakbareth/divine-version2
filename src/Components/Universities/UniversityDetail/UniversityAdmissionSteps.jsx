import React from 'react';
import { PhoneCall, FileCheck, CreditCard, Laptop, ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Free Profile Consultation",
    desc: "Speak with an academic advisor at Divine Institute to select the most suitable degree program."
  },
  {
    step: "02",
    icon: FileCheck,
    title: "Document Verification",
    desc: "Submit your academic mark sheets and ID proof for instant paperless eligibility verification."
  },
  {
    step: "03",
    icon: CreditCard,
    title: "Direct University Fee",
    desc: "Pay tuition directly via the official university portal or activate 0% interest monthly EMI."
  },
  {
    step: "04",
    icon: Laptop,
    title: "LMS & Enrollment Access",
    desc: "Receive your official University Enrollment Number, student portal ID, and study resources."
  }
];

const UniversityAdmissionSteps = ({ onStartAdmission }) => {
  return (
    <section className="py-16 bg-white font-sans border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badgeText="Simple & Transparent"
          title="4-Step Admission Journey with"
          titleHighlight="Divine Institute"
          description="We provide 100% free personalized counseling, documentation assistance, and zero-cost EMI support."
          centered={true}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 hover:border-[#59c28a]/70 hover:bg-emerald-50/20 hover:shadow-lg rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#2d8f5e] font-serif">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#2d8f5e] shadow-xs border border-slate-200/70 group-hover:bg-[#59c28a] group-hover:text-slate-950 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2 font-serif group-hover:text-[#002147] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#59c28a] shrink-0" />
            <div>
              <h4 className="font-bold text-sm sm:text-base font-serif">Ready to take the next step in your career?</h4>
              <p className="text-slate-300 text-xs font-light">Our Jaipur counselors will assist you throughout the registration process.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onStartAdmission}
            className="py-3 px-6 rounded-xl bg-[#59c28a] hover:bg-[#46aa75] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 shrink-0 shadow-md"
          >
            <span>Start Admission Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default UniversityAdmissionSteps;
