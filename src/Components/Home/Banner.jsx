import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Download, UserCheck } from 'lucide-react';
import b1 from '../../assets/home/b1.jpg'
import b2 from '../../assets/home/b2.jpg'
import b3 from '../../assets/home/b3.jpg'


// --- INLINE SLIDE COMPONENT (Only Background & Text) ---
const Slide = ({ slide, isActive }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
    >
      {/* Background Image */}
      <img
        src={slide.image}
        alt="Slider Background"
        className="w-full h-full object-cover"
      />

      {/* Smooth Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-slate-900/80 lg:bg-gradient-to-r lg:from-slate-900/15 lg:via-slate-900/10 lg:to-transparent"></div>

      {/* Slide Text Content - Aligned perfectly with max-w-7xl */}
      {/* UPDATE: items-start pt-24 on mobile, items-center on desktop */}
      <div className="absolute inset-0 flex items-start pt-24 sm:pt-32 lg:pt-0 lg:items-center pointer-events-none">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:w-[55%] xl:w-[50%] transform transition-transform duration-700 delay-100 translate-y-0 pointer-events-auto">

            {/* Trust Badge */}
            <div className="inline-block px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-[#6abd8d]/10 text-[#6abd8d] border border-[#6abd8d]/30 font-semibold text-[10px] sm:text-xs md:text-sm tracking-wide mb-4 lg:mb-6 backdrop-blur-md shadow-sm">
              🎓 India's Most Trusted Education Platform
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.2] lg:leading-[1.1] mb-3 lg:mb-5 drop-shadow-lg whitespace-pre-line font-serif">
              {slide.title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 lg:mb-10 max-w-md lg:max-w-lg leading-relaxed font-light">
              {slide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <button className="bg-[#6abd8d] hover:bg-[#7bc89d] text-slate-900 px-4 py-2.5 lg:px-6 lg:py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#6abd8d]/20 hover:shadow-[#6abd8d]/40 transform hover:-translate-y-0.5 flex items-center gap-2 text-xs sm:text-sm md:text-base">
                <UserCheck className="w-4 h-4 lg:w-5 lg:h-5" /> Get Free Counselling
              </button>

              {/* <button className="bg-white text-slate-900 hover:bg-slate-50 px-4 py-2.5 lg:px-6 lg:py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm md:text-base shadow-lg transform hover:-translate-y-0.5">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-[#6abd8d]" /> Talk to Expert
              </button> */}

              <button className="border border-white/40 hover:border-white hover:bg-white/10 text-white px-4 py-2.5 lg:px-6 lg:py-3.5 rounded-xl font-bold transition-all duration-300 items-center gap-2 text-xs sm:text-sm md:text-base backdrop-blur-sm  ">
                <Download className="w-4 h-4 lg:w-5 lg:h-5 hidden sm-flex" /> Download Brochure
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};


// --- MAIN BANNER COMPONENT ---
const BannerHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', course: '', message: '',
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you! Our expert counsellor will contact you soon.');
  };

  const slidesData = [
    {
      id: 1,
      image: b1,
      title: "Need Career\nGuidance?\nWe Are Here To Help",
      subtitle: "Compare 50+ universities, understand fee structures, and let our expert counsellors guide you to a successful future.",
    },
    {
      id: 2,
      image: b2,
      title: "Flexible Learning via\nDistance Education",
      subtitle: "Study anytime, anywhere. Build your career with industry-aligned degrees without leaving your job.",
    },
    {
      id: 3,
      image: b3,
      title: "Unlock Your Potential\nWith Top Universities",
      subtitle: "Explore UGC-approved universities, get personalized guidance, and apply for the best programs today.",
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [isPaused, currentSlide]);

  return (
    // UPDATE: min-h adjusted for mobile to prevent form cutting off
    <div className="relative w-full h-auto mt-5 min-h-[950px] sm:min-h-[850px] lg:min-h-[700px] lg:h-[800px] xl:h-[85vh] bg-slate-900 overflow-hidden font-sans group">

      {/* 1. SLIDER BACKGROUNDS */}
      <div
        className="absolute inset-0 w-full h-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slidesData.map((slide, index) => (
          <Slide key={slide.id} slide={slide} isActive={currentSlide === index} />
        ))}
      </div>

      {/* 2. SLIDER CONTROLS (Dots & Arrows) */}
      <div className="absolute bottom-6 lg:bottom-8 left-0 w-full z-20 pointer-events-none hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4 pointer-events-auto">
          <div className="flex items-center gap-2">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${currentSlide === index ? 'bg-[#6abd8d] w-8' : 'bg-white/40 hover:bg-white w-2'
                  }`}
              />
            ))}
          </div>
          <div className="flex gap-2 ml-4">
            <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors border border-white/10">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors border border-white/10">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. STATIC FORM OVERLAY (Right Side) */}
      {/* UPDATE: items-end with padding-top on mobile, items-center on desktop */}
      <div className="relative lg:absolute inset-0 z-30 pointer-events-none flex items-end lg:items-center pt-[480px] sm:pt-[450px] pb-10 lg:pb-0 lg:pt-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center lg:justify-end">

          {/* Form Card */}
          <div className="pointer-events-auto w-full max-w-[420px] bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-7 shadow-2xl shadow-black/50 border border-slate-100 mx-auto lg:mx-0">

            <div className="mb-5 lg:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">Enquire Now</h3>
              <div className="w-12 h-1 bg-[#6abd8d] rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

              {/* Row 1: Name */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-slate-500 text-[10px] font-bold mb-1 sm:mb-1.5 uppercase tracking-wider">First Name *</label>
                  <input type="text" name="firstName" required onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6abd8d]/50 focus:border-[#6abd8d] transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 text-[10px] font-bold mb-1 sm:mb-1.5 uppercase tracking-wider">Last Name *</label>
                  <input type="text" name="lastName" required onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6abd8d]/50 focus:border-[#6abd8d] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 2: Contact */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-slate-500 text-[10px] font-bold mb-1 sm:mb-1.5 uppercase tracking-wider">Email *</label>
                  <input type="email" name="email" required onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6abd8d]/50 focus:border-[#6abd8d] transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 text-[10px] font-bold mb-1 sm:mb-1.5 uppercase tracking-wider">Phone *</label>
                  <input type="tel" name="phone" required onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6abd8d]/50 focus:border-[#6abd8d] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 3: Course Dropdown */}
              <div>
                <label className="block text-slate-500 text-[10px] font-bold mb-1 sm:mb-1.5 uppercase tracking-wider">Select Course</label>
                <select name="course" onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6abd8d]/50 focus:border-[#6abd8d] transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="Masters and PG Courses">Masters and PG</option>
                  <option value="Bachelors and UG Courses">Bachelors and UG</option>
                  <option value="Diploma Courses">Diploma Courses</option>
                </select>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-slate-500 text-[10px] font-bold mb-1 sm:mb-1.5 uppercase tracking-wider">Message</label>
                <textarea name="message" rows="2" onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6abd8d]/50 focus:border-[#6abd8d] transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-3">
                <button type="submit"
                  className="w-full bg-[#6abd8d] hover:bg-[#7bc89d] text-slate-900 font-bold tracking-wide py-3 sm:py-3.5 text-xl rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg shadow-[#6abd8d]/20 hover:shadow-[#6abd8d]/40 transform hover:-translate-y-0.5"
                >
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>

    </div>
  );
};

export default BannerHero;