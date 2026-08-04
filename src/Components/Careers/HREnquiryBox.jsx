import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

const HREnquiryBox = ({ onDirectApplyClick }) => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden border border-slate-800 font-sans mb-6">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#59c28a]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-[#4ade80] border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
            Direct HR Recruitment Desk
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white leading-tight">
            Don't See the Right Fit? <br />
            <span className="text-[#59c28a]">Send Your Resume Directly to HR</span>
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl font-light">
            We are always looking for passionate talent in academic counseling, student relations, and digital marketing. Share your profile directly with our hiring team.
          </p>

          {/* Contact Strip */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:info@divineinstitute.co.in"
              className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#59c28a]" />
              <span>info@divineinstitute.co.in</span>
            </a>

            <a
              href="tel:+919828477772"
              className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#59c28a]" />
              <span>+91 98284 77772</span>
            </a>

            <button
              onClick={onDirectApplyClick}
              className="flex items-center gap-2 bg-[#59c28a] hover:bg-[#46aa75] text-slate-950 px-5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-md"
            >
              <span>Submit General Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Walk-in Details */}
        <div className="lg:col-span-5 bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl backdrop-blur-md space-y-3 text-xs">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#59c28a]" />
            <span>Walk-In Interview Locations (Jaipur)</span>
          </h4>
          <div className="border-l-2 border-[#59c28a] pl-3 py-0.5">
            <p className="font-bold text-white">Corporate Office (C-Scheme):</p>
            <p className="text-slate-400">712, 7th Floor, Crops Arcade, Malviya Marg, C-Scheme, Jaipur</p>
          </div>
          <div className="border-l-2 border-[#59c28a] pl-3 py-0.5">
            <p className="font-bold text-white">Campus Branch (Jagatpura):</p>
            <p className="text-slate-400">TA-502, 5th Floor, R-Tech Capital High Street, Jagatpura, Jaipur</p>
          </div>
          <p className="text-[11px] text-slate-400 pt-1 border-t border-white/10">
            ⏰ Walk-In Hours: Mon to Sat (10:30 AM – 5:30 PM)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HREnquiryBox;
