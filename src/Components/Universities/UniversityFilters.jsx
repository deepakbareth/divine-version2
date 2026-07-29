import React from 'react';
import { Search } from 'lucide-react';

const UniversityFilters = ({
  searchQuery,
  setSearchQuery,
  selectedFilter,
  setSelectedFilter,
  approvalFilters
}) => {
  return (
    <div className="max-w-4xl mx-auto mb-12 space-y-6">
      {/* Search Box */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="University name, location, or course..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {approvalFilters.map((filter) => {
          const isSelected = selectedFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${isSelected
                ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
            >
              {filter.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default UniversityFilters;
