import React, { useState } from 'react';
import { X, CheckCircle, Phone, Send, Download, Calendar, UserCheck } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose, title = "Get Free Academic Counselling", subtitle = "Fill in your details below and our senior education experts will connect with you shortly." }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    course: 'MBA',
    city: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) return;
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({ fullName: '', mobile: '', email: '', course: 'MBA', city: '' });
    onClose();
  };

  const getHeaderIcon = () => {
    if (title.toLowerCase().includes('brochure')) return <Download className="w-6 h-6 text-[#59c28a]" />;
    if (title.toLowerCase().includes('schedule')) return <Calendar className="w-6 h-6 text-amber-400" />;
    if (title.toLowerCase().includes('talk')) return <Phone className="w-6 h-6 text-emerald-400" />;
    return <UserCheck className="w-6 h-6 text-[#59c28a]" />;
  };

  const isBrochure = title.toLowerCase().includes('brochure');
  const isSchedule = title.toLowerCase().includes('schedule');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative transform transition-all">

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#002147] text-white p-6 sm:p-8 relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md">
              {getHeaderIcon()}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">{title}</h3>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mt-1">
            {subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6">
              <CheckCircle className="w-16 h-16 text-[#59c28a] mx-auto mb-4 animate-bounce" />
              <h4 className="text-2xl font-extrabold text-[#002147] mb-2">Thank You!</h4>
              <p className="text-slate-600 text-sm mb-6">
                {isBrochure
                  ? "Your University Prospectus & Fee Brochure request has been received. Our team will send the PDF directly to your mobile number."
                  : isSchedule
                    ? "Your 1-on-1 counseling call has been scheduled. Our senior education expert will call you shortly."
                    : "Your request has been received. Our expert academic advisor from Divine Institute will call you within 15 minutes."}
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs text-slate-600 space-y-2 mb-6">
                <p className="font-semibold text-slate-900">Direct Helpline Assistance:</p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#59c28a]" />
                  <span>Call Us: <a href="tel:9828477772" className="font-bold text-[#002147] hover:underline">9828477772</a> / <a href="tel:9828977772" className="font-bold text-[#002147] hover:underline">9828977772</a></span>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full bg-[#002147] hover:bg-[#001733] text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-wider shadow-md cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Interested Degree
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
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

              <button
                type="submit"
                className="w-full mt-2 bg-[#59c28a] hover:bg-[#48b078] text-slate-950 font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-[#59c28a]/30 hover:shadow-[#59c28a]/50 flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
              >
                {isBrochure ? (
                  <>
                    <Download className="w-4 h-4" /> Download Brochure PDF Now
                  </>
                ) : isSchedule ? (
                  <>
                    <Calendar className="w-4 h-4" /> Confirm & Schedule Call
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Submit & Get Instant Callback
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
