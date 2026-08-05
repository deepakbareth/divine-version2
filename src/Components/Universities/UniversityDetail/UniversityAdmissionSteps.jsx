import React from 'react';
import { PhoneCall, FileCheck, CreditCard, Laptop, ArrowRight } from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Free Profile Consultation",
    desc: "Speak with an academic advisor at Divine Institute to select the best program."
  },
  {
    step: "02",
    icon: FileCheck,
    title: "Document Verification",
    desc: "Submit your academic mark sheets and ID proof for instant paperless eligibility check."
  },
  {
    step: "03",
    icon: CreditCard,
    title: "Direct University Fee",
    desc: "Pay tuition directly via official university portal or activate 0% interest monthly EMI."
  },
  {
    step: "04",
    icon: Laptop,
    title: "LMS & Enrollment Access",
    desc: "Receive your official University Enrollment Number and student portal access."
  }
];

const UniversityAdmissionSteps = ({ onStartAdmission }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 font-sans space-y-6">
      
      <SectionHeader
        badgeText="Simple Process"
        title="4-Step Admission"
        titleHighlight="Journey"
        description="Divine Institute provides 100% free personalized counseling and direct admission facilitation."
        centered={false}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/70 rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-black text-[#59c28a] font-serif">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#3ba36f] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-900 mb-1.5 font-serif">
                  {item.title}
                </h4>

                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-600 font-medium">
          Have questions about admission deadlines or eligibility?
        </p>
        <button
          type="button"
          onClick={onStartAdmission}
          className="py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-[#59c28a] text-white hover:text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
        >
          <span>Start Admission Process</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

export default UniversityAdmissionSteps;
