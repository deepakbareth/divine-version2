// Import local partner university logo assets
import amityLogo from '../assets/universities/amity.jpg';
import chandigarhLogo from '../assets/universities/chandigarh.jpg';
import glaLogo from '../assets/universities/gla.jpg';
import gyanLogo from '../assets/universities/gyan.jpg';
import isbmLogo from '../assets/universities/isbm.jpg';
import manipalLogo from '../assets/universities/manipal.jpg';
import pratapLogo from '../assets/universities/pratap.jpg';
import vivekanandaLogo from '../assets/universities/vivekananda.jpg';
import xibmsLogo from '../assets/universities/xibms.jpg';

export const universitiesData = [
  {
    id: "amity-online",
    slug: "amity-online",
    name: "Amity Online University",
    logo: amityLogo,
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A+ Grade",
    location: "Noida, Uttar Pradesh",
    description: "Amity Online University is known for offering flexible online degree programs designed to meet modern academic and industry requirements. Its courses help students develop practical skills and prepare for career growth across multiple sectors.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "WES Recognized"],
    popularCourses: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    establishedYear: "2005",
    mode: "100% Online Learning"
  },
  {
    id: "gla-university",
    slug: "gla-university",
    name: "GLA University Online",
    logo: glaLogo,
    badge: "12-B Status from UGC",
    naacGrade: "NAAC A+ Grade",
    location: "Mathura, Uttar Pradesh",
    description: "GLA University provides accredited distance and online degree programs aimed at empowering learners with strong domain knowledge and practical industry skills for long-term career success.",
    approvals: ["UGC 12-B", "AICTE", "NAAC A+"],
    popularCourses: ["Online MBA", "Online BBA", "Diploma Courses"],
    establishedYear: "1998",
    mode: "Online / Distance Mode"
  },
  {
    id: "chandigarh-online",
    slug: "chandigarh-online",
    name: "Chandigarh Online University",
    logo: chandigarhLogo,
    badge: "UGC Recognized",
    naacGrade: "NAAC A+ Grade",
    location: "Mohali, Punjab",
    description: "Chandigarh Online University offers flexible online education aimed at helping students achieve academic and professional goals. Its programs focus on industry-relevant knowledge and career-oriented learning.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "QS Ranked"],
    popularCourses: ["Online MBA", "Online MCA", "Online BA", "Online B.Com"],
    establishedYear: "2012",
    mode: "Online Learning Portal"
  },
  {
    id: "isbm-university",
    slug: "isbm-university",
    name: "ISBM University",
    logo: isbmLogo,
    badge: "UGC Approved",
    naacGrade: "Approved University",
    location: "Gariyaband, Chhattisgarh",
    description: "ISBM University offers career-oriented higher education programs designed to foster knowledge, wisdom, and professional competence for students across rural and urban sectors.",
    approvals: ["UGC Recognized", "AIU Member"],
    popularCourses: ["Executive MBA", "Diploma Courses", "Certificate Programs"],
    establishedYear: "2016",
    mode: "Distance & Flexible Mode"
  },
  {
    id: "manipal-online",
    slug: "manipal-online",
    name: "Online Manipal (Manipal University Jaipur)",
    logo: manipalLogo,
    badge: "UGC & AICTE Approved",
    naacGrade: "NAAC A+ Grade",
    location: "Jaipur, Rajasthan",
    description: "Online Manipal provides flexible online learning opportunities through career-focused undergraduate and postgraduate programs. Students can build practical knowledge while balancing their education with personal and professional commitments.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "NIRF Top Ranked"],
    popularCourses: ["Online MBA", "Online MCA", "Online B.Com", "Online BBA"],
    establishedYear: "2011",
    mode: "Online & Virtual E-Classes"
  },
  {
    id: "suresh-gyan-vihar",
    slug: "suresh-gyan-vihar",
    name: "Suresh Gyan Vihar University (SGVU)",
    logo: gyanLogo,
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A Grade",
    location: "Jaipur, Rajasthan",
    description: "Suresh Gyan Vihar University (SGVU) delivers accredited distance education programs providing flexible, high-quality learning options to support lifelong career progression.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A Grade"],
    popularCourses: ["Distance MBA", "Distance B.Com", "Diploma in Management"],
    establishedYear: "2008",
    mode: "Distance Learning"
  },
  {
    id: "vgu-jaipur",
    slug: "vgu-jaipur",
    name: "Vivekananda Global University (VGU)",
    logo: vivekanandaLogo,
    badge: "UGC Approved",
    naacGrade: "NAAC A+ Grade",
    location: "Jaipur, Rajasthan",
    description: "Vivekananda Global University (VGU), Jaipur offers career-focused online degree programs emphasizing research, innovation, and practical skills for professional success.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+"],
    popularCourses: ["Online MBA", "Online BCA", "Executive Programs"],
    establishedYear: "2012",
    mode: "Online & Hybrid"
  },
  {
    id: "pratap-university",
    slug: "pratap-university",
    name: "Pratap University",
    logo: pratapLogo,
    badge: "UGC Approved",
    naacGrade: "Recognized Institute",
    location: "Jaipur, Rajasthan",
    description: "Pratap University provides accessible higher education courses designed to bridge the gap between academic theory and practical corporate requirements.",
    approvals: ["UGC Recognized", "AICTE Approved"],
    popularCourses: ["Management Programs", "Undergraduate Degrees", "Diplomas"],
    establishedYear: "2011",
    mode: "Distance Learning"
  },
  {
    id: "xibms-jaipur",
    slug: "xibms-jaipur",
    name: "Xaviers Institute of Business Management (XIBMS)",
    logo: xibmsLogo,
    badge: "ISO 9001:2015 Certified",
    naacGrade: "Accredited Institute",
    location: "Jaipur, Rajasthan",
    description: "Xaviers Institute of Business Management Studies offers specialized executive management courses and professional certifications for fast-track career advancement.",
    approvals: ["ISO 9001:2015 Certified", "Corporate Executive Partner"],
    popularCourses: ["Executive MBA", "Executive PGDM", "Management Certificates"],
    establishedYear: "2009",
    mode: "Online Executive Track"
  },
  {
    id: "nmims-cdoe",
    slug: "nmims-cdoe",
    name: "NMIMS CDOE",
    logo: "https://logo.clearbit.com/nmims.edu",
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A+ Grade",
    location: "Mumbai, Maharashtra",
    description: "NMIMS CDOE offers online education focused on quality learning and professional development. Its programs are designed to help students enhance their knowledge, gain industry-relevant skills, and advance their careers.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+"],
    popularCourses: ["Executive MBA", "Post Graduate Diplomas", "Online MBA"],
    establishedYear: "1981",
    mode: "Online Distance Education"
  },
  {
    id: "jain-university",
    slug: "jain-university",
    name: "Jain University Online",
    logo: "https://logo.clearbit.com/jainuniversity.ac.in",
    badge: "UGC Approved",
    naacGrade: "NAAC A++ Grade",
    location: "Bengaluru, Karnataka",
    description: "Jain University Online offers a range of online programs designed to support academic excellence and career development. Its flexible learning approach enables students to gain valuable knowledge from anywhere.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A++"],
    popularCourses: ["Online MBA", "Online MCA", "Online BBA"],
    establishedYear: "1990",
    mode: "Online Learning"
  },
  {
    id: "sharda-online",
    slug: "sharda-online",
    name: "Sharda Online University",
    logo: "https://logo.clearbit.com/sharda.ac.in",
    badge: "UGC Recognized",
    naacGrade: "NAAC A+ Grade",
    location: "Greater Noida, Uttar Pradesh",
    description: "Sharda Online University provides online degree programs that combine academic learning with practical application. The courses are designed to help students improve their skills and prepare for diverse career opportunities.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+"],
    popularCourses: ["Online MBA", "Online BBA", "Online BCA"],
    establishedYear: "2009",
    mode: "Online Mode"
  },
  {
    id: "lpu-online",
    slug: "lpu-online",
    name: "LPU Online",
    logo: "https://logo.clearbit.com/lpu.in",
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A++ Grade",
    location: "Phagwara, Punjab",
    description: "LPU Online delivers online degree programs that help students gain practical knowledge and professional skills. The flexible learning format makes it suitable for both fresh graduates and working professionals.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A++", "NIRF Top 50"],
    popularCourses: ["Online MBA", "Online MCA", "Online M.Com", "Online BBA"],
    establishedYear: "2005",
    mode: "Online Portal"
  },
  {
    id: "dy-patil-online",
    slug: "dy-patil-online",
    name: "DY Patil Vidyapeeth Online",
    logo: "https://logo.clearbit.com/dpu.edu.in",
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A++ Grade",
    location: "Pune, Maharashtra",
    description: "DY Patil Vidyapeeth Online offers career-focused online programs designed to enhance knowledge, improve employability, and support lifelong learning. Students benefit from the flexibility of studying from any location.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A++"],
    popularCourses: ["Online MBA", "Online BBA", "Executive Programs"],
    establishedYear: "2003",
    mode: "Online Learning"
  }
];

export const approvalFilters = [
  { id: "all", name: "All Partner Universities" },
  { id: "ugc-deb", name: "UGC-DEB Approved" },
  { id: "naac-aplus", name: "NAAC A+ / A++ Grade" },
  { id: "rajasthan", name: "Jaipur / Rajasthan Campus" }
];
