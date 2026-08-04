import React, { useEffect } from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ArrowLeft, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Divine Institute of Management Studies";
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-24 lg:py-28 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/divine/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#002147] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>

        {/* Document Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[#3ba36f] text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#59c28a]" /> Legal & Data Protection Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif leading-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 font-medium">
            Last Updated: August 2026 | Effective Date: August 1, 2026
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Divine Institute of Management Studies (<strong>"Divine Institute"</strong>, <strong>"DIMS"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>) is deeply dedicated to upholding user trust, confidentiality, and data privacy. This Privacy Policy outlines how we collect, handle, utilize, store, and safeguard your personal and academic information when you access our portal, submit admission inquiries, or engage in our free educational counseling services.
          </div>
        </div>

        {/* Policy Content Sections */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">01</span>
              <span>Information We Collect from Prospective Students</span>
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              We collect information that you voluntarily furnish to our academic counseling desk when you request course syllabi, verify university fee structures, apply for admission assistance, or request a call back:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 font-light pl-2">
              <li><strong>Personal & Contact Data:</strong> Full legal name, date of birth, mobile number, WhatsApp contact, email address, and permanent/current city and state.</li>
              <li><strong>Educational History:</strong> Highest qualification completed (10th, 12th, Bachelor's degree), year of passing, marks percentage/CGPA, academic stream, and preferred program of study (e.g., Online MBA, MCA, BBA, BCA, Distance MA).</li>
              <li><strong>Academic Verification Documents:</strong> Mark sheets, degree certificates, transfer/provisional certificates, valid government identity proofs (Aadhaar Card, Passport, or Voter ID), photographs, and signature copies provided strictly for processing eligibility checks with partner universities.</li>
              <li><strong>Technical Browsing Data:</strong> IP address, device type, browser details, operating system, and engagement patterns recorded via standard secure web server logs.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">02</span>
              <span>Purpose & How We Use Your Data</span>
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              Your data is collected and processed exclusively for legitimate educational guidance and admission facilitation purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 font-light pl-2">
              <li>Assigning a dedicated senior academic advisor to guide you through university comparisons, course accreditations, and career paths.</li>
              <li>Facilitating university enrollment paperwork and digital document verification with your chosen UGC-approved partner university (e.g., NMIMS, Amity, Manipal, OP Jindal, GLA, Chandigarh University, Jain University, VGU, SGVU, LPU, etc.).</li>
              <li>Sending critical notifications regarding admission status, university enrollment IDs, examination deadlines, and LMS login links via SMS, WhatsApp, and email.</li>
              <li>Assisting eligible students with 0% interest Zero-Cost EMI loan documentation through approved education NBFC lending partners.</li>
              <li>Enhancing website performance, user experience, and counselor response time.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">03</span>
              <span>Strict Non-Disclosure & Information Sharing Policy</span>
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              <strong>We strictly DO NOT sell, trade, rent, or commercialize your personal contact details to external marketing agencies or data brokers.</strong> Information is shared solely under controlled circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 font-light pl-2">
              <li><strong>Chosen Partner University:</strong> Shared exclusively with the authorized admission board of the university you elect to apply to for formal student registration and degree enrollment.</li>
              <li><strong>Education Financing Partners:</strong> Shared only upon your explicit request if you apply for Zero-Cost monthly installment plans through authorized lenders (such as GrayQuest, LiquiLoans, Eduvanz).</li>
              <li><strong>Statutory & Legal Requirements:</strong> When mandated by applicable Indian laws, judicial summons, or regulatory authorities.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">04</span>
              <span>Data Protection, Encryption & Storage</span>
            </h2>
            <p className="text-slate-600 font-light">
              We employ robust 256-bit SSL encryption, restricted access protocols, and firewall-protected databases to protect your sensitive personal and academic data against unauthorized access, loss, or misuse. Our operational procedures adhere strictly to the guidelines of the <strong>Information Technology Act, 2000</strong> and the <strong>Digital Personal Data Protection (DPDP) Act, India</strong>.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">05</span>
              <span>Cookies & Analytics</span>
            </h2>
            <p className="text-slate-600 font-light">
              Our website may utilize standard session cookies to analyze web traffic, remember navigation preferences, and enhance browsing speed. You retain complete authority to modify cookie settings or disable them entirely via your web browser settings without impacting core website accessibility.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">06</span>
              <span>Your Rights as a Student</span>
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              As an applicant or visitor, you have complete sovereignty over your information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 font-light pl-2">
              <li><strong>Right to Access & Rectification:</strong> You may request a review or update of your submitted contact details and documents at any time.</li>
              <li><strong>Right to Opt-Out:</strong> You can unsubscribe from informational WhatsApp broadcasts or promotional emails by sending an opt-out request to our helpline.</li>
              <li><strong>Right to Data Erasure:</strong> Prospective students whose admissions are not processed may request the complete deletion of their uploaded verification documents from our local inquiry systems.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">07</span>
              <span>Policy Amendments</span>
            </h2>
            <p className="text-slate-600 font-light">
              Divine Institute reserves the right to periodically amend or update this Privacy Policy to reflect changing statutory standards or enhanced institutional practices. Revisions will be published on this URL with an updated timestamp.
            </p>
          </section>

          {/* Section 8: Grievance Officer & Contact Information */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">08</span>
              <span>Grievance Officer & Data Protection Helpdesk</span>
            </h2>
            <p className="text-slate-600 font-light mb-4">
              For any privacy inquiries, data rectification requests, or grievances, please reach out to our designated Data Protection & Grievance Desk:
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="font-bold text-slate-900 text-base font-serif">Divine Institute of Management Studies (DIMS)</div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#59c28a] shrink-0 mt-0.5" />
                <span><strong>Corporate Office:</strong> 712, 7th Floor, Crops Arcade, Malviya Marg, C-Scheme, Jaipur, Rajasthan - 302001</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#59c28a] shrink-0 mt-0.5" />
                <span><strong>Campus Branch:</strong> TA-502, 5th Floor, R-Tech Capital High Street, Apparel Park, Main Mahal Road, Jagatpura, Jaipur</span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#59c28a] shrink-0" />
                <span><strong>Helplines:</strong> +91 98284 77772 &nbsp;|&nbsp; +91 98289 77772 &nbsp;|&nbsp; +91 95199 14855</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#59c28a] shrink-0" />
                <span><strong>Email:</strong> <a href="mailto:info@divineinstitute.co.in" className="text-emerald-700 font-semibold hover:underline">info@divineinstitute.co.in</a></span>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
