import React, { useState } from 'react';

const Hero = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Thank you! Our expert counsellor will contact you soon.');
    };

    // Trust Signals (Document Point 2)
    const trustSignals = [
        { value: '2010', label: 'Established In', suffix: '' },
        { value: '15,000', label: 'Students', suffix: '+' },
        { value: '50', label: 'Universities', suffix: '+' },
        { value: '100', label: 'Counsellors', suffix: '+' },
    ];



    return (
        <div className=" pt-24 lg:pt-28 font-sans">
            {/* --- MAIN HERO SECTION --- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Side: Content, CTAs & Trust Signals */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* Mini Testimonial Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-xs">👨‍🎓</div>
                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs">👩‍🎓</div>
                            </div>
                            <span className="text-sm font-medium text-slate-700">
                                <span className="text-yellow-500">★★★★★</span> Trusted by 15K+ Students
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif lg:text-6xl font-extrabold text-slate-900 leading-tight">
                            Unlock Your Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">Top Universities</span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-2xl font-serif">
                            Your journey to a successful career starts here. Explore UGC-approved universities, get personalized guidance, and apply for the best online or distance learning programs.
                        </p>

                        {/* Clear CTAs (Document Point 4) */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="bg-gradient-to-r from-red-700 to-red-600 text-white px-8 py-3.5 cursor-pointer rounded-xl font-bold shadow-lg shadow-red-700/30 hover:-translate-y-0.5 transition-all">
                                Get Free Counselling
                            </button>
                            <button className="bg-white text-slate-800 border-2 border-slate-200 px-8 py-3.5 cursor-pointer rounded-xl font-bold hover:border-red-700 hover:text-red-700 transition-all flex items-center gap-2">
                                <span>📞</span> Talk to Expert
                            </button>
                            <button className="text-red-700 font-semibold px-4 py-3.5 hover:underline cursor-pointer flex items-center gap-2">
                                <span>📥</span> Download Brochure
                            </button>
                        </div>

                        {/* Trust Signals Grid (Document Point 2) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
                            {trustSignals.map((signal, index) => (
                                <div key={index}>
                                    <h3 className="text-2xl font-extrabold text-slate-900">
                                        {signal.value}<span className="text-red-700">{signal.suffix}</span>
                                    </h3>
                                    <p className="text-sm font-medium text-slate-500">{signal.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Exact Form from Screenshot with red-700 theme */}
                    <div className="lg:col-span-5 relative w-full mx-auto">
                        <div className="absolute inset-0 bg-red-700 rounded-xl transform rotate-2 opacity-10"></div>

                        <div className="relative bg-white shadow-xl p-8 border border-slate-200 rounded-xl">
                            {/* Form Header matching screenshot */}
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-red-700 mb-2">Enquire Now</h2>
                                <div className="w-12 h-1 bg-yellow-400"></div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-2">

                                {/* First Name & Last Name (Side by Side) */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-slate-700 text-sm mb-1">First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-slate-700 text-sm mb-1">Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone (Side by Side) */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-slate-700 text-sm mb-1">E-mail Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-slate-700 text-sm mb-1">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Course Dropdown */}
                                <div>
                                    <label className="block text-slate-700 text-sm mb-1">Select Courses</label>
                                    <select
                                        name="course"
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-colors bg-white text-slate-700"
                                    >
                                        <option value="Masters and PG Courses">Masters and PG Courses</option>
                                        <option value="Bachelors and UG Courses">Bachelors and UG Courses</option>
                                        <option value="Diploma Courses">Diploma Courses</option>
                                        <option value="Certificate Courses">Certificate Courses</option>
                                    </select>
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label className="block text-slate-700 text-sm mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="bg-red-700 text-white font-bold py-3 px-8 rounded hover:bg-red-800 transition-colors"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
};

export default Hero;