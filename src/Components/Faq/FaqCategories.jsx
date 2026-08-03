import React from 'react';
import { faqCategories, faqsData } from '../../Data/faqsData';

const FaqCategories = ({ activeCategory, setActiveCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
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
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${isActive
                ? 'bg-[#002147] text-white border-[#002147] shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
          >
            <span>{cat.label}</span>
            <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? 'bg-[#59c28a] text-slate-950' : 'bg-slate-100 text-slate-500'
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
