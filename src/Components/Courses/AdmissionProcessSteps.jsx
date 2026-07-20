import React from 'react';
import { UserCheck, FileText, PhoneCall, Award } from 'lucide-react';

const AdmissionProcessSteps = () => {
  const steps = [
    {
      id: "01",
      icon: UserCheck,
      title: "1. Select Course & Register",
      desc: "Choose your preferred degree or diploma stream and submit basic candidate details."
    },
    {
      id: "02",
      icon: PhoneCall,
      title: "2. Free 1:1 Counselling",
      desc: "Our senior advisor contacts you to verify eligibility and guide you on university options."
    },
    {
      id: "03",
      icon: FileText,
      title: "3. Paperless Document Verification",
      desc: "Upload 10th, 12th / Graduation marksheets for quick verification by partner universities."
    },
    {
      id: "04",
      icon: Award,
      title: "4. Direct Admission & Onboarding",
      desc: "Receive official enrollment ID and gain immediate access to online study materials and exams."
    }
  ];

  return (
    <div className="bg-slate-50 p-2 sm:p-10 rounded-3xl border border-slate-200/80 my-12">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-[#59c28a] uppercase tracking-widest block mb-2">Simple 4-Step Process</span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
          How Admission Works at Divine Institute
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#59c28a] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-extrabold text-slate-300 font-serif">{step.id}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 font-serif mb-2 leading-tight">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdmissionProcessSteps;
