import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  BookOpen,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const UniversityFaqs = ({ faqs, faqCategories, universityName = "Amity Online" }) => {
  // Normalize categories data
  const normalizedCategories = useMemo(() => {
    if (faqCategories && faqCategories.length > 0) {
      return faqCategories;
    }
    
    // Fallback: If only flat faqs are provided, wrap them in a default category
    if (faqs && faqs.length > 0) {
      return [
        {
          category: "General Inquiries",
          items: faqs
        }
      ];
    }

    return [];
  }, [faqCategories, faqs]);

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  if (normalizedCategories.length === 0) return null;

  const currentCategory = normalizedCategories[activeCategoryIndex] || normalizedCategories[0];
  const currentItems = currentCategory?.items || [];

  const handleCategoryChange = (idx) => {
    setActiveCategoryIndex(idx);
    setOpenIndex(0); // Reset to first item of newly selected category
  };

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  // Helper icon for categories
  const getCategoryIcon = (categoryName, isActive) => {
    const lower = categoryName.toLowerCase();
    const iconClass = `w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-[#59c28a]' : 'text-slate-500'}`;
    
    if (lower.includes('course') || lower.includes('program') || lower.includes('academic')) {
      return <BookOpen className={iconClass} />;
    }
    if (lower.includes('placement') || lower.includes('career') || lower.includes('job')) {
      return <Briefcase className={iconClass} />;
    }
    return <GraduationCap className={iconClass} />;
  };

  return (
    <section className="py-16 lg:py-24 bg-white font-sans border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Brand Header & Category Tab Selector                        */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
                <span className="text-[#59c28a]">✦</span>
                GOT QUESTIONS?
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002147] font-serif leading-tight">
                Frequently Asked <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59c28a] to-[#2d8f5e]">
                  Questions
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                Clear Your Doubts Before Enrolling in{" "}
                <span className="font-semibold text-slate-900">{universityName}</span>
              </p>

              {/* Brand Indicator Bar */}
              <div className="flex items-center gap-1.5 mt-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#59c28a]"></div>
                <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#59c28a] to-[#002147]"></div>
              </div>
            </div>

            {/* Category Tab Pills */}
            {normalizedCategories.length > 1 && (
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select Category</p>
                <div className="flex flex-row flex-wrap lg:flex-col gap-2.5">
                  {normalizedCategories.map((cat, idx) => {
                    const isActive = activeCategoryIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleCategoryChange(idx)}
                        className={`w-full sm:w-auto lg:w-full px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer text-left ${
                          isActive
                            ? 'bg-[#002147] text-white border border-[#002147] shadow-md shadow-slate-900/15 scale-[1.01]'
                            : 'bg-white text-slate-700 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/80 shadow-xs'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {getCategoryIcon(cat.category, isActive)}
                          <span className="text-[14px] sm:text-[15px] font-medium">{cat.category}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold transition-colors ${
                            isActive ? 'bg-[#59c28a] text-[#002147]' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {cat.items?.length || 0}
                          </span>
                          <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-0.5 text-[#59c28a]' : 'text-slate-400'}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Counselor Direct Support Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#002147] to-[#0B2545] text-white shadow-lg space-y-3.5 border border-slate-700/60 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#59c28a]/20 flex items-center justify-center text-[#59c28a] border border-[#59c28a]/40 shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Still have doubts?</h4>
                  <p className="text-xs text-slate-300 font-light">Speak directly with Divine's Senior Counselor</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+919828477772"
                  className="px-3 py-2.5 rounded-xl bg-[#59c28a] hover:bg-[#48b179] text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Call Hotline
                </a>
                <a
                  href="https://wa.me/919828477772?text=Hello%20Divine%20Institute%2C%20I%20have%20questions%20regarding%20Amity%20University%20Online%20admissions."
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border border-white/20 active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#59c28a]" />
                  WhatsApp
                </a>
              </div>
            </div>

          </div>


          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Interactive Accordion of Questions in Active Category      */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-3.5">
            
            {/* Active Category Header Bar (Mobile indicator) */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 lg:hidden">
              <span className="text-xs font-bold uppercase tracking-wider text-[#002147]">
                Showing: <span className="text-[#2d8f5e]">{currentCategory.category}</span>
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {currentItems.length} Questions
              </span>
            </div>

            {currentItems.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#59c28a]/60 bg-emerald-50/25 shadow-md ring-1 ring-[#59c28a]/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-start sm:items-center justify-between text-left gap-3.5 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      {/* Circle Question Badge in Divine Emerald */}
                      <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                        isOpen 
                          ? 'bg-[#59c28a] text-[#002147] shadow-xs' 
                          : 'bg-emerald-50 text-[#2d8f5e] border border-emerald-200/80'
                      }`}>
                        ?
                      </span>

                      <span className={`font-semibold text-sm sm:text-[15px] leading-snug transition-colors ${
                        isOpen ? 'text-[#002147]' : 'text-slate-800'
                      }`}>
                        {faq.q}
                      </span>
                    </div>

                    {/* Chevron Toggle Button */}
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen 
                        ? 'rotate-180 bg-[#59c28a]/20 text-[#2d8f5e]' 
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 pt-1 text-slate-600 text-xs sm:text-[14px] leading-relaxed border-t border-emerald-100/70 animate-fadeIn font-light">
                      <p className="mt-2 text-justify sm:text-left text-slate-600">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default UniversityFaqs;
