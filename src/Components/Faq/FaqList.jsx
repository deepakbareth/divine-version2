import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqList = ({ faqs, openIndex, toggleAccordion }) => {
  if (!faqs || faqs.length === 0) {
    return (
      <div className="text-center py-14 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
        <h4 className="text-lg font-bold text-slate-800 font-serif mb-1">No questions found</h4>
        <p className="text-slate-500 text-sm max-w-sm mx-auto font-light">
          Please select another category or connect directly with our academic desk.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                ? 'bg-white border-[#59c28a]/50 shadow-md ring-1 ring-[#59c28a]/20'
                : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
              }`}
          >
            <button
              type="button"
              onClick={() => toggleAccordion(idx)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4  font-bold text-slate-900 text-base sm:text-lg focus:outline-none cursor-pointer leading-snug"
            >
              <span className={isOpen ? 'text-[#002147]' : 'text-slate-900'}>
                {faq.q}
              </span>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen
                    ? 'rotate-180 bg-[#92e0b3]/20 text-[#59c28a]'
                    : 'bg-slate-100 text-slate-500'
                  }`}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-light whitespace-pre-line">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FaqList;
