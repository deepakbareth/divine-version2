import React, { useState, useRef, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import {
  ArrowRight,
  Clock,
  IndianRupee,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const UniversityProgramsSlider = ({ university, onSelectCourse }) => {
  const { name, programs, popularCourses, mode, shortName } = university;
  const [activeCategory, setActiveCategory] = useState('All');
  const swiperRef = useRef(null);

  // If rich programs array is available
  if (programs && programs.length > 0) {
    // Generate categories list with counts
    const categoryCounts = useMemo(() => {
      const counts = { All: programs.length };
      programs.forEach((p) => {
        const cat = p.category || 'Programs';
        counts[cat] = (counts[cat] || 0) + 1;
      });
      return counts;
    }, [programs]);

    const categories = ['All', ...Array.from(new Set(programs.map((p) => p.category || 'Programs')))];

    // Filter by active category
    const filteredPrograms = useMemo(() => {
      if (activeCategory === 'All') return programs;
      return programs.filter((p) => (p.category || 'Programs') === activeCategory);
    }, [programs, activeCategory]);

    // Level badge style helper
    const getLevelBadge = (level) => {
      const l = (level || '').toLowerCase();
      if (l.includes('post') || l.includes('pg') || l.includes('master')) {
        return 'bg-emerald-500/15 text-[#59c28a] border-emerald-500/30';
      }
      if (l.includes('under') || l.includes('ug') || l.includes('bachelor')) {
        return 'bg-sky-500/15 text-sky-300 border-sky-500/30';
      }
      if (l.includes('dual') || l.includes('integrated')) {
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      }
      return 'bg-emerald-500/15 text-[#59c28a] border-emerald-500/30';
    };

    return (
      <section className="py-16 bg-slate-950 text-white font-sans relative overflow-hidden border-t border-slate-800">

        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#59c28a]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#0066b2]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header & Navigation Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-[#59c28a] text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Academic Degrees & Programs</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif tracking-tight text-white leading-tight">
                Programs Offered at <span className="text-[#59c28a]">{shortName || name}</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light mt-2 max-w-2xl">
                Explore UGC-DEB entitled degree programs with flexible no-cost EMI and career support.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#59c28a] hover:text-slate-950 text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Previous Program"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#59c28a] hover:text-slate-950 text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Next Program"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Clean Category Filter Tabs */}
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center gap-2 ${activeCategory === cat
                    ? 'bg-[#59c28a] text-slate-950 shadow-md scale-102'
                    : 'bg-white/10 hover:bg-white/15 text-slate-300 border border-white/10'
                    }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategory === cat ? 'bg-slate-950/20 text-slate-950 font-extrabold' : 'bg-white/10 text-slate-400'
                    }`}>
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Swiper Slider */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 }
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            className="pb-4"
          >
            {filteredPrograms.map((prog, idx) => {
              const badgeStyle = getLevelBadge(prog.level);

              return (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="h-full bg-slate-900/90 rounded-3xl border border-white/10 hover:border-[#59c28a]/60 p-6 flex flex-col justify-between transition-all duration-300  hover:shadow-2xl group">

                    <div className="space-y-4">

                      {/* Top Chips */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${badgeStyle}`}>
                          {prog.level || "Degree"}
                        </span>

                        {prog.monthlyEmi && (
                          <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 font-bold text-[10px] tracking-wide border border-amber-500/30">
                            EMI: {prog.monthlyEmi}
                          </span>
                        )}
                      </div>

                      {/* Program Title */}
                      <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#59c28a] transition-colors leading-snug">
                        {prog.name}
                      </h3>

                      {/* Duration & Fee Metas */}
                      <div className="grid grid-cols-2 gap-2 text-xs py-2.5 border-y border-white/10 text-slate-300">
                        {prog.duration && (
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-[#59c28a] shrink-0" />
                            <span className="truncate">{prog.duration}</span>
                          </div>
                        )}
                        {prog.totalFee && (
                          <div className="flex items-center gap-1.5 text-amber-300 font-semibold justify-end">
                            <IndianRupee className="w-4 h-4 text-amber-300 shrink-0" />
                            <span>{prog.totalFee}</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      {prog.description && (
                        <p className="text-slate-300 text-xs font-light leading-relaxed line-clamp-2">
                          {prog.description}
                        </p>
                      )}

                      {/* Eligibility */}
                      {prog.eligibility && (
                        <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-[11px] text-slate-300 leading-relaxed">
                          <span className="font-bold text-[#59c28a]">Eligibility: </span>
                          <span>{prog.eligibility}</span>
                        </div>
                      )}

                      {/* Specializations Pill Cloud */}
                      {prog.specializations && prog.specializations.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            Key Electives:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {prog.specializations.slice(0, 4).map((spec, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2 py-0.5 rounded-md bg-white/10 text-slate-200 text-[10px] font-medium"
                              >
                                {spec}
                              </span>
                            ))}
                            {prog.specializations.length > 4 && (
                              <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-[#59c28a] text-[10px] font-medium">
                                +{prog.specializations.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Action CTA */}
                    <div className="pt-6 mt-6 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => onSelectCourse(prog.name)}
                        className="w-full py-3 px-4 rounded-xl bg-[#59c28a] hover:bg-[#46aa75] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group-hover:scale-[1.01]"
                      >
                        <span>Inquire / Get Fee Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>
      </section>
    );
  }

  // Fallback if only popularCourses list is present
  if (!popularCourses || popularCourses.length === 0) return null;

  return (
    <section className="py-16 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-[#59c28a] text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Popular Degree Programs</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif tracking-tight text-white leading-tight">
              Programs Offered at <span className="text-[#59c28a]">{name}</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#59c28a] hover:text-slate-950 text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#59c28a] hover:text-slate-950 text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
          }}
        >
          {popularCourses.map((courseName, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <div className="h-full bg-slate-800/90 rounded-3xl border border-white/10 hover:border-[#59c28a]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-[#59c28a] font-bold text-[10px] uppercase tracking-wider border border-emerald-500/30">
                      {mode || "Accredited"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#59c28a] transition-colors mb-3">
                    {courseName}
                  </h3>

                  <p className="text-slate-300 text-xs font-light leading-relaxed mb-6">
                    UGC recognized degree curriculum designed for career progression and flexible remote study.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectCourse(courseName)}
                  className="w-full py-3 px-4 rounded-xl bg-[#59c28a] hover:bg-[#46aa75] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Inquire This Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default UniversityProgramsSlider;
