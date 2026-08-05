import React from 'react';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';
import LeadEnquiryForm from '../../reusable/LeadEnquiryForm';

const UniversityBottomAdmissionDesk = ({ university, selectedCourse }) => {
  const universityName = university?.shortName || university?.name || "University";

  return (
    <section id="admission-desk" className="py-16 sm:py-20 bg-[#002147] text-white font-sans relative overflow-hidden">
      {/* Ambient background lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#59c28a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0066b2]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Official Counselor Helpdesk */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-[#59c28a] text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Admissions Guidance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white leading-tight">
              Start Your Admission Journey in <span className="text-[#59c28a]">{universityName}</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Divine Institute is Jaipur's trusted educational counseling partner. Connect with our expert advisors to verify eligibility, lock 0% interest EMI options, and get personalized scholarship support.
            </p>

            {/* Benefit Checkpoints */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#59c28a] shrink-0" />
                <span>100% Free Counseling & Guidance</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#59c28a] shrink-0" />
                <span>UGC-DEB Direct Verification</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#59c28a] shrink-0" />
                <span>Zero-Cost 0% Interest EMI</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#59c28a] shrink-0" />
                <span>End-to-End Exam Support</span>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9828477772"
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#59c28a] hover:bg-[#46aa75] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call: +91 98284 77772</span>
              </a>

              <a
                href="https://wa.me/919828477772?text=Hello%20Divine%20Institute,%20I%20want%20information%20regarding%20university%20admission"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/15 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#59c28a]" />
                <span>WhatsApp Counselor</span>
              </a>
            </div>

          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-2 sm:p-4 shadow-2xl border border-white/10">
              <LeadEnquiryForm
                title={`Inquire for ${selectedCourse || universityName}`}
                subtitle="Fill details below to lock your seat & receive official syllabus & fee breakdown."
                buttonText="Request Immediate Callback"
                courseName={selectedCourse || university?.name}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default UniversityBottomAdmissionDesk;
