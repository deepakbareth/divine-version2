import React from 'react';
import { MapPin, Briefcase, Clock, CheckCircle2, ArrowRight, IndianRupee } from 'lucide-react';

const JobCard = ({ job, onApplyClick }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#59c28a]/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#3ba36f] border border-emerald-100 font-bold text-xs">
            {job.department}
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold">
            {job.openings}
          </span>
        </div>

        {/* Job Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-800 transition-colors">
          {job.title}
        </h3>

        {/* Meta Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 mb-5">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Exp: {job.experience}</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-slate-700">
            <IndianRupee className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{job.salary}</span>
          </div>
        </div>

        {/* Key Responsibilities Highlights */}
        <div className="space-y-2 mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Key Responsibilities:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {job.responsibilities.slice(0, 3).map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#59c28a] shrink-0 mt-0.5" />
                <span className="line-clamp-2">{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onApplyClick(job)}
        className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#59c28a] text-white hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm hover:shadow-md"
      >
        <span>Apply for this Position</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </button>
    </div>
  );
};

export default JobCard;
