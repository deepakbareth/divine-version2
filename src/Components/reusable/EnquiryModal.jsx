import React, { useState } from 'react';
import { X, CheckCircle, Phone, Send, Download, Calendar, UserCheck } from 'lucide-react';
import brochurePdf from '../../assets/home/Brochure.pdf';

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

  const isBrochure = title.toLowerCase().includes('brochure');
  const isSchedule = title.toLowerCase().includes('schedule');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) return;
    setIsSubmitted(true);

    // Automatic download of actual Brochure.pdf when brochure form is submitted
    if (isBrochure) {
      const link = document.createElement('a');
      link.href = brochurePdf;
      link.download = 'Divine_Institute_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({ fullName: '', mobile: '', email: '', course: 'MBA', city: '' });
    onClose();
  };

  const getHeaderIcon = () => {
    if (title.toLowerCase().includes('brochure')) return <Download className="w-5 h-5 sm:w-6 sm:h-6 text-[#59c28a]" />;
    if (title.toLowerCase().includes('schedule')) return <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
    if (title.toLowerCase().includes('talk')) return <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />;
    return <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#59c28a]" />;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container - Added max-h and overflow-y-auto for mobile screens */}
      <div className="bg-white w-full max-w-lg max-h-[95dvh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 relative transform transition-all flex flex-col">

        {/* Close Button - Adjusted position and size for mobile */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 bg-slate-100/30 hover:bg-slate-200 rounded-full transition-colors z-20 cursor-pointer backdrop-blur-sm"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Header - Added pr-12 to prevent text from going under the close button */}
        <div className="bg-[#002147] text-white p-5 sm:p-8 pr-12 sm:pr-14 relative shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <div className="p-2 sm:p-2.5 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-md shrink-0">
              {getHeaderIcon()}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">{title}</h3>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mt-1.5">
            {subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-4 sm:py-6">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#59c28a] mx-auto mb-3 sm:mb-4 animate-bounce" />
              <h4 className="text-xl sm:text-2xl font-extrabold text-[#002147] mb-2">Thank You!</h4>
              <p className="text-slate-600 text-xs sm:text-sm mb-5 sm:mb-6">
                {isBrochure
                  ? "Your University Prospectus & Fee Brochure request has been received. Our team will send the PDF directly to your mobile number."
                  : isSchedule
                    ? "Your 1-on-1 counseling call has been scheduled. Our senior education expert will call you shortly."
                    : "Your request has been received. Our expert academic advisor from Divine Institute will call you within 15 minutes."}
              </p>

              <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 text-left text-[11px] sm:text-xs text-slate-600 space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                <p className="font-semibold text-slate-900">Direct Helpline Assistance:</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#59c28a]" />
                  <span>Call Us: <a href="tel:9828477772" className="font-bold text-[#002147] hover:underline">9828477772</a> / <a href="tel:9828977772" className="font-bold text-[#002147] hover:underline">9828977772</a></span>
                </div>
              </div>

              {isBrochure && (
                <a
                  href={brochurePdf}
                  download="Divine_Institute_Brochure.pdf"
                  className="mb-3 sm:mb-4 flex items-center justify-center gap-2 w-full bg-[#59c28a] hover:bg-[#48b078] text-slate-950 font-extrabold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl transition-all shadow-md text-[11px] sm:text-xs uppercase tracking-wider text-center"
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Click to Download Brochure PDF Again
                </a>
              )}

              <button
                onClick={handleResetAndClose}
                className="w-full bg-[#002147] hover:bg-[#001733] text-white font-bold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl transition-colors text-[11px] sm:text-xs uppercase tracking-wider shadow-md cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your complete name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
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
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
                    Interested Degree
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
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
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-3 sm:mt-4 bg-[#59c28a] hover:bg-[#48b078] text-slate-950 font-extrabold py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all shadow-lg shadow-[#59c28a]/30 hover:shadow-[#59c28a]/50 flex items-center justify-center gap-2 text-[11px] sm:text-sm uppercase tracking-wider cursor-pointer"
              >
                {isBrochure ? (
                  <>
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span className="truncate">Download Brochure PDF Now</span>
                  </>
                ) : isSchedule ? (
                  <>
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span className="truncate">Confirm & Schedule Call</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span className="truncate">Submit & Get Instant Callback</span>
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