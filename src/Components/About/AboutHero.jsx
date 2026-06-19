import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import aboutImg from '../../assets/about.jpg';

const AboutHero = () => {
    return (
        <section className="bg-white py-24 lg:py-24 font-sans overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side: Content & Company Story */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#92e0b3]/20 text-slate-800 border border-[#92e0b3]/50 font-bold text-xs tracking-widest uppercase mb-6">
                            About Us
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6 font-serif">
                            Empowering Professionals Through <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59c28a] to-[#92e0b3]">Quality Education</span>
                        </h2>

                        {/* Text Extracted from Screenshot */}
                        <div className="space-y-5 text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                            <p>
                                The Divine Institute of Business Management Studies offers Business and Management programs for working class professionals. By joining The Divine Institute, you become part of a unique learning culture that prepares you for experiences in the real business world. Our distance learning education programs offer the opportunity to study a comprehensive curriculum in business management and receive a higher professional qualification in business management with a specialty major. The Divine Institute is evolving as per the industry requirements for well educated and talented professionals.
                            </p>
                            <p>
                                Our Team has visualized the need to educate the managers who have missed out on the graduate and post graduate studies and hence have not been able to scale the same success in their career path which they deserve to. The Divine Institute is committed to its role in improving the talent pool currently employed in various sectors of the economy.
                            </p>
                        </div>

                        {/* Quick Highlights Extracted from Screenshot Bottom Area */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#92e0b3]" />
                                <span className="font-semibold text-slate-700 text-sm">MCQ Based Exam</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#92e0b3]" />
                                <span className="font-semibold text-slate-700 text-sm">Flexible Programs</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#92e0b3]" />
                                <span className="font-semibold text-slate-700 text-sm">100% Placement</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#92e0b3]" />
                                <span className="font-semibold text-slate-700 text-sm">Working Professionals</span>
                            </div>
                        </div>
                        {/* 
                        <button className="flex items-center gap-2 text-slate-900 font-bold hover:text-[#59c28a] transition-colors group">
                            Read Our Full Story
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </button> */}
                    </div>

                    {/* Right Side: Image with Experience Badge */}
                    <div className="order-1 lg:order-2 relative">
                        {/* Background Decorative Shapes */}
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#92e0b3]/20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-slate-200 rounded-full blur-3xl -z-10"></div>

                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                            <img
                                src={aboutImg}
                                alt="Divine Institute Distance Learning"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay Gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        </div>

                        {/* Floating Experience Badge */}
                        <div className="absolute -bottom-6 lg:bottom-12  lg:-left-12 bg-white p-4 sm:p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                            <div className="bg-[#92e0b3] text-slate-900  w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-extrabold text-lg sm:text-xl shadow-inner">
                                10+
                            </div>
                            <div>
                                <p className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">Years of</p>
                                <p className="text-sm sm:text-lg text-slate-800 font-extrabold">Educational Excellence</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutHero;