import React, { useEffect } from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
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

        {/* Simple Document Header */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#59c28a]" /> Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif leading-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Last Updated: August 2026 | Effective Date: August 1, 2026
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Divine Institute of Management Studies (<strong>"Divine Institute"</strong>, <strong>"DIMS"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website, submit admission inquiries, or use our academic counseling services.
          </div>
        </div>

        {/* Policy Content Sections */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">

          {/* Section 1 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              We collect information that you voluntarily provide to us when you fill out an admission form, request course details, book a free counseling session, or contact our support desk:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li><strong>Contact Information:</strong> Full name, email address, mobile/phone number, WhatsApp number, and residential city/state.</li>
              <li><strong>Academic Details:</strong> Highest educational qualification, passing year, marks/percentage, preferred program (e.g., Online MBA, MCA, BBA), and preferred university.</li>
              <li><strong>Verification Documents:</strong> Academic mark sheets, government ID proofs (Aadhaar, Passport, or Voter ID), photographs, and signatures provided solely for facilitating university admission eligibility checks.</li>
              <li><strong>Technical Data:</strong> Browser type, IP address, device information, and pages visited collected through standard web logs and cookies.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              2. How We Use Your Information
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              The information we collect is used strictly for legitimate educational counseling and admission fulfillment purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li>Connecting you with a senior academic advisor for personalized course and university guidance.</li>
              <li>Verifying eligibility criteria and assisting in application form submission to UGC-DEB approved partner universities.</li>
              <li>Sending important admission updates, enrollment credentials, exam schedules, and fee receipts via SMS, WhatsApp, or email.</li>
              <li>Assisting eligible students in processing Zero-Cost EMI applications through authorized education financing partners.</li>
              <li>Improving our website experience, counselor responsiveness, and customer support.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              3. Information Sharing & Disclosure
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              We respect your trust. <strong>We do not sell, rent, or trade your personal data to third-party marketing companies.</strong> We only share necessary data under the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li><strong>Partner Universities:</strong> With the specific UGC-recognized university you choose to apply to, solely for the purpose of university registration and enrollment.</li>
              <li><strong>Education Loan Partners:</strong> With approved financial service providers (e.g., GrayQuest, LiquiLoans) if you explicitly apply for a monthly zero-cost EMI plan.</li>
              <li><strong>Legal Compliance:</strong> When required by applicable Indian laws, judicial orders, or government authorities.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              4. Data Security & Storage
            </h2>
            <p className="text-slate-600 font-light">
              We implement industry-standard administrative, technical, and physical security measures to protect your personal information against unauthorized access, loss, alteration, or misuse. All sensitive data transmitted via our web forms is encrypted using Secure Sockets Layer (SSL) technology.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              5. Cookies & Tracking Technologies
            </h2>
            <p className="text-slate-600 font-light">
              Our website may use standard cookies and analytics tools to understand visitor traffic, remember preferences, and enhance browsing performance. You have the option to disable cookies through your web browser settings at any time.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              6. Your Rights & Data Choices
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              As a prospective student or user, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li>Request access to or review the personal details submitted to our counselors.</li>
              <li>Request correction or updating of any inaccurate contact information.</li>
              <li>Opt-out of informational counseling communications, WhatsApp updates, or promotional emails at any time by contacting our support team.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              7. Updates to This Privacy Policy
            </h2>
            <p className="text-slate-600 font-light">
              Divine Institute reserves the right to update or modify this Privacy Policy as required by changes in regulatory standards or organizational practices. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          {/* Section 8: Contact & Grievance */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              8. Grievance Officer & Contact Information
            </h2>
            <p className="text-slate-600 font-light mb-4">
              If you have any questions, concerns, or grievances regarding this Privacy Policy or your data, please contact our Grievance Desk:
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="font-bold text-slate-900">Divine Institute of Management Studies (DIMS)</div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#59c28a] shrink-0 mt-0.5" />
                <span><strong>Corporate Office:</strong> 712, 7th Floor, Crops Arcade, Malviya Marg, C-Scheme, Jaipur, Rajasthan - 302001</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#59c28a] shrink-0 mt-0.5" />
                <span><strong>Campus Center:</strong> TA-502, 5th Floor, R-Tech Capital High Street, Apparel Park, Main Mahal Road, Jagatpura, Jaipur</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#59c28a] shrink-0" />
                <span><strong>Helplines:</strong> +91 98284 77772 / +91 98289 77772 / +91 95199 14855</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#59c28a] shrink-0" />
                <span><strong>Email:</strong> info@divineinstitute.co.in</span>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
