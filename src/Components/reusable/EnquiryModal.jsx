import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Phone, Send, Download, Calendar, UserCheck } from 'lucide-react';
import brochurePdf from '../../assets/home/Brochure.pdf';

const EnquiryModal = ({
  isOpen,
  onClose,
  title = "Get Free Academic Counselling",
  subtitle = "Fill in your details below and our senior education experts will connect with you shortly."
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    course: 'Online MBA',
    city: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleResetAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isBrochure = title.toLowerCase().includes('brochure');
  const isSchedule = title.toLowerCase().includes('schedule');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) return;
    setIsSubmitted(true);

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
    setFormData({ fullName: '', mobile: '', email: '', course: 'Online MBA', city: '' });
    onClose();
  };

  const getHeaderIcon = () => {
    if (title.toLowerCase().includes('brochure')) return <Download className="w-4 h-4 sm:w-5 sm:h-5 text-[#59c28a]" />;
    if (title.toLowerCase().includes('schedule')) return <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />;
    if (title.toLowerCase().includes('talk')) return <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />;
    return <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#59c28a]" />;
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
      onClick={handleResetAndClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[95vh] sm:max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()} // Stop closing when clicking inside modal
      >
        {/* Modal Header */}
        <div className="bg-[#002147] text-white p-5 sm:p-7 pr-12 sm:pr-14 relative shrink-0">
          {/* Close Button */}
          <button
            type="button"
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 sm:p-2 rounded-full text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 mb-2">
            <div className="p-2 sm:p-2.5 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-md shrink-0 mt-1 sm:mt-0">
              {getHeaderIcon()}
            </div>
            <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white leading-snug">
              {title}
            </h3>
          </div>
          <p className="text-slate-300 text-[11px] sm:text-sm leading-relaxed font-light mt-1">
            {subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-4 sm:py-6">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#59c28a] mx-auto mb-3 sm:mb-4 animate-bounce" />
              <h4 className="text-xl sm:text-2xl font-extrabold text-[#002147] mb-2 font-serif">
                Thank You, {formData.fullName}!
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-5 sm:mb-6 leading-relaxed px-2">
                {isBrochure
                  ? "Your University Prospectus & Fee Brochure request has been received. Our team will send the PDF directly to your mobile number."
                  : isSchedule
                    ? "Your 1-on-1 counseling call has been scheduled. Our senior education expert will call you shortly."
                    : "Your admission enquiry has been received. Our senior education expert from Divine Institute will call you on your registered mobile number shortly."}
              </p>

              <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 text-left text-[11px] sm:text-xs text-slate-600 space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                <p className="font-semibold text-slate-900">Direct Helpline Numbers:</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 font-medium">
                  <span className="flex items-center gap-1 text-[#002147]">
                    <Phone className="w-3.5 h-3.5 text-[#59c28a]" />
                    <a href="tel:9828477772" className="hover:underline font-bold">+91 98284 77772</a>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1 text-[#002147]">
                    <Phone className="w-3.5 h-3.5 text-[#59c28a] sm:hidden" />
                    <a href="tel:9828977772" className="hover:underline font-bold">+91 98289 77772</a>
                  </span>
                </div>
              </div>

              {isBrochure && (
                <a
                  href={brochurePdf}
                  download="Divine_Institute_Brochure.pdf"
                  className="mb-3 flex items-center justify-center gap-2 w-full bg-[#59c28a] hover:bg-[#48b078] text-slate-950 font-extrabold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl transition-all shadow-md text-[10px] sm:text-xs uppercase tracking-wider text-center"
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Download Brochure Again
                </a>
              )}

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full bg-[#002147] hover:bg-[#001733] text-white font-bold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl transition-colors text-[10px] sm:text-xs uppercase tracking-wider shadow-md cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your complete name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
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
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
                    Interested Course
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
                  >
                    <option value="Online MBA">Online MBA</option>
                    <option value="Online BBA">Online BBA</option>
                    <option value="Online MCA">Online MCA</option>
                    <option value="Online BCA">Online BCA</option>
                    <option value="MA / M.Com">MA / M.Com</option>
                    <option value="BA / B.Com">BA / B.Com</option>
                    <option value="B.Ed / M.Ed">B.Ed / M.Ed</option>
                    <option value="Polytechnic / Diploma">Polytechnic / Diploma</option>
                    <option value="Ph.D / Doctorate">Ph.D / Doctorate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 sm:mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:border-[#59c28a] focus:ring-2 focus:ring-[#59c28a]/20 outline-none text-sm text-slate-800 transition-all bg-slate-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 sm:mt-3 bg-[#59c28a] hover:bg-[#48b078] text-slate-950 font-extrabold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl transition-all shadow-lg shadow-[#59c28a]/30 hover:shadow-[#59c28a]/50 flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm uppercase tracking-wider cursor-pointer"
              >
                {isBrochure ? (
                  <>
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span>Download Brochure PDF Now</span>
                  </>
                ) : isSchedule ? (
                  <>
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span>Confirm & Schedule Call</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span>Submit & Get Free Guidance</span>
                  </>
                )}
              </button>

              <p className="text-[10px] sm:text-[11px] text-slate-400 text-center font-normal pt-1">
                🔒 100% Privacy Guaranteed • Direct Admission Help
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;