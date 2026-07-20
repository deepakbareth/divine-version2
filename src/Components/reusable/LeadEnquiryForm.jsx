import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const LeadEnquiryForm = ({ 
  title = "Request Free 1:1 Counselling", 
  subtitle = "Talk to our expert academic advisors & get direct admission guidance.",
  buttonText = "Get Free Counselling",
  courseName = ""
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: courseName || 'Online MBA',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
      
      {/* Top Gradient Line Accent */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#59c28a] to-[#92e0b3]"></div>

      {submitted ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-serif">Thank You!</h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
            Your inquiry has been received. Our senior academic counsellor will get in touch with you shortly on <span className="font-bold text-slate-900">{formData.phone}</span>.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-[#59c28a] font-bold uppercase tracking-wider underline cursor-pointer"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#59c28a] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Mobile Number *</label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#59c28a] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#59c28a] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Course Interested</label>
            <input
              type="text"
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#59c28a] focus:bg-white transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-[#59c28a] hover:bg-[#46aa75] text-white font-bold text-sm tracking-wider uppercase transition-colors shadow-lg shadow-[#59c28a]/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <span>{buttonText}</span>
            <Send className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-slate-400 text-center leading-normal">
            🔒 100% Privacy Guaranteed. No spam calls.
          </p>
        </form>
      )}

    </div>
  );
};

export default LeadEnquiryForm;
