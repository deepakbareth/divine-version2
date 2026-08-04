import React, { useState } from 'react';
import { X, CheckCircle2, UploadCloud, Briefcase, User, Mail, Phone, FileText } from 'lucide-react';

const JobApplicationModal = ({ isOpen, onClose, selectedJob }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: selectedJob?.title || 'Academic Counselor',
    experience: '1-2 Years',
    currentLocation: 'Jaipur',
    noticePeriod: 'Immediate / 15 Days',
    message: ''
  });

  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative my-8">
        
        {/* Header Bar */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#59c28a] uppercase block mb-0.5">
              Career Application
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-serif line-clamp-1">
              {selectedJob ? selectedJob.title : "Apply at Divine Institute"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-serif">Application Submitted!</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-light">
                Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our HR recruitment team will review your profile and contact you at <span className="font-semibold text-slate-900">{formData.phone}</span> for the interview schedule.
              </p>
              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="bg-slate-900 hover:bg-[#59c28a] text-white hover:text-slate-950 text-xs font-bold px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#59c28a] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98284 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#59c28a] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#59c28a] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Experience & Notice Period */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Total Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#59c28a] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Fresher (0 Years)">Fresher (0 Years)</option>
                    <option value="1 - 2 Years">1 - 2 Years</option>
                    <option value="3 - 5 Years">3 - 5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Notice Period
                  </label>
                  <select
                    value={formData.noticePeriod}
                    onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#59c28a] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Immediate Joiner">Immediate Joiner</option>
                    <option value="15 Days">15 Days</option>
                    <option value="1 Month">1 Month</option>
                  </select>
                </div>
              </div>

              {/* Resume Upload Box */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Upload Resume / CV (PDF or DOC)
                </label>
                <label className="border-2 border-dashed border-slate-200 hover:border-[#59c28a] bg-slate-50 hover:bg-emerald-50/40 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all">
                  <UploadCloud className="w-6 h-6 text-[#59c28a] mb-1" />
                  <span className="text-xs font-semibold text-slate-700">
                    {fileName ? `Selected: ${fileName}` : "Click to select resume file"}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5">
                    Max size: 5MB (PDF / Word)
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Short Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Introduction / Cover Message
                </label>
                <textarea
                  rows="2"
                  placeholder="Share a short summary of your background and achievements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#59c28a] focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-slate-900 hover:bg-[#59c28a] text-white hover:text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md cursor-pointer mt-2"
              >
                Submit Job Application
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default JobApplicationModal;
