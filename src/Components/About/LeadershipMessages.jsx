import React, { useState } from 'react';
import { Quote, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import rohitMudgal from '../../assets/about/founder2.jpg'
import mdmessage from '../../assets/about/Director.jpg'

const leadershipData = [
  {
    id: "founder",
    title: "Founder's Message",
    name: "Rohit Mudgal",
    role: "Founder Of Divine Institute",
    image: rohitMudgal,
    themeColor: "#59c28a",
    imageAccent: "#92e0b3",
    iconBg: "bg-[#92e0b3]/20",
    isReversed: false,
    hasBorder: true,
    paragraphs: [
      "It brings me immense joy and pride to welcome you to Divine Institute. As the founder of this institution, I envisioned a place where education transcends boundaries, where the pursuit of knowledge knows no limitations, and where your dreams can flourish.",
      "Our journey began with a simple yet profound belief: that education should be accessible to all, regardless of where you are or what you do. Divine Institute was founded on the principle that education should empower you to achieve your goals, whether you're in the workforce, raising a family, or facing any other life commitments.",
      "We understand the challenges that come with balancing a full-time job and the desire to learn and grow. That's why we've made it our mission to provide you with a flexible, supportive, and enriching educational experience. Our commitment to excellence in education is unwavering, and we take immense pride in watching our students excel in their chosen paths.",
      "At Divine Institute, we believe that education is not just a means to an end but a lifelong journey. Our diverse range of programs is designed to cater to your unique needs and aspirations. Whether you're pursuing a new career, enhancing your existing skills, or simply exploring your passion for learning, we are here to guide you every step of the way.",
      "As you embark on this educational journey with us, remember that Divine Institute is more than an institution; it's a community of learners, mentors, and achievers. Our dedicated faculty, staff, and support teams are committed to your success, and we encourage you to lean on them for guidance and support.",
      "I want to extend my heartfelt gratitude to each one of you for choosing Divine Institute as your educational partner. Together, we will continue to break down barriers, expand horizons, and open doors to a world of knowledge and opportunity.",
      "Welcome to Divine Institute, where your dreams find the wings to soar."
    ]
  },
  {
    id: "director",
    title: "Director's Message",
    name: "Shweta Mudgal",
    role: "Director Of Divine Institute",
    image: mdmessage,
    themeColor: "#B71C1C",
    imageAccent: "#B71C1C",
    iconBg: "bg-red-100",
    isReversed: true,
    hasBorder: false,
    paragraphs: [
      "Welcome to Divine Institute, a place where education and ambition come together to shape a brighter future.",
      "At Divine Institute, our mission is to provide accessible and high-quality education to those who aspire to learn and grow, even while juggling the demands of a full-time job and other responsibilities. We understand the challenges you face and are committed to making your educational journey a smooth and rewarding one.",
      "Our dedicated team of educators and support staff is here to guide you every step of the way. We offer a wide range of distance education programs designed to meet the diverse needs and goals of our students. Whether you're looking to advance in your current career, switch professions, or simply expand your knowledge, we have the resources and expertise to help you succeed.",
      "We believe in the power of knowledge to transform lives, and we are dedicated to providing you with the tools and opportunities you need to reach your full potential. Our online courses are carefully curated to be engaging, informative, and adaptable to your busy schedule.",
      "As the Director of Divine Institute, I am personally committed to your success. I encourage you to explore our programs, connect with our counsellors, and make the most of the resources we offer. Your journey toward personal and professional growth starts here.",
      "Thank you for choosing Divine Institute as your educational partner. Together, we will turn your dreams into reality.",
      "Best wishes for a successful journey!"
    ]
  }
];

// Reusable child component for clean, professional layout and state isolation
const LeadershipRow = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { title, name, role, image, paragraphs, themeColor, imageAccent, iconBg, isReversed, hasBorder } = data;

  return (
    <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-start ${hasBorder ? 'mb-24 pb-12 border-b border-slate-200/60' : ''}`}>

      {/* Image Column */}
      <div className={`lg:col-span-4 relative group ${isReversed ? 'order-1 lg:order-2' : ''}`}>
        <div
          className="absolute inset-0 rounded-[2rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"
          style={{ backgroundColor: imageAccent }}
        ></div>
        <div className="relative bg-white p-5 rounded-[2rem] shadow-xl border border-slate-100">
          <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 mb-6 relative">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-950 font-serif">{name}</h3>
            <p
              className="text-sm font-semibold uppercase tracking-wider mt-1"
              style={{ color: themeColor }}
            >
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* Text Column */}
      <div className={`lg:col-span-8 space-y-6 relative ${isReversed ? 'order-2 lg:order-1' : ''}`}>
        <div className="absolute -top-10 -left-6 text-slate-200/50 hidden md:block select-none">
          <Quote className="w-20 h-20 fill-current" />
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`} style={{ color: themeColor }}>
            <GraduationCap className="w-5 h-5" />
          </div>
          <h4 className="text-2xl font-extrabold text-slate-900 font-serif">{title}</h4>
        </div>

        <div className="text-slate-600 text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            {paragraphs.slice(0, 3).map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 overflow-hidden pt-4"
              >
                {paragraphs.slice(3).map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 flex items-center gap-1 text-sm font-bold transition-colors focus:outline-none cursor-pointer"
            style={{ color: themeColor }}
          >
            {isExpanded ? (
              <>Read Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Read More <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>

    </div>
  );
};

// Main Component mapping leadership rows dynamically
const LeadershipMessages = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-24 font-sans relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#92e0b3]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block px-5 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-slate-800 font-bold text-xs tracking-widest uppercase mb-4">
            <span className="text-[#59c28a]">✦</span> Leadership Voice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif">
            Messages from our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59c28a] to-[#92e0b3]">Guides & Mentors</span>
          </h2>
        </div>

        {/* Dynamic Message Rows */}
        {leadershipData.map((data) => (
          <LeadershipRow key={data.id} data={data} />
        ))}

      </div>
    </section>
  );
};

export default LeadershipMessages;
