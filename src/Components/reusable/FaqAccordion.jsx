import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqAccordion = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#59c28a]/40 shadow-md'
                : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
            }`}
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-slate-900 text-base sm:text-lg focus:outline-none cursor-pointer"
            >
              <span>{faq.q}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#92e0b3]/20 text-[#59c28a]' : 'bg-slate-200/60 text-slate-600'}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-light">
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

export default FaqAccordion;
