// =========================================================================
// GLA UNIVERSITY (DISTANCE & ODL)
// =========================================================================

import glaLogo from '../../assets/universities/gla.jpg';

export const glaDistanceData = {
  id: "gla-distance",
  slug: "gla-distance",
  name: "GLA University (Distance & ODL)",
  shortName: "GLA Distance",
  category: "distance",
  mode: "Distance & ODL Mode",
  logo: glaLogo,
  badge: "UGC-DEB Approved",
  naacGrade: "NAAC A+ Grade",
  location: "Mathura, Uttar Pradesh",
  establishedYear: "1998",
  rating: "4.4",
  reviewsCount: "16",
  tagline: "Quality Open & Distance Learning for Career Advancement",
  aboutTitle: "About GLA Distance Education",
  description: "GLA University Centre for Distance & Open Learning offers high-standard management and commerce degree courses with comprehensive self-instructional study material for working students.",
  approvals: ["UGC-DEB", "AICTE", "NAAC A+"],
  highlights: [
    { label: "Established In", value: "1998" },
    { label: "Accreditation", value: "NAAC A+ Grade" },
    { label: "Study Material", value: "Printed Books + Online Support" }
  ],
  programs: [
    { name: "Distance BBA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 from recognized board", monthlyEmi: "₹2,400 / month", totalFee: "₹58,000", description: "Undergraduate business administration program." },
    { name: "Distance B.Com", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 with Commerce / Arts", monthlyEmi: "₹2,000 / month", totalFee: "₹48,000", description: "Commerce curriculum for accounts and finance." },
    { name: "Diploma in Business Administration", level: "Diploma", category: "UG Courses", duration: "1 Year", eligibility: "10+2 in any stream", monthlyEmi: "₹2,500 / month", totalFee: "₹30,000", description: "Fast-track 1-year business diploma." }
  ],
  admissionProcess: [
    {
      step: 1,
      title: "Select Your Course",
      description: "Choose from distance degree and diploma programs tailored for working individuals."
    },
    {
      step: 2,
      title: "Submit Documents",
      description: "Upload previous qualification certificates for verification by the admissions team."
    },
    {
      step: 3,
      title: "Fee Payment",
      description: "Complete the tuition fee payment through official university channels."
    },
    {
      step: 4,
      title: "Get Enrollment ID",
      description: "Receive your registration number and begin your self-paced distance learning journey."
    }
  ],
  hiringPartners: ["TCS", "Wipro", "HCL", "Tech Mahindra"],
  faqs: [
    { q: "Is GLA Distance degree valid for government examinations?", a: "Yes. Degrees are approved by UGC-DEB and valid across government recruitments." }
  ]
};
