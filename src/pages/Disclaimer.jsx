import React, { useEffect } from 'react';
import { AlertCircle, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Disclaimer = () => {
  useEffect(() => {
    document.title = "Academic Disclaimer | Divine Institute of Management Studies";
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
            <AlertCircle className="w-4 h-4 text-[#59c28a]" /> Academic & Legal Notice
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif leading-tight">
            Disclaimer
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Last Updated: August 2026 | Effective Date: August 1, 2026
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Please read this official Disclaimer carefully before using the website, reviewing course details, or seeking admission guidance through Divine Institute of Management Studies (<strong>"Divine Institute"</strong>, <strong>"DIMS"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>).
          </div>
        </div>

        {/* Disclaimer Content Sections */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">

          {/* Section 1 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              1. Institutional Identity & Scope of Services
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              Divine Institute of Management Studies (DIMS) is an independent educational consultancy and academic counseling institution with over 15+ years of experience in guiding students and working professionals.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li>Divine Institute is <strong>not a degree-granting university or autonomous academic awarding body</strong>. We function as an authorized academic facilitator, admission guidance center, and counseling support desk for various UGC-DEB approved, NAAC-accredited central, state, private, and deemed universities across India.</li>
              <li>All degrees, diplomas, and certifications are conferred directly by the respective partner university chosen by the student upon successful fulfillment of academic coursework, attendance requirements, and examinations.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              2. Accuracy of Course Details & University Autonomy
            </h2>
            <p className="mb-3 text-slate-600 font-light">
              While Divine Institute makes every effort to ensure that all information—including course curricula, eligibility criteria, fee structures, specializations, and semester timetables—is authentic and up to date:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li>Partner universities exercise complete academic autonomy and reserve the right to revise course syllabi, fee schedules, examination formats, admission deadlines, or LMS platforms in accordance with University Grants Commission (UGC) guidelines.</li>
              <li>Students are advised to cross-verify specific statutory regulations with their dedicated Divine counselor or via the respective university's official portal.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              3. Trademarks, Logos & Brand Names
            </h2>
            <p className="text-slate-600 font-light">
              All logos, university emblems, crests, brand names, and statutory accreditation marks (such as UGC, DEB, AICTE, NAAC, NIRF, AIU, WES, and partner university names) displayed on this website are the registered trademarks and intellectual property of their respective statutory bodies and institutions. Their presence on this platform is solely for informational identification, academic comparison, and student reference purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              4. Admissions, Evaluations & Placements
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-light pl-2">
              <li><strong>Admission Confirmation:</strong> Divine Institute provides profile assessment and documentation support. Final admission confirmation, enrollment number issuance, and LMS login allocation are subject to verification and approval by the partner university's admission board.</li>
              <li><strong>Examinations:</strong> Term-end online proctored examinations, question papers, grading, and result declarations are administered exclusively by the respective university's controller of examinations.</li>
              <li><strong>Placement Assistance:</strong> Career guidance, resume workshops, mock interviews, and virtual placement drives are provided to assist students. Final employment offers and salary packages depend entirely on candidate merit, interview performance, and corporate hiring criteria.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              5. Third-Party Links & Financing Partners
            </h2>
            <p className="text-slate-600 font-light">
              Our website may contain links to external university portals, authorized fee payment gateways, and approved education financing partners (such as GrayQuest, LiquiLoans, Eduvanz for Zero-Cost EMI). Divine Institute does not operate or control third-party web servers and shall not be held responsible for the content, privacy practices, or technical reliability of third-party platforms.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-slate-600 font-light">
              In no event shall Divine Institute of Management Studies, its directors, counselors, or staff be liable for any direct, indirect, incidental, or consequential damages resulting from the use of this website, delay in university document processing, or university policy amendments beyond our operational control.
            </p>
          </section>

          {/* Section 7: Contact Information */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-3">
              7. Questions & Academic Inquiries
            </h2>
            <p className="text-slate-600 font-light mb-4">
              If you require any clarification regarding this Disclaimer or our academic counseling services, please contact our administrative desk:
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

export default Disclaimer;
