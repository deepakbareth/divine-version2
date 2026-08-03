import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqList = ({ faqs, openIndex, toggleAccordion }) => {
  if (faqs.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-6 mb-12">
        <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
        <h4 className="text-base font-bold text-slate-800 mb-1">No questions found</h4>
        <p className="text-slate-500 text-xs max-w-sm mx-auto">
          Please select another category or connect with an academic advisor.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 mb-12">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-[#59c28a]/60 shadow-sm'
                : 'border-slate-200/90 hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleAccordion(idx)}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
            >
              <span
                className={`text-sm sm:text-base font-semibold transition-colors leading-snug ${
                  isOpen ? 'text-[#002147]' : 'text-slate-800'
                }`}
              >
                {faq.q}
              </span>

              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-[#59c28a]/20 text-[#002147]' : 'bg-slate-100 text-slate-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-normal">
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
