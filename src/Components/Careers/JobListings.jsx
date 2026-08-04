import React, { useState } from 'react';
import { openVacancies, departmentFilters } from '../../Data/careersData';
import JobCard from './JobCard';
import SectionHeader from '../reusable/SectionHeader';
import { Search, Briefcase } from 'lucide-react';

const JobListings = ({ onApplyClick }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = openVacancies.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedDepartment === 'all') return matchesSearch;
    return matchesSearch && job.department === selectedDepartment;
  });

  return (
    <div id="open-positions-section" className="mb-16 font-sans">
      {/* Section Header */}
      <SectionHeader
        badgeText="Active Job Vacancies"
        title="Explore Current Openings &"
        titleHighlight="Apply Today"
        description="Find the right role tailored to your skills in academic counseling, student operations, performance marketing, or corporate relations."
      />

      {/* Filter Controls & Search */}
      <div className="max-w-4xl mx-auto mb-10 space-y-6">
        {/* Search Box */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by job title, department, or keyword..."
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

        {/* Department Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {departmentFilters.map((dept) => {
            const isSelected = selectedDepartment === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {dept.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Job Cards Grid */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApplyClick={onApplyClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-xl mx-auto p-8">
          <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800">No vacancies matching your search.</h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Try adjusting your search terms or view all departments.
          </p>
        </div>
      )}
    </div>
  );
};

export default JobListings;
