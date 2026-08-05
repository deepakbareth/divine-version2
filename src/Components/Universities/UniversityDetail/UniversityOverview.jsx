import React from 'react';
import { Award, Globe, MapPin, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

const UniversityOverview = ({ university }) => {
  const { name, aboutTitle, description, mode, naacGrade, location, approvals, establishedYear } = university;

  return (
    <section className="py-16 bg-slate-50/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 space-y-8">
          
          <SectionHeader
            badgeText="About Institution"
            title="Institutional Profile &"
            titleHighlight="Academic Legacy"
            centered={false}
          />

          {/* Description */}
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            <p>
              {description}
            </p>
          </div>

          {/* Accreditations & Recognitions Grid */}
          <div className="pt-6 border-t border-slate-100 space-y-4">
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-sans">
              Statutory Approvals & Accreditations
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {(approvals || ["UGC-DEB", "AICTE", "NAAC A+", "WES Recognized"]).map((app, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5 text-slate-800 text-xs font-bold"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2d8f5e] shrink-0" />
                  <span className="truncate">{app}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default UniversityOverview;
