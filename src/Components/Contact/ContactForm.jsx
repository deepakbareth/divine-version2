import React, { useState } from 'react';
import { Send, CheckCircle, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    course: 'MBA',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      course: 'MBA',
      message: ''
    });
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-[#002147]/10 text-[#002147] rounded-xl">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 font-serif">Send Us a Direct Message</h3>
          <p className="text-slate-500 text-xs sm:text-sm">Fill out the form below and an expert counselor will call you.</p>
        </div>
      </div>

      {isSubmitted ? (
        <div className="text-center py-10">
          <CheckCircle className="w-16 h-16 text-[#59c28a] mx-auto mb-4 animate-bounce" />
          <h4 className="text-2xl font-extrabold text-[#002147] mb-2 font-serif">Message Sent Successfully!</h4>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
            Thank you, <strong>{formData.fullName}</strong>. Our senior academic counselor from Divine Institute will call you at <strong>{formData.mobile}</strong>.
          </p>
          <button
            onClick={handleReset}
            className="bg-[#002147] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#001733] transition-colors text-sm uppercase tracking-wider cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter your complete name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                maxLength="10"
                placeholder="10-digit mobile no."
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Interested Course
              </label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
              >
                <option value="MBA">Online MBA</option>
                <option value="BBA">BBA</option>
                <option value="MCA">MCA</option>
                <option value="BCA">BCA</option>
                <option value="MA">MA / M.Com</option>
                <option value="BA">BA / B.Com</option>
                <option value="B.Ed">B.Ed / M.Ed</option>
                <option value="Diploma">Polytechnic / Diploma</option>
                <option value="Ph.D">Ph.D / Doctorate</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Your Query / Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us what degree or guidance you are looking for..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#59c28a] hover:bg-[#48b078] text-slate-950 font-extrabold py-4 px-6 rounded-xl transition-all shadow-lg shadow-[#59c28a]/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
          >
            <Send className="w-4 h-4" /> Send Inquiry Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
