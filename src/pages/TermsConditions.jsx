import React, { useEffect } from 'react';
import { FileText, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Divine Institute of Management Studies";
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
            <FileText className="w-4 h-4 text-[#59c28a]" /> Terms of Service
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Last Updated: August 2026 | Effective Date: August 1, 2026
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Welcome to Divine Institute of Management Studies (<strong>"Divine Institute"</strong>, <strong>"DIMS"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>). By accessing our website, inquiring about courses, submitting an application, or utilizing our academic counseling services, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully.
          </div>
        </div>

        {/* Terms Content Sections */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">

          {/* Section 1 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              1. Nature and Scope of Services
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              Divine Institute is an educational advisory and admission guidance institution with over 15+ years of academic consultancy experience.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li>Divine Institute acts as an authorized counseling and admission facilitator for various UGC-DEB approved, NAAC-accredited central, state, private, and deemed universities across India.</li>
              <li>Divine Institute itself is <strong>not a degree-granting university</strong>. All academic programs, curriculum design, degree conferments, student portal accesses, and term-end evaluations are administered directly by the respective partner university chosen by the student.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              2. Student Eligibility & Verification
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              When applying for any degree, diploma, or certificate program:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li>The applicant is responsible for ensuring that they satisfy the minimum academic eligibility criteria (e.g., minimum percentage in 10th, 12th, or graduation) set by the respective university and regulatory statutory bodies.</li>
              <li>Applicants must provide authentic, legitimate, and unaltered academic mark sheets, identity documents, and personal details. Submission of forged or misleading documentation may lead to immediate cancellation of admission by the university without entitlement to a refund.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              3. Free Counseling & University Fee Payments
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              Divine Institute maintains a 100% transparent fee philosophy:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li>Academic counseling, profile analysis, and university comparisons provided by our counselors are completely free of charge.</li>
              <li>Tuition fees, exam fees, registration charges, and LMS charges are payable directly to the chosen university via authorized university payment gateways, official bank accounts, or authorized financing partners.</li>
              <li>Where Zero-Cost EMI or installment facilities are utilized, the agreement is executed directly between the applicant and the verified financial lending institution (e.g., GrayQuest, LiquiLoans) subject to their credit terms and repayment schedules.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              4. Admission Cancellation & Refund Policy
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              All admission cancellations, withdrawals, and fee refund requests are strictly governed by the **University Grants Commission (UGC) Fee Refund Norms** and the specific policies of the respective partner university where the applicant has enrolled:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li>Refund requests must be formally submitted to the university within the prescribed admission timeline.</li>
              <li>Divine Institute does not collect or retain university tuition fees and therefore does not issue direct fee refunds; our counselors assist students in facilitating refund applications with the university according to UGC regulations.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              5. Intellectual Property Rights
            </h2>
            <p className="text-slate-600 font-light">
              All content on this website—including text, graphics, logos, images, icons, and software—is the property of Divine Institute of Management Studies or its content suppliers and is protected under applicable Indian and international copyright and intellectual property laws. Unauthorized reproduction or commercial use is strictly prohibited.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              6. Academic Disclaimers & Limitation of Liability
            </h2>
            <p className="text-slate-600 font-light mb-3">
              While Divine Institute strives to ensure that all course details, university accreditations, fee structures, and semester timelines presented on this website are accurate and up to date:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li>Partner universities reserve the right to modify curriculum syllabi, examination schedules, fee structures, or LMS software platforms in accordance with their academic autonomy and UGC guidelines.</li>
              <li>Divine Institute shall not be liable for any indirect, incidental, or consequential damages resulting from university academic modifications, technical disruptions on university LMS servers, or student non-compliance with university examination requirements.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              7. Governing Law and Jurisdiction
            </h2>
            <p className="text-slate-600 font-light">
              These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of the Republic of India. Any legal disputes, claims, or proceedings arising out of or related to our counseling services or website shall be subject to the exclusive jurisdiction of the competent courts in <strong>Jaipur, Rajasthan, India</strong>.
            </p>
          </section>

          {/* Section 8: Contact Information */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              8. Contact Details & Official Helpdesk
            </h2>
            <p className="text-slate-600 font-light mb-4">
              For any legal questions, clarifications, or support regarding these Terms and Conditions, please contact us:
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

export default TermsConditions;
