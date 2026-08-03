import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

const ContactSidebar = () => {
  return (
    <div className="space-y-6">

      {/* Why Contact Us - Brand Dark Navy Theme (#002147) */}
      <div className="bg-[#002147] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-2 text-[#59c28a] text-xs font-extrabold uppercase tracking-widest mb-3">
          <Sparkles className="w-4 h-4" /> Free Student Counseling Desk
        </div>
        <h3 className="text-2xl font-bold mb-4 leading-tight font-serif">
          Why Speak to Divine Academic Experts?
        </h3>

        <ul className="space-y-4 text-sm text-slate-300 font-light">
          <li className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#59c28a] shrink-0 mt-0.5" />
            <span><strong>100% Free Counseling:</strong> Unbiased guidance on 50+ UGC-approved universities.</span>
          </li>
          <li className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#59c28a] shrink-0 mt-0.5" />
            <span><strong>Fee Structure Transparency:</strong> Complete breakdown of EMI options, exam fees, and admission charges.</span>
          </li>
          <li className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#59c28a] shrink-0 mt-0.5" />
            <span><strong>End-to-End Admission Support:</strong> From document verification to final degree receipt.</span>
          </li>
        </ul>
      </div>

      {/* Helpline Quick Card - All 3 Call Buttons */}
      <div className="bg-[#1a2b4c] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-white/10">
        <h4 className="text-xl font-extrabold mb-2 font-serif">Need Immediate Guidance?</h4>
        <p className="text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
          Call our direct helpline to speak with a senior education advisor immediately.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <a
            href="tel:9828477772"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-2.5 px-3 rounded-xl text-center text-[11px] uppercase tracking-wider transition-colors truncate"
          >
            📞 9828477772
          </a>
          <a
            href="tel:9828977772"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-2.5 px-3 rounded-xl text-center text-[11px] uppercase tracking-wider transition-colors truncate"
          >
            📞 9828977772
          </a>
          <a
            href="tel:9519914855"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-2.5 px-3 rounded-xl text-center text-[11px] uppercase tracking-wider transition-colors truncate"
          >
            📞 9519914855
          </a>
        </div>
      </div>

    </div>
  );
};

export default ContactSidebar;
