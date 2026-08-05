import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

const UniversityFaqs = ({ faqs, universityName }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 font-sans space-y-6">
      <SectionHeader
        badgeText="Frequently Asked Questions"
        title="Got Questions About"
        titleHighlight={universityName || "Admissions"}
        description="Find clear answers regarding UGC recognition, degrees, exam mode, and fees."
        centered={false}
      />

      <div className="space-y-3 pt-2">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? 'border-[#59c28a]/60 bg-emerald-50/20 shadow-sm'
                  : 'border-slate-200/80 bg-slate-50/60 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base font-serif flex items-center gap-2.5">
                  <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? 'text-[#2d8f5e]' : 'text-slate-400'}`} />
                  {faq.q}
                </span>
                <span className="p-1 rounded-full bg-white shadow-xs text-slate-500 shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#2d8f5e]" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-emerald-100/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UniversityFaqs;
