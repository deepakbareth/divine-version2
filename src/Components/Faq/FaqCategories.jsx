import React from 'react';
import { faqCategories, faqsData } from '../../Data/faqsData';

const FaqCategories = ({ activeCategory, setActiveCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
      {faqCategories.map((cat) => {
        const isActive = activeCategory === cat.id;
        const count = cat.id === 'all'
          ? faqsData.length
          : faqsData.filter((f) => f.category === cat.id).length;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setActiveCategory(cat.id);
              if (onSelectCategory) onSelectCategory();
            }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
              isActive
                ? 'bg-[#002147] text-white border-[#002147] shadow-md -translate-y-0.5'
                : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`ml-2 text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
              isActive ? 'bg-[#59c28a] text-slate-950' : 'bg-slate-100 text-slate-500'
            }`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default FaqCategories;
