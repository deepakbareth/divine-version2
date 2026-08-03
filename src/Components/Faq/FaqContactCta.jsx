import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const FaqContactCta = ({ onOpenModal }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 text-[#002147] font-bold text-xs uppercase tracking-wider mb-1">
          <MessageSquare className="w-4 h-4 text-[#59c28a]" /> Free Counseling Helpdesk
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
          Didn't find what you are looking for?
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-md font-light">
          Speak directly with a Divine Institute academic advisor for personalized guidance.
        </p>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 flex-wrap sm:flex-nowrap">
        <a
          href="tel:9828477772"
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-3 px-4 rounded-xl transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#59c28a]" />
          <span>+91 98284 77772</span>
        </a>

        <button
          type="button"
          onClick={onOpenModal}
          className="flex-1 sm:flex-none bg-[#59c28a] hover:bg-[#48b078] text-slate-950 text-xs font-bold py-3 px-5 rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
        >
          Ask an Advisor
        </button>
      </div>
    </div>
  );
};

export default FaqContactCta;
