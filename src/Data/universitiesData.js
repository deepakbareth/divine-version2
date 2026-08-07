// Import local partner university logo assets
import amityLogo from '../assets/universities/amity.jpg';
import chandigarhLogo from '../assets/universities/chandigarh.jpg';
import glaLogo from '../assets/universities/gla.jpg';
import gyanLogo from '../assets/universities/gyan.jpg';
import opjindalLogo from '../assets/universities/opjindal.jpg';
import nmimsLogo from '../assets/universities/nmims.jpg';
import isbmLogo from '../assets/universities/isbm.jpg';
import manipalLogo from '../assets/universities/manipal.jpg';
import vivekanandaLogo from '../assets/universities/vivekananda.jpg';
import xibmsLogo from '../assets/universities/xibms.jpg';
import dpuLogo from '../assets/universities/dpu.jpg';
import shardaLogo from '../assets/universities/sharda.jpg';
import jainLogo from '../assets/universities/jain.jpg';
import lovelyLogo from '../assets/universities/lovely.jpg';

export const universitiesData = [
  // ==========================================
  // 1. ONLINE UNIVERSITIES (9 PARTNERS)
  // ==========================================
  {
    id: "nmims-cdoe",
    slug: "nmims-cdoe",
    name: "NMIMS CDOE (Narsee Monjee)",
    category: "online",
    logo: nmimsLogo,
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A+ Grade",
    location: "Mumbai, Maharashtra",
    description: "NMIMS Center for Distance and Online Education is one of India's premier management institutions, delivering flexible, top-tier degree programs with live interactive lectures and industry-focused pedagogy.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "Cat-1 Autonomy"],
    popularCourses: ["Online MBA", "Executive MBA", "Online BBA", "Online B.Com"],
    establishedYear: "1981",
    mode: "100% Online Learning"
  },
  {
    id: "amity-online",
    slug: "amity-online",
    name: "Amity Online University",
    category: "online",
    logo: amityLogo,
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A+ Grade",
    location: "Noida, Uttar Pradesh",
    description: "Amity Online University offers globally recognized undergraduate and postgraduate degree programs designed for working professionals, featuring international faculty and comprehensive LMS support.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "WES Recognized"],
    popularCourses: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    establishedYear: "2005",
    mode: "100% Online Learning"
  },
  {
    id: "op-jindal-online",
    slug: "op-jindal-online",
    name: "OP Jindal Global University Online",
    category: "online",
    logo: opjindalLogo,
    badge: "Institute of Eminence",
    naacGrade: "NAAC A Grade",
    location: "Sonipat, Haryana",
    description: "OP Jindal Global University Online provides world-class management, law, and international affairs programs fostering global leadership skills, research acumen, and multidisciplinary expertise.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A", "QS World Ranked"],
    popularCourses: ["Online MBA", "Online MA", "Executive PG Diplomas", "Online BBA"],
    establishedYear: "2009",
    mode: "100% Online Learning"
  },
  {
    id: "manipal-online",
    slug: "manipal-online",
    name: "Online Manipal (Manipal University Jaipur)",
    category: "online",
    logo: manipalLogo,
    badge: "UGC-DEB Entitled",
    naacGrade: "NAAC A+ Grade",
    location: "Jaipur, Rajasthan",
    description: "Online Manipal (MUJ) delivers UGC-entitled online degree programs with 500+ hiring partners, free Coursera enterprise access, and 100% online flexibility.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "NIRF #58", "WES Recognized"],
    popularCourses: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    establishedYear: "2011",
    mode: "100% Online Learning"
  },
  {
    id: "gla-online",
    slug: "gla-online",
    name: "GLA University Online",
    category: "online",
    logo: glaLogo,
    badge: "UGC-DEB Entitled",
    naacGrade: "NAAC A+ Accredited",
    location: "Mathura & Noida, Uttar Pradesh",
    description: "GLA University Online offers UGC-entitled, NAAC A+ and IACBE accredited degree programs with 28+ years of academic heritage, 0% EMI financing, and strong placement tie-ups.",
    approvals: ["UGC-DEB", "NAAC A+", "IACBE", "ACCA", "AIU", "12-B Status", "NIRF Ranked"],
    popularCourses: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    establishedYear: "1998",
    mode: "100% Online Learning"
  },
  {
    id: "dy-patil-online",
    slug: "dy-patil-online",
    name: "DY Patil Vidyapeeth Online (DPU)",
    category: "online",
    logo: dpuLogo,
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A++ Grade",
    location: "Pune, Maharashtra",
    description: "Dr. D. Y. Patil Vidyapeeth Online offers accredited business administration programs tailored for modern career advancement with self-paced e-learning content and live webinars.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A++", "NIRF Top 50"],
    popularCourses: ["Online MBA", "Online BBA", "Executive MBA", "Certificate Programs"],
    establishedYear: "2003",
    mode: "100% Online Learning"
  },
  {
    id: "sharda-online",
    slug: "sharda-online",
    name: "Sharda University Online",
    category: "online",
    logo: shardaLogo,
    badge: "UGC Entitled & NAAC A+",
    naacGrade: "NAAC A+ Grade",
    nirfRank: "#87 NIRF (2025)",
    location: "Greater Noida, Uttar Pradesh",
    description: "Sharda University Online offers career-oriented, globally recognized online degree courses with 100% placement assistance, modern LMS, and zero-cost EMI options.",
    approvals: ["UGC-DEB", "NAAC A+", "NIRF #87", "QS I-Gauge", "AICTE"],
    popularCourses: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online M.Com"],
    establishedYear: "2009",
    mode: "100% Online Learning"
  },
  {
    id: "chandigarh-online",
    slug: "chandigarh-online",
    name: "Chandigarh University Online (CU Online)",
    category: "online",
    logo: chandigarhLogo,
    badge: "UGC-Entitled & NAAC A+",
    naacGrade: "NAAC A+ Grade",
    location: "Mohali, Punjab",
    description: "Youngest private university in India to achieve NAAC A+ in its first cycle. Offers UGC-entitled degree programs with Harvard ManageMentor and 300+ recruiters.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "NIRF #19", "QS Ranked"],
    popularCourses: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online M.Com", "Online MAJMC", "Online BA", "Online M.Sc"],
    establishedYear: "2012",
    mode: "100% Online Learning"
  },
  {
    id: "jain-university",
    slug: "jain-university",
    name: "Jain Online University (JAIN Online)",
    category: "online",
    logo: jainLogo,
    badge: "UGC-Entitled & NAAC A++",
    naacGrade: "NAAC A++ Grade",
    nirfRank: "#65 NIRF (2025)",
    location: "Bengaluru, Karnataka",
    description: "Accredited with highest NAAC A++ grade. Offers 7 UGC-entitled degree programs with 30+ cutting-edge electives, LinkedIn Learning, and 2,000+ corporate hiring partners.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A++", "NIRF #65", "WES Recognized", "KSURF 5-Star"],
    popularCourses: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online B.Com", "Online M.Com", "Online MA"],
    establishedYear: "1990",
    mode: "100% Online Learning"
  },

  // ==========================================
  // 2. DISTANCE UNIVERSITIES (5 PARTNERS)
  // ==========================================
  {
    id: "vgu-jaipur",
    slug: "vgu-jaipur",
    name: "Vivekananda Global University (VGU Online)",
    category: "online",
    logo: vivekanandaLogo,
    badge: "UGC-DEB & NAAC A+",
    naacGrade: "NAAC A+ Accredited (3.29/4)",
    location: "Jaipur, Rajasthan",
    description: "Vivekananda Global University (VGU), Jaipur offers accredited online degree programs featuring AI-powered lectures, embedded industry certifications (AWS, RedHat, EXIN), and 500+ hiring partners.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "QS Asia #666", "AIU"],
    popularCourses: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "M.Sc Mathematics", "Online MA", "Online BA"],
    establishedYear: "2012",
    mode: "100% Online & ODL Mode"
  },
  {
    id: "suresh-gyan-vihar",
    slug: "suresh-gyan-vihar",
    name: "Suresh Gyan Vihar University (SGVU Distance)",
    category: "distance",
    logo: gyanLogo,
    badge: "UGC-DEB & NAAC A+",
    naacGrade: "NAAC A+ Accredited (3.32/4)",
    location: "Jaipur, Rajasthan",
    description: "Suresh Gyan Vihar University (SGVU) is Rajasthan's first NAAC 'A+' accredited private university offering flexible distance learning programs empowered by the 4-layered Edusphere LMS.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+ Grade", "AIU", "WES"],
    popularCourses: ["Distance MBA (20+ Specializations)", "Distance MCA", "Distance BBA", "Distance BCA", "Distance B.Com", "Distance MA"],
    establishedYear: "2008",
    mode: "Distance & ODL Mode (Edusphere LMS)"
  },
  {
    id: "gla-distance",
    slug: "gla-distance",
    name: "GLA University (Distance & ODL)",
    category: "distance",
    logo: glaLogo,
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A+ Grade",
    location: "Mathura, Uttar Pradesh",
    description: "GLA University Centre for Distance & Open Learning offers high-standard management and commerce degree courses with comprehensive self-instructional study material for working students.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+"],
    popularCourses: ["Distance BBA", "Distance B.Com", "Diploma in Business Administration"],
    establishedYear: "1998",
    mode: "Distance & ODL Mode"
  },
  {
    id: "lpu-distance",
    slug: "lpu-distance",
    name: "Lovely Professional University (LPU Distance)",
    category: "distance",
    logo: lovelyLogo,
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A++ Grade",
    location: "Phagwara, Punjab",
    description: "LPU Centre for Distance Education delivers affordable, top-rated distance programs with printed study books, dedicated e-portal access, and recognized higher education degrees.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A++", "NIRF Top 50"],
    popularCourses: ["Distance MBA", "Distance MCA", "Distance B.Com", "Distance BBA", "Distance MA"],
    establishedYear: "2005",
    mode: "Distance & ODL Mode"
  },
  {
    id: "isbm-university",
    slug: "isbm-university",
    name: "ISBM University",
    category: "distance",
    logo: isbmLogo,
    badge: "UGC Recognized",
    naacGrade: "Approved University",
    location: "Gariyaband, Chhattisgarh",
    description: "ISBM University offers career-oriented distance education programs designed to foster professional knowledge and accessible higher education for students nationwide.",
    approvals: ["UGC Recognized", "AIU Member"],
    popularCourses: ["Executive MBA", "Distance BA", "Distance B.Com", "Diploma & Certificate Programs"],
    establishedYear: "2016",
    mode: "Distance & Flexible Mode"
  },

  // ==========================================
  // 3. AUTONOMOUS B-SCHOOL (1 INSTITUTE)
  // ==========================================
  {
    id: "xibms-jaipur",
    slug: "xibms-jaipur",
    name: "Xaviers Institute of Business Management (XIBMS)",
    category: "autonomous",
    logo: xibmsLogo,
    badge: "Autonomous B-School",
    naacGrade: "ISO 9001:2015",
    location: "Jaipur / Multi-City Campus",
    description: "XIBMS is an autonomous premier management institute specializing in fast-track executive diplomas, certifications, and customized management programs for working executives via distance learning.",
    approvals: ["Autonomous B-School", "ISO 9001:2015 Certified", "Corporate Executive Partner"],
    popularCourses: ["Executive MBA", "Executive PGDM", "Advance Diploma in Management", "Certificate Programs"],
    establishedYear: "2009",
    mode: "Distance Executive & Certifications"
  }
];

export const approvalFilters = [
  { id: "all", name: "All Institutions (15)" },
  { id: "online", name: "Online Universities (9)" },
  { id: "distance", name: "Distance Universities (5)" },
  { id: "autonomous", name: "Autonomous B-School (XIBMS)" },
  { id: "rajasthan", name: "Jaipur / Rajasthan Campus" }
];
