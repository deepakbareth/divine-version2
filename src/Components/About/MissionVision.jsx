import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
    return (
        <section className="bg-slate-50 py-16 lg:py-24 font-sans relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-block px-5 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-slate-800 font-bold text-xs tracking-widest uppercase mb-4">
                        <span className="text-[#59c28a]">✦</span> Our Core Purpose
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif">
                        The Foundation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59c28a] to-[#92e0b3]">Divine Institute</span>
                    </h2>
                </div>

                {/* Dual Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* ================= MISSION CARD (Light Theme) ================= */}
                    <div className="bg-white rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#92e0b3]/10 rounded-full blur-3xl -z-10 group-hover:bg-[#92e0b3]/20 transition-colors duration-500"></div>

                        {/* Icon Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-[#92e0b3]/20 flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform">
                                <Target className="w-8 h-8 text-[#59c28a]" />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
                                Mission
                            </h3>
                        </div>

                        {/* Text Content Extracted from Image */}
                        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                Our mission is to understand the professional needs of our students and guide them for their long and short term goals. We aspire to become the one stop solution for all their higher education needs.
                            </p>
                            <p>
                                We are genuinely concerned about our student's career and work hard on all our students' admission process with utmost integrity. We work tirelessly to ensure the students secure admission in the university of their choice.
                            </p>
                        </div>

                        {/* Accent Line */}
                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#59c28a] to-[#92e0b3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>


                    {/* ================= VISION CARD (Dark Theme) ================= */}
                    <div className="bg-slate-900 rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-2xl shadow-slate-900/20  relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        {/* Decorative Background Element */}
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#92e0b3]/5 rounded-full blur-3xl -z-10 group-hover:bg-[#92e0b3]/10 transition-colors duration-500"></div>

                        {/* Icon Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center -rotate-3 group-hover:-rotate-6 transition-transform">
                                <Eye className="w-8 h-8 text-[#92e0b3]" />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-white font-serif">
                                Vision
                            </h3>
                        </div>

                        {/* Text Content Extracted from Image */}
                        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                            <p>
                                Our Vision is to become the finest and most revered higher education consultancy in Rajasthan. We aspire to become the student's one stop solution for all the higher studies needs of students and working professionals.
                            </p>
                            <p>
                                Our counselors are empathetic, understanding, and knowledgeable and give perfect guidance according to the best capability of the students. We ensure utmost convenience in the admission process and enable the students to confidently move ahead and pursue their dreams, as we have their back from the starting to end.
                            </p>
                        </div>

                        {/* Accent Line */}
                        <div className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-l from-[#59c28a] to-[#92e0b3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MissionVision;