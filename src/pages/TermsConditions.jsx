import React, { useEffect } from 'react';
import { FileText, Mail, Phone, MapPin, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
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

        {/* Document Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[#3ba36f] text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4 text-[#59c28a]" /> Terms of Service & Student Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 font-medium">
            Last Updated: August 2026 | Effective Date: August 1, 2026
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Welcome to Divine Institute of Management Studies (<strong>"Divine Institute"</strong>, <strong>"DIMS"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>). By browsing our website, submitting an inquiry, scheduling an advisory session, or seeking admission facilitation, you acknowledge and agree to comply with the following Terms and Conditions. Please review them carefully.
          </div>
        </div>

        {/* Terms Content Sections */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">01</span>
              <span>Nature of Service & Educational Advisory Scope</span>
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              Divine Institute of Management Studies is an established higher education counseling, career advisory, and admission facilitation organization operating in Jaipur, Rajasthan:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 font-light pl-2">
              <li>Divine Institute acts as an official counselor, university comparison platform, and admission assistance partner for recognized higher education institutions across India.</li>
              <li>Divine Institute itself is <strong>not a university or degree-granting body</strong>. All academic curricula, live/recorded lectures, semester examinations, credit transfers, LMS credentials, and final degree/diploma certificates are conferred directly by the respective partner university or autonomous institute selected by the student.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">02</span>
              <span>Institutional Portfolio & Program Modes</span>
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              Programs facilitated through Divine Institute fall into three transparent categories:
            </p>
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="font-bold text-slate-900 text-sm mb-1">A. UGC-DEB Approved Online Universities:</p>
                <p className="text-xs sm:text-sm text-slate-600 font-light">
                  100% digital programs offering live/recorded classes and remote proctored exams (including NMIMS Online, Amity Online, OP Jindal Global University, Manipal University Jaipur, GLA University Online, Dr. D.Y. Patil Vidyapeeth, Sharda University Online, Chandigarh University, and Jain University).
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="font-bold text-slate-900 text-sm mb-1">B. Open & Distance Learning (ODL) Universities:</p>
                <p className="text-xs sm:text-sm text-slate-600 font-light">
                  Flexible distance degree programs offering structured self-learning material (including Vivekananda Global University - VGU, Suresh Gyan Vihar University - SGVU, GLA Distance, Lovely Professional University - LPU Distance, and ISBM University).
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="font-bold text-slate-900 text-sm mb-1">C. Autonomous Management Institute:</p>
                <p className="text-xs sm:text-sm text-slate-600 font-light">
                  Xaviers Institute of Business Management Studies (XIBMS) operates as an independent autonomous business school providing specialized distance certificate and diploma courses tailored for working professional upskilling.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">03</span>
              <span>100% Free Counseling & Direct Fee Payments</span>
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              Divine Institute maintains complete financial transparency:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 font-light pl-2">
              <li><strong>Zero Counseling Fee:</strong> All academic counseling, career path assessment, and university comparisons offered by Divine counselors are entirely free of cost for students.</li>
              <li><strong>Direct University Payment:</strong> Tuition fees, exam fees, and registration costs are paid directly to the chosen university via authorized online payment gateways, official university portals, or approved education financing channels.</li>
              <li><strong>Zero-Cost EMI Terms:</strong> When opting for monthly installment payment options, the financing agreement is executed directly between the applicant and the verified financial lending NBFC (e.g., GrayQuest, LiquiLoans, Eduvanz) subject to their credit assessment and repayment terms.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">04</span>
              <span>Student Eligibility & Document Authenticity</span>
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              It is the applicant's sole legal responsibility to ensure that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 font-light pl-2">
              <li>They satisfy the minimum eligibility requirements (e.g., minimum percentage in 10th, 12th, or Bachelor's degree) specified by the respective university and regulatory statutory bodies (UGC, AICTE).</li>
              <li>All uploaded certificates, mark sheets, provisional degrees, and identity proofs are genuine and legitimate. Submission of falsified or counterfeit documents may result in immediate admission cancellation by the university without entitlement to any fee refund.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">05</span>
              <span>Admission Cancellation & Fee Refund Policy</span>
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              Admission cancellations, program withdrawals, and fee refund timelines are strictly governed by the <strong>University Grants Commission (UGC) Fee Refund Norms</strong> and the individual policy of the respective partner university:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 font-light pl-2">
              <li>Refund applications must be submitted directly through the university portal within the prescribed statutory admission window.</li>
              <li>Divine Institute does not collect, retain, or withhold university tuition fees and therefore does not directly issue fee refunds. Our student support team assists admitted students in facilitating legitimate cancellation requests with the university administrative board.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">06</span>
              <span>Intellectual Property & Website Usage</span>
            </h2>
            <p className="text-slate-600 font-light">
              All branding, logos, website layout, graphics, text, and proprietary counseling content are the intellectual property of Divine Institute of Management Studies. Logos, trademarks, and emblems of partner universities belong exclusively to their respective institutions and are displayed strictly for factual reference and identification purposes.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">07</span>
              <span>Limitation of Liability & Academic Modifications</span>
            </h2>
            <p className="text-slate-600 font-light mb-3">
              While Divine Institute ensures that all university fee details, syllabus outlines, and accreditation statuses are accurate and updated regularly:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 font-light pl-2">
              <li>Partner universities possess sovereign academic authority to update subject modules, exam patterns, fee schedules, or LMS software platforms in compliance with UGC/AICTE guidelines.</li>
              <li>Divine Institute shall not be liable for academic modifications initiated by universities, server downtime on university examination portals, or student non-compliance with term-end exam schedules.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">08</span>
              <span>Governing Law and Jurisdiction</span>
            </h2>
            <p className="text-slate-600 font-light">
              These Terms and Conditions shall be governed, interpreted, and enforced in accordance with the laws of the Republic of India. Any legal dispute, claim, or grievance arising out of or in connection with our services or website shall be subject to the exclusive jurisdiction of the competent courts in <strong>Jaipur, Rajasthan, India</strong>.
            </p>
          </section>

          {/* Section 9: Official Contact Details */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 text-xs flex items-center justify-center font-mono">09</span>
              <span>Official Institutional Contact & Helpdesk</span>
            </h2>
            <p className="text-slate-600 font-light mb-4">
              For any official clarifications or support regarding these Terms and Conditions, please connect with our administrative desk:
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

export default TermsConditions;
