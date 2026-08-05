import React from 'react';
import { Building2 } from 'lucide-react';
import SectionHeader from '../../reusable/SectionHeader';

// Local company images from src/assets/universities/companies/
import accentureImg from '../../../assets/universities/companies/accenture.png';
import amazonImg from '../../../assets/universities/companies/amazon.png';
import cognizantImg from '../../../assets/universities/companies/cognizant.png';
import deloitteImg from '../../../assets/universities/companies/deloitte.png';
import hpImg from '../../../assets/universities/companies/hp.png';
import ibmImg from '../../../assets/universities/companies/ibm.png';
import iciciImg from '../../../assets/universities/companies/icici.png';
import infosysImg from '../../../assets/universities/companies/infosys.png';
import merceImg from '../../../assets/universities/companies/merce.png';
import microsoftImg from '../../../assets/universities/companies/microsoft.png';
import nestleImg from '../../../assets/universities/companies/nestle.png';
import niitImg from '../../../assets/universities/companies/niit.png';
import tcsImg from '../../../assets/universities/companies/tcs.png';
import wiproImg from '../../../assets/universities/companies/wipro.png';

// Mapping dictionary with custom scaling for equal visual optical balance
const COMPANY_CONFIG = {
  'microsoft': { img: microsoftImg, scale: 'scale-[1.85] sm:scale-[2]' },
  'niit': { img: niitImg, scale: 'scale-[1.45] sm:scale-[1.55]' },
  'accenture': { img: accentureImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'amazon': { img: amazonImg, scale: 'scale-[1.1] sm:scale-[1.2]' },
  'cognizant': { img: cognizantImg, scale: 'scale-[1.1] sm:scale-[1.2]' },
  'deloitte': { img: deloitteImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'hp': { img: hpImg, scale: 'scale-[1.1] sm:scale-[1.2]' },
  'ibm': { img: ibmImg, scale: 'scale-[1.1] sm:scale-[1.2]' },
  'icici': { img: iciciImg, scale: 'scale-[1.2] sm:scale-[1.3]' },
  'icici bank': { img: iciciImg, scale: 'scale-[1.2] sm:scale-[1.3]' },
  'infosys': { img: infosysImg, scale: 'scale-[1.1] sm:scale-[1.2]' },
  'mercedes': { img: merceImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'mercedes-benz': { img: merceImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'merce': { img: merceImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'nestle': { img: nestleImg, scale: 'scale-[1.05] sm:scale-[1.15]' },
  'tcs': { img: tcsImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'tata': { img: tcsImg, scale: 'scale-[1.15] sm:scale-[1.25]' },
  'wipro': { img: wiproImg, scale: 'scale-[1.1] sm:scale-[1.2]' }
};

// Helper function to get company image config
const getCompanyConfig = (name) => {
  const norm = (name || '').toLowerCase().trim();
  for (const [key, conf] of Object.entries(COMPANY_CONFIG)) {
    if (norm.includes(key)) {
      return conf;
    }
  }
  return null;
};

const UniversityHiringPartners = ({ partners, universityName }) => {
  if (!partners || partners.length === 0) return null;

  // Duplicate the list 3 times for a continuous seamless marquee scroll
  const marqueeList = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-slate-50/60 font-sans border-t border-slate-200/80 overflow-hidden">
      
      {/* Inline styles for smooth right-to-left marquee animation (55s slow & smooth) */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .hiring-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 55s linear infinite;
        }
        .hiring-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <SectionHeader
          badgeText="Career & Placements"
          title="Top Hiring Partners & Recruiters of"
          titleHighlight={universityName}
          description="Graduates are hired across leading multinational corporations, tech giants, and Fortune 500 enterprises."
          centered={true}
        />
      </div>

      {/* ========================================================================= */}
      {/* 1-ROW CONTINUOUS MARQUEE (Moving Smoothly Right to Left)                  */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="hiring-marquee-track gap-5 sm:gap-6 items-center cursor-grab active:cursor-grabbing">
          {marqueeList.map((partner, idx) => {
            const config = getCompanyConfig(partner);

            return (
              <div
                key={idx}
                className="w-[180px] sm:w-[205px] h-[95px] sm:h-[105px] px-5 py-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_3px_14px_-2px_rgba(0,0,0,0.05)] hover:border-[#59c28a]/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-center group shrink-0 select-none overflow-hidden"
              >
                {config ? (
                  <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={config.img}
                      alt={partner}
                      className={`max-h-12 sm:max-h-14 max-w-[140px] sm:max-w-[155px] object-contain transition-transform duration-300 ${config.scale}`}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#2d8f5e] group-hover:bg-[#59c28a] group-hover:text-slate-950 flex items-center justify-center transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-800 text-xs font-sans truncate max-w-[150px]">
                      {partner}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default UniversityHiringPartners;
