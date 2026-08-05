// =========================================================================
// UNIVERSITY DETAIL DATA REPOSITORY
// This file stores dedicated, in-depth content for individual university detail pages.
// Note: universitiesData.js remains separate for university listing cards.
// =========================================================================

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

export const universityDetailData = {
  // =========================================================================
  // 1. AMITY UNIVERSITY ONLINE (Verified from CollegeSathi)
  // Source: https://www.collegesathi.com/university/amity-university-online
  // =========================================================================
  "amity-online": {
    id: "amity-online",
    slug: "amity-online",
    name: "Amity University Online",
    shortName: "Amity Online",
    category: "online",
    mode: "100% Online Learning",
    logo: amityLogo,
    badge: "UGC-DEB Entitled",
    naacGrade: "NAAC A+ Accredited",
    location: "Noida, Uttar Pradesh",
    establishedYear: "2005",
    rating: "4.6",
    reviewsCount: "32",
    nirfRank: "#22nd by NIRF (2025)",
    tagline: "Excellence in Online Education",
    
    // CollegeSathi Verified Overview
    aboutTitle: "Amity University Online - Excellence in Online Education",
    description: "Amity University Online, established in 2005, represents a new era of online education in India. Entitled by UGC-DEB and accredited with NAAC A+, it offers 80+ online programs and specialisations, including MBA, BBA, BCA, MCA, and M.Sc in Data Science. The flexible learning model ensures accessibility while maintaining strong industry relevance. Each program is aligned with evolving market demands and professional growth. With a dedicated career support ecosystem and 450+ hiring partners, Amity Online connects learners with leading employers across industries. From skill development to placement assistance, the focus is on creating real career outcomes.",
    
    // Key Accreditations & Statutory Approvals
    approvals: [
      "UGC-DEB Entitled",
      "NAAC A+ Accredited",
      "AICTE Approved",
      "WES Recognized (Canada/USA)",
      "QS World Ranked",
      "NIRF Top 25 Ranked"
    ],

    // Key Highlights (Bento Grid)
    highlights: [
      { label: "Established In", value: "2005" },
      { label: "Programs Offered", value: "80+ Online UG, PG & Certificates" },
      { label: "Learning Mode", value: "100% Online (LMS + Live Classes)" },
      { label: "Accreditation", value: "NAAC A+ & UGC-DEB Entitled" },
      { label: "Placement Support", value: "500+ Top Hiring Partners" },
      { label: "Fee Flexibility", value: "0% Interest EMI from ₹4,500/mo" },
      { label: "Exam Mode", value: "100% Remote Proctored Exams from Home" },
      { label: "Global Validity", value: "WES Approved for Global PR & Jobs" }
    ],

    // Comprehensive Course Catalog (CollegeSathi Data)
    programs: [
      {
        id: "amity-online-mba",
        name: "Online MBA (Master of Business Administration)",
        level: "Postgraduate",
        category: "PG Courses",
        duration: "2 Years (4 Semesters)",
        eligibility: "Bachelor's degree in any discipline from a recognized university",
        monthlyEmi: "₹8,906 / month",
        semesterFee: "₹49,750 / Semester",
        totalFee: "₹1,99,000",
        specializations: [
          "Marketing & Sales",
          "Financial Management",
          "Human Resource Management",
          "International Business",
          "Information Technology",
          "Data Analytics",
          "Digital Marketing",
          "Operations Management",
          "Supply Chain Management"
        ],
        description: "UGC entitled online MBA with 18+ high-demand electives, live masterclasses by global CXOs, and Harvard ManageMentor certifications."
      },
      {
        id: "amity-online-mca",
        name: "Online MCA (Master of Computer Applications)",
        level: "Postgraduate",
        category: "PG Courses",
        duration: "2 Years (4 Semesters)",
        eligibility: "BCA / Bachelor's in CS / IT or graduation with Mathematics at 10+2 level",
        monthlyEmi: "₹7,877 / month",
        semesterFee: "₹42,500 / Semester",
        totalFee: "₹1,70,000",
        specializations: [
          "Cloud Security & DevOps",
          "Full Stack Web Development",
          "AI & Machine Learning",
          "Data Analytics"
        ],
        description: "Advanced computing curriculum with hands-on virtual coding labs, cloud sandboxes, and modern software engineering pedagogy."
      },
      {
        id: "amity-online-msc-ds",
        name: "Online M.Sc in Data Science",
        level: "Postgraduate",
        category: "PG Courses",
        duration: "2 Years (4 Semesters)",
        eligibility: "Graduation with Maths/Stats/CS/IT or B.Tech/BCA with min 50% marks",
        monthlyEmi: "₹7,500 / month",
        semesterFee: "₹45,000 / Semester",
        totalFee: "₹1,80,000",
        specializations: ["Machine Learning", "Big Data Analytics", "Python & R Modeling"],
        description: "Specialized STEM post-graduate degree focused on predictive analytics, neural networks, and business intelligence."
      },
      {
        id: "amity-online-mcom",
        name: "Online M.Com (Master of Commerce)",
        level: "Postgraduate",
        category: "PG Courses",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Com / BBA or equivalent Bachelor's degree from recognized university",
        monthlyEmi: "₹5,000 / month",
        semesterFee: "₹30,000 / Semester",
        totalFee: "₹1,20,000",
        specializations: ["Financial Analysis", "Corporate Accounting", "International Taxation"],
        description: "Advanced commerce curriculum tailored for corporate finance, banking, and statutory compliance leadership."
      },
      {
        id: "amity-online-majmc",
        name: "Online MAJMC (Master of Arts in Journalism & Mass Comm)",
        level: "Postgraduate",
        category: "PG Courses",
        duration: "2 Years (4 Semesters)",
        eligibility: "Graduation in any discipline from recognized university",
        monthlyEmi: "₹5,833 / month",
        semesterFee: "₹35,000 / Semester",
        totalFee: "₹1,40,000",
        specializations: ["Digital Media & PR", "Electronic Journalism", "Corporate Communication"],
        description: "Industry-aligned media curriculum covering digital newsrooms, media ethics, PR strategies, and multimedia broadcasting."
      },
      {
        id: "amity-online-bba",
        name: "Online BBA (Bachelor of Business Administration)",
        level: "Undergraduate",
        category: "UG Courses",
        duration: "3 Years (6 Semesters)",
        eligibility: "10+2 in any stream from a recognized education board",
        monthlyEmi: "₹4,583 / month",
        semesterFee: "₹27,500 / Semester",
        totalFee: "₹1,65,000",
        specializations: ["General Management", "Digital Marketing", "Finance & Accounts", "Human Resources"],
        description: "Foundational business degree with real-world case studies, leadership modules, and corporate readiness training."
      },
      {
        id: "amity-online-bca",
        name: "Online BCA (Bachelor of Computer Applications)",
        level: "Undergraduate",
        category: "UG Courses",
        duration: "3 Years (6 Semesters)",
        eligibility: "10+2 with Maths / Computer Science / IT from recognized board",
        monthlyEmi: "₹4,166 / month",
        semesterFee: "₹25,000 / Semester",
        totalFee: "₹1,50,000",
        specializations: ["Software Engineering", "Cloud Services", "Data Science Fundamentals"],
        description: "Strong grounding in programming languages, databases, web technologies, and algorithm design."
      },
      {
        id: "amity-online-bcom",
        name: "Online B.Com (Bachelor of Commerce - General & Hons)",
        level: "Undergraduate",
        category: "UG Courses",
        duration: "3 Years (6 Semesters)",
        eligibility: "10+2 with Commerce / Arts / Science from recognized board",
        monthlyEmi: "₹2,916 / month",
        semesterFee: "₹17,500 / Semester",
        totalFee: "₹1,05,000",
        specializations: ["Accounting & Finance", "Banking & Insurance", "Taxation"],
        description: "Comprehensive commerce degree with integrated financial accounting, auditing, and corporate law coursework."
      },
      {
        id: "amity-online-ba",
        name: "Online BA (Bachelor of Arts)",
        level: "Undergraduate",
        category: "UG Courses",
        duration: "3 Years (6 Semesters)",
        eligibility: "10+2 in any stream from recognized education board",
        monthlyEmi: "₹2,500 / month",
        semesterFee: "₹15,000 / Semester",
        totalFee: "₹90,000",
        specializations: ["Economics", "English Literature", "Political Science", "Sociology"],
        description: "Flexible liberal arts curriculum designed for civil services aspirants, competitive exams, and content professionals."
      },
      {
        id: "amity-online-bajmc",
        name: "Online BAJMC (Bachelor of Journalism & Mass Comm)",
        level: "Undergraduate",
        category: "UG Courses",
        duration: "3 Years (6 Semesters)",
        eligibility: "10+2 in any stream from recognized education board",
        monthlyEmi: "₹3,333 / month",
        semesterFee: "₹20,000 / Semester",
        totalFee: "₹1,20,000",
        specializations: ["Print & Digital Media", "Advertising & PR", "Broadcast Journalism"],
        description: "Modern communication program focusing on media production, reporting, brand storytelling, and digital content creation."
      },
      {
        id: "amity-online-int-bca-mca",
        name: "Online Integrated BCA + MCA",
        level: "Integrated Dual Degree",
        category: "UG Courses",
        duration: "4.5 - 5 Years",
        eligibility: "10+2 with Mathematics / Computer Applications",
        monthlyEmi: "₹5,200 / month",
        semesterFee: "₹28,000 / Semester",
        totalFee: "₹2,60,000",
        specializations: ["Full Stack Engineering", "AI & Cloud Architecture"],
        description: "Seamless fast-track dual degree saving academic time while delivering comprehensive Master's qualification."
      },
      {
        id: "amity-online-int-bba-mba",
        name: "Online Integrated BBA + MBA",
        level: "Integrated Dual Degree",
        category: "UG Courses",
        duration: "4.5 - 5 Years",
        eligibility: "10+2 in any stream from recognized board",
        monthlyEmi: "₹5,800 / month",
        semesterFee: "₹32,000 / Semester",
        totalFee: "₹2,90,000",
        specializations: ["Strategic Leadership", "International Business & Finance"],
        description: "Combined undergraduate and postgraduate management track for ambitious corporate leadership careers."
      }
    ],

    // Hiring Partners (CollegeSathi placement marquee)
    hiringPartners: [
      "Microsoft",
      "IBM",
      "HP",
      "Nestle",
      "Mercedes-Benz",
      "NIIT",
      "Deloitte",
      "Amazon",
      "TCS",
      "ICICI Bank",
      "Accenture",
      "Cognizant",
      "Infosys",
      "Wipro"
    ],

    // FAQs (CollegeSathi Verified - Categorized)
    faqCategories: [
      {
        category: "About University",
        items: [
          {
            q: "Is Amity University Online UGC entitled and valid in India?",
            a: "Yes, Amity University Online is UGC-entitled and recognized by DEB. As per UGC regulations, its degrees are treated at par with regular on-campus degrees and are 100% valid for all Central/State government jobs, UPSC, and corporate promotions across India."
          },
          {
            q: "Is Amity University Online degree recognized internationally?",
            a: "Yes, Amity Online degrees are recognized across global regions and evaluated by WES (World Education Services), making them fully acceptable for Canada PR, USA educational credentialing, and overseas university admissions."
          },
          {
            q: "How does Amity University Online support flexible learning?",
            a: "Amity Online offers a digital LMS with live weekend classes, 24/7 recorded video archives, audiobooks, digital e-books, and mobile app access, allowing working professionals to balance study with career."
          },
          {
            q: "Is Amity University Online good for working professionals?",
            a: "Yes, its flexible schedule, self-paced learning portal, online proctored exams, and career-focused programs make it a suitable and highly practical choice for working professionals."
          },
          {
            q: "What accreditations does Amity University Online have?",
            a: "Amity Online is backed by UGC-DEB entitlement, NAAC A+ accreditation, AICTE approval, QS Asia Top Online ranking, and WES global recognition that strengthen its academic credibility."
          },
          {
            q: "Can I pursue higher studies after completing a degree from Amity Online?",
            a: "Yes. Because Amity Online degrees are UGC entitled and NAAC A+ accredited, graduates are fully eligible for any Master's, Ph.D., or international degree program worldwide."
          }
        ]
      },
      {
        category: "About Courses",
        items: [
          {
            q: "What courses are offered by Amity University Online?",
            a: "Amity Online offers UG, PG, and certification programs, including Online MBA, Online BBA, Online MCA, Online BCA, Online M.Sc in Data Science, Online M.Com, Online MA, and specialized industry certifications."
          },
          {
            q: "Which is the best course at Amity University Online?",
            a: "The best course depends on your career goals, though Online MBA (with 18+ electives), Online MCA (AI & Cloud), and M.Sc in Data Science are among the most opted and highest ROI programs."
          },
          {
            q: "What is the duration of Amity Online UG and PG programs?",
            a: "UG programs (BBA, BCA, B.Com, BA) typically last 3 years (6 semesters), while most PG programs (MBA, MCA, M.Sc, M.Com, MAJMC) are designed to be completed in 2 years (4 semesters)."
          },
          {
            q: "Are Amity Online courses industry-relevant and updated?",
            a: "Yes, Amity Online courses are designed in collaboration with corporate leaders and industry experts to align with evolving market trends, AI tools, and practical job requirements."
          },
          {
            q: "Can I switch my specialization in Amity Online programs?",
            a: "Specialization changes may depend on program policies and semester guidelines. Divine Institute counselors provide full academic support to guide you through any elective transitions."
          },
          {
            q: "Do Amity Online courses include live and recorded classes?",
            a: "Yes, learners get access to live interactive weekend sessions by expert faculties and 24/7 access to high-definition recorded lectures on the Amity LMS portal."
          },
          {
            q: "Are there any certifications included with Amity Online courses?",
            a: "Yes, many programs (like Online MBA) include additional value-added certifications from Harvard ManageMentor and specialized skill-building modules."
          }
        ]
      },
      {
        category: "About Placements",
        items: [
          {
            q: "Does Amity University Online provide placement assistance?",
            a: "Yes, Amity Online offers comprehensive placement support through resume building, interview preparation, career guidance, virtual job fairs, and direct hiring access."
          },
          {
            q: "What kind of job opportunities are available after Amity Online courses?",
            a: "Learners can explore opportunities across business management, IT & cloud software, data analytics, digital marketing, finance & banking, HR, and consulting domains."
          },
          {
            q: "Which companies hire from Amity University Online?",
            a: "Amity Online learners have access to 450+ reputed recruitment partners, including Microsoft, IBM, Amazon, Deloitte, TCS, ICICI Bank, Accenture, Cognizant, Infosys, and Wipro."
          },
          {
            q: "Does Amity Online guarantee placements?",
            a: "Amity Online and Divine Institute provide 100% placement assistance, career coaching, and interview opportunities. Final job selection depends on learner performance and company criteria."
          },
          {
            q: "What career support services does Amity Online offer?",
            a: "Services include dedicated career mentors, personalized portfolio & resume reviews, mock interviews with industry experts, soft skills grooming, and exclusive job portal access."
          },
          {
            q: "Can working professionals benefit from Amity Online placements?",
            a: "Yes, working professionals can use the career services for executive role upgrades, salary appraisals, lateral domain switching, and leadership transitions."
          }
        ]
      }
    ],

    // Flat list for fallback / search
    faqs: [
      {
        q: "Is Amity University Online UGC entitled and valid in India?",
        a: "Yes, Amity University Online is UGC-entitled and recognized by DEB. As per UGC regulations, its degrees are treated at par with regular on-campus degrees and are 100% valid for all Central/State government jobs, UPSC, and corporate promotions across India."
      },
      {
        q: "Is Amity University Online degree recognized internationally?",
        a: "Yes, Amity Online degrees are recognized across global regions and evaluated by WES (World Education Services), making them fully acceptable for Canada PR, USA educational credentialing, and overseas university admissions."
      },
      {
        q: "Does Amity University Online provide placement assistance?",
        a: "Yes, Amity Online offers placement support through resume building, interview preparation, career guidance, and hiring access."
      },
      {
        q: "Which companies hire from Amity University Online?",
        a: "Amity Online learners have access to opportunities with reputed companies, including Microsoft, IBM, Amazon, Deloitte, TCS, ICICI Bank, Accenture, Infosys, and Wipro."
      },
      {
        q: "How does Amity University Online support flexible learning?",
        a: "Amity Online offers a digital LMS with live weekend classes, 24/7 recorded video archives, audiobooks, digital e-books, and mobile app access."
      },
      {
        q: "How are examinations conducted at Amity Online?",
        a: "All semester examinations are conducted in 100% remote online proctored mode with AI and live webcam invigilation. You can take your exams conveniently from home."
      }
    ]
  },

  // =========================================================================
  // 2. DEFAULT FALLBACK ENTRIES FOR OTHER UNIVERSITIES
  // (These will be seamlessly updated with CollegeSathi links as requested)
  // =========================================================================
  "nmims-cdoe": {
    id: "nmims-cdoe",
    slug: "nmims-cdoe",
    name: "NMIMS CDOE (Narsee Monjee)",
    shortName: "NMIMS Online",
    category: "online",
    mode: "100% Online Learning",
    logo: nmimsLogo,
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A+ Grade",
    location: "Mumbai, Maharashtra",
    establishedYear: "1981",
    rating: "4.7",
    reviewsCount: "48",
    nirfRank: "Top 20 B-School in India",
    tagline: "India's Premier Management Institution with Category-1 Autonomy",
    aboutTitle: "About NMIMS Center for Distance and Online Education",
    description: "NMIMS Center for Distance and Online Education is one of India's premier management institutions, delivering flexible, top-tier degree programs with live interactive lectures and industry-focused pedagogy.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "Cat-1 Autonomy"],
    highlights: [
      { label: "Established In", value: "1981" },
      { label: "Learning Mode", value: "100% Online / Weekend Batches" },
      { label: "Autonomy", value: "Category-1 Autonomy by UGC" },
      { label: "Accreditation", value: "NAAC A+ Grade" }
    ],
    programs: [
      { name: "Online MBA (General & Dual Spec.)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Graduation (min 50%)", monthlyEmi: "₹8,500 / month", totalFee: "₹1,80,000", description: "Flagship management program with live interactive masterclasses." },
      { name: "Executive MBA for Professionals", level: "Executive PG", category: "PG Courses", duration: "15 - 18 Months", eligibility: "Graduation with 2+ yrs exp", monthlyEmi: "₹12,000 / month", totalFee: "₹2,20,000", description: "Accelerated management track for mid-to-senior executives." },
      { name: "Online BBA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 in any stream", monthlyEmi: "₹4,200 / month", totalFee: "₹1,40,000", description: "Undergraduate business administration program." },
      { name: "Online B.Com", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 with Commerce/Arts", monthlyEmi: "₹3,500 / month", totalFee: "₹1,10,000", description: "Commerce degree for financial management and accounting." }
    ],
    hiringPartners: ["Deloitte", "Amazon", "ICICI Bank", "Infosys", "KPMG", "HDFC"],
    faqs: [
      { q: "Is NMIMS Online MBA equivalent to regular MBA?", a: "Yes, as per UGC regulations, degrees awarded by NMIMS CDOE are legally recognized and treated at par with regular on-campus degrees." },
      { q: "How are exams scheduled?", a: "Exams are 100% remote online proctored." }
    ]
  },

  "op-jindal-online": {
    id: "op-jindal-online",
    slug: "op-jindal-online",
    name: "OP Jindal Global University Online",
    shortName: "JGU Online",
    category: "online",
    mode: "100% Online Learning",
    logo: opjindalLogo,
    badge: "Institute of Eminence",
    naacGrade: "NAAC A Grade",
    location: "Sonipat, Haryana",
    establishedYear: "2009",
    rating: "4.8",
    reviewsCount: "26",
    nirfRank: "Ranked #1 Private University in India (QS)",
    tagline: "India's #1 Private University & Institution of Eminence (IoE)",
    aboutTitle: "About OP Jindal Global University Online",
    description: "OP Jindal Global University Online provides world-class management, law, and international affairs programs fostering global leadership skills, research acumen, and multidisciplinary expertise.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A", "QS World Ranked", "Institution of Eminence"],
    highlights: [
      { label: "Established In", value: "2009" },
      { label: "Status", value: "Institution of Eminence (IoE)" },
      { label: "Global Ranking", value: "Ranked #1 Private University in India (QS)" },
      { label: "Learning Mode", value: "100% Online Interactive" }
    ],
    programs: [
      { name: "Online MBA (Business Analytics / Strategy)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Bachelor's degree with min 50%", monthlyEmi: "₹12,500 / month", totalFee: "₹2,75,000", description: "Global curriculum designed by world-renowned academicians." },
      { name: "Online MA in International Affairs", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Bachelor's degree in any stream", monthlyEmi: "₹9,500 / month", totalFee: "₹2,10,000", description: "Premier international relations and geopolitical studies degree." }
    ],
    hiringPartners: ["World Bank Partners", "McKinsey", "Deloitte", "UN Agencies", "KPMG"],
    faqs: [
      { q: "What makes JGU Online distinct?", a: "JGU holds the Institute of Eminence status and QS World Ranking, ensuring globally benchmarked academic rigor." }
    ]
  },

  "manipal-online": {
    id: "manipal-online",
    slug: "manipal-online",
    name: "Online Manipal (Manipal University Jaipur)",
    shortName: "Online Manipal",
    category: "online",
    mode: "100% Online Learning",
    logo: manipalLogo,
    badge: "UGC & AICTE Approved",
    naacGrade: "NAAC A+ Grade",
    location: "Jaipur, Rajasthan",
    establishedYear: "2011",
    rating: "4.7",
    reviewsCount: "42",
    nirfRank: "NIRF Top Ranked",
    tagline: "Legacy of Manipal Education with Cutting-Edge Digital Pedagogy",
    aboutTitle: "About Online Manipal (MUJ)",
    description: "Online Manipal (MUJ) delivers high-demand career programs with interactive virtual labs, real-world case studies, flexible schedules, and strong placement assistance for working executives.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "NIRF Top Ranked"],
    highlights: [
      { label: "Legacy", value: "70+ Years of Academic Excellence" },
      { label: "Location", value: "Jaipur, Rajasthan" },
      { label: "Learning Mode", value: "100% Online with Coursera Access" },
      { label: "Accreditation", value: "NAAC A+ Grade" }
    ],
    programs: [
      { name: "Online MBA (Finance, HR, Marketing, Analytics)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Graduation with min 50%", monthlyEmi: "₹7,500 / month", totalFee: "₹1,75,000", description: "Comprehensive MBA with free Coursera enterprise access." },
      { name: "Online MCA (Cloud Computing, Full Stack)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "BCA / B.Sc with Maths", monthlyEmi: "₹6,800 / month", totalFee: "₹1,58,000", description: "Technical masters with hands-on virtual lab projects." },
      { name: "Online BBA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 from recognized board", monthlyEmi: "₹4,200 / month", totalFee: "₹1,35,000", description: "Foundational business administration program." },
      { name: "Online B.Com", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 in Commerce/Arts", monthlyEmi: "₹3,200 / month", totalFee: "₹99,000", description: "Commerce curriculum for business and accounting." }
    ],
    hiringPartners: ["Amazon", "Dell", "Accenture", "Infosys", "EY", "KPMG"],
    faqs: [
      { q: "Is Online Manipal degree valid in government and private sectors?", a: "Yes, 100%. The degree carries the official seal of Manipal University Jaipur and is fully approved by UGC-DEB." }
    ]
  },

  "gla-online": {
    id: "gla-online",
    slug: "gla-online",
    name: "GLA University Online",
    shortName: "GLA Online",
    category: "online",
    mode: "100% Online Learning",
    logo: glaLogo,
    badge: "UGC 12-B Status",
    naacGrade: "NAAC A+ Grade",
    location: "Mathura, Uttar Pradesh",
    establishedYear: "1998",
    rating: "4.5",
    reviewsCount: "22",
    tagline: "Industry-Aligned Degrees with Strong Practical Focus",
    aboutTitle: "About GLA University Online",
    description: "GLA University Online provides accredited online degree courses emphasizing practical industry skills, experiential project work, and flexible weekend learning modules.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "12-B Status"],
    highlights: [
      { label: "Established In", value: "1998" },
      { label: "Status", value: "UGC 12-B Status" },
      { label: "Accreditation", value: "NAAC A+ Grade" },
      { label: "Fee Mode", value: "Budget Friendly with 0% EMI" }
    ],
    programs: [
      { name: "Online MBA (Multiple Dual Specializations)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Graduation (min 50%)", monthlyEmi: "₹5,500 / month", totalFee: "₹1,25,000", description: "Management degree with practical corporate projects." },
      { name: "Online BBA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 in any stream", monthlyEmi: "₹3,200 / month", totalFee: "₹90,000", description: "Business administration with foundational business tools." },
      { name: "Online B.Com", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 from recognized board", monthlyEmi: "₹2,600 / month", totalFee: "₹75,000", description: "Commerce degree for financial and accounting roles." },
      { name: "Online BCA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 with Maths / Computer", monthlyEmi: "₹3,500 / month", totalFee: "₹95,000", description: "Computer applications and programming skills." }
    ],
    hiringPartners: ["TCS", "Wipro", "Capgemini", "HCL", "Tech Mahindra"],
    faqs: [
      { q: "How are exams scheduled at GLA Online?", a: "Semester exams are conducted in remote online proctored mode." }
    ]
  },

  "dy-patil-online": {
    id: "dy-patil-online",
    slug: "dy-patil-online",
    name: "DY Patil Vidyapeeth Online (DPU)",
    shortName: "DPU Online",
    category: "online",
    mode: "100% Online Learning",
    logo: "https://logo.clearbit.com/dpu.edu.in",
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A++ Grade",
    location: "Pune, Maharashtra",
    establishedYear: "2003",
    rating: "4.7",
    reviewsCount: "35",
    tagline: "NAAC A++ Graded Premier Deemed-to-be University",
    aboutTitle: "About DY Patil Vidyapeeth Online",
    description: "Dr. D. Y. Patil Vidyapeeth Online offers accredited business administration programs tailored for modern career advancement with self-paced e-learning content and live webinars.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A++", "NIRF Top 50"],
    highlights: [
      { label: "Established In", value: "2003" },
      { label: "Accreditation", value: "NAAC A++ (Highest Rating)" },
      { label: "Specialty", value: "Healthcare & Fintech MBA" }
    ],
    programs: [
      { name: "Online MBA (Hospital, Logistics, FinTech, Mktg)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Graduation (min 50%)", monthlyEmi: "₹6,500 / month", totalFee: "₹1,40,000", description: "Executive MBA with specialized hospital and fintech electives." },
      { name: "Online BBA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 from recognized board", monthlyEmi: "₹3,800 / month", totalFee: "₹1,05,000", description: "Undergraduate management course with business foundations." }
    ],
    hiringPartners: ["Apollo Hospitals", "Cipla", "ICICI Bank", "Infosys", "Deloitte"],
    faqs: [
      { q: "Is DPU Online degree valid for MNC jobs?", a: "Yes. DPU holds NAAC A++ and UGC-DEB recognition, widely accepted by top global MNCs." }
    ]
  },

  "sharda-online": {
    id: "sharda-online",
    slug: "sharda-online",
    name: "Sharda Online University",
    shortName: "Sharda Online",
    category: "online",
    mode: "100% Online Learning",
    logo: "https://logo.clearbit.com/sharda.ac.in",
    badge: "UGC Recognized",
    naacGrade: "NAAC A+ Grade",
    location: "Greater Noida, Uttar Pradesh",
    establishedYear: "2009",
    rating: "4.5",
    reviewsCount: "19",
    tagline: "Truly Global University with Dynamic Online Learning Modules",
    aboutTitle: "About Sharda Online University",
    description: "Sharda Online University offers career-oriented online degree courses designed to bridge academic knowledge with practical corporate requirements across management and tech fields.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+"],
    highlights: [
      { label: "Established In", value: "2009" },
      { label: "Accreditation", value: "NAAC A+ Grade" },
      { label: "LMS", value: "Interactive Video Lectures & E-Library" }
    ],
    programs: [
      { name: "Online MBA (Finance, Marketing, HR, IT)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Graduation (min 50%)", monthlyEmi: "₹5,200 / month", totalFee: "₹1,20,000", description: "Business management with modern marketing and analytics." },
      { name: "Online BBA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 in any stream", monthlyEmi: "₹3,000 / month", totalFee: "₹85,000", description: "Undergraduate degree in business administration." },
      { name: "Online BCA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 with Maths / Computer", monthlyEmi: "₹3,300 / month", totalFee: "₹92,000", description: "Computer application degree with programming skills." }
    ],
    hiringPartners: ["Wipro", "TCS", "HCL", "Tech Mahindra", "Amazon"],
    faqs: [
      { q: "Can I give exams from home?", a: "Yes. All Sharda Online examinations are conducted via secure remote online proctoring." }
    ]
  },

  "chandigarh-online": {
    id: "chandigarh-online",
    slug: "chandigarh-online",
    name: "Chandigarh Online University",
    shortName: "CU Online",
    category: "online",
    mode: "100% Online Learning",
    logo: chandigarhLogo,
    badge: "UGC Recognized",
    naacGrade: "NAAC A+ Grade",
    location: "Mohali, Punjab",
    establishedYear: "2012",
    rating: "4.7",
    reviewsCount: "38",
    tagline: "India's Fastest-Growing NAAC A+ Ranked University",
    aboutTitle: "About Chandigarh Online University",
    description: "Chandigarh Online University offers flexible, tech-enabled online programs with LMS accessibility, live faculty masterclasses, and globally recognized degree credentials.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "QS Ranked"],
    highlights: [
      { label: "Established In", value: "2012" },
      { label: "Accreditation", value: "NAAC A+ Grade" },
      { label: "Placement Network", value: "500+ Hiring Partners" }
    ],
    programs: [
      { name: "Online MBA (Dual Specializations)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Graduation (min 50%)", monthlyEmi: "₹5,900 / month", totalFee: "₹1,35,000", description: "Dual specialization MBA with Harvard ManageMentor." },
      { name: "Online MCA (Cloud, DevOps, AI)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "BCA / B.Sc with Maths", monthlyEmi: "₹5,200 / month", totalFee: "₹1,20,000", description: "Modern computing degree for software engineers." },
      { name: "Online B.Com", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 from recognized board", monthlyEmi: "₹2,900 / month", totalFee: "₹80,000", description: "Commerce curriculum for accounts and banking." },
      { name: "Online BA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 in any stream", monthlyEmi: "₹2,500 / month", totalFee: "₹70,000", description: "Liberal arts degree for competitive exams." }
    ],
    hiringPartners: ["Google", "Amazon", "Microsoft", "Flipkart", "IBM", "Cognizant"],
    faqs: [
      { q: "Is CU Online degree valid for higher education abroad?", a: "Yes. CU Online holds NAAC A+ accreditation and WES evaluation, valid worldwide." }
    ]
  },

  "jain-university": {
    id: "jain-university",
    slug: "jain-university",
    name: "Jain University Online (JAIN Online)",
    shortName: "JAIN Online",
    category: "online",
    mode: "100% Online Learning",
    logo: "https://logo.clearbit.com/jainuniversity.ac.in",
    badge: "UGC Approved",
    naacGrade: "NAAC A++ Grade",
    location: "Bengaluru, Karnataka",
    establishedYear: "1990",
    rating: "4.7",
    reviewsCount: "31",
    tagline: "Bengaluru's Premier Silicon Valley-Aligned Online University",
    aboutTitle: "About JAIN Online",
    description: "JAIN Online offers future-ready degree programs with over 70+ specialized electives, comprehensive mentorship, and internationally benchmarked curricula.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A++", "KSURF 5-Star"],
    highlights: [
      { label: "Established In", value: "1990" },
      { label: "Accreditation", value: "NAAC A++ Deemed-to-be University" },
      { label: "Electives", value: "70+ Modern Industry Electives" }
    ],
    programs: [
      { name: "Online MBA (70+ Electives)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Graduation (min 50%)", monthlyEmi: "₹7,200 / month", totalFee: "₹1,60,000", description: "Future-ready MBA with electives in AI, Data Science & FinTech." },
      { name: "Online MCA (Data Analytics, Cyber Security, AI)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "BCA / B.Sc with Maths", monthlyEmi: "₹6,500 / month", totalFee: "₹1,45,000", description: "Specialized computer applications degree for tech careers." },
      { name: "Online BBA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 from recognized board", monthlyEmi: "₹4,100 / month", totalFee: "₹1,20,000", description: "Undergraduate business administration program." },
      { name: "Online B.Com", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 with Commerce / Arts", monthlyEmi: "₹3,400 / month", totalFee: "₹95,000", description: "Commerce degree with integrated international accounting." }
    ],
    hiringPartners: ["Infosys", "Deloitte", "Accenture", "KPMG", "Amazon", "Flipkart"],
    faqs: [
      { q: "How are classes delivered at JAIN Online?", a: "Classes are delivered through a cloud-based LMS with live weekend webinars and 24/7 video replays." }
    ]
  },

  "vgu-jaipur": {
    id: "vgu-jaipur",
    slug: "vgu-jaipur",
    name: "Vivekananda Global University (VGU Distance)",
    shortName: "VGU Distance",
    category: "distance",
    mode: "Distance & ODL Mode",
    logo: vivekanandaLogo,
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A+ Grade",
    location: "Jaipur, Rajasthan",
    establishedYear: "2012",
    rating: "4.5",
    reviewsCount: "25",
    tagline: "Leading NAAC A+ Distance Education Institution in Jaipur",
    aboutTitle: "About VGU Distance Education",
    description: "Vivekananda Global University (VGU), Jaipur offers accredited distance learning degree programs emphasizing flexible study patterns, printed study materials, and practical skills.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A+", "Bar Council"],
    highlights: [
      { label: "Established In", value: "2012" },
      { label: "Location", value: "Jaipur, Rajasthan" },
      { label: "Accreditation", value: "NAAC A+ Grade" },
      { label: "Mode", value: "Distance / Printed SLM + Digital" }
    ],
    programs: [
      { name: "Distance MBA (Dual Specializations)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Graduation in any stream", monthlyEmi: "₹4,200 / month", totalFee: "₹95,000", description: "Flexible distance MBA with dual specializations." },
      { name: "Distance BBA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 from recognized board", monthlyEmi: "₹2,600 / month", totalFee: "₹65,000", description: "Undergraduate business administration program." },
      { name: "Distance BCA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 with Maths / Computer", monthlyEmi: "₹2,900 / month", totalFee: "₹72,000", description: "Distance computer application degree." }
    ],
    hiringPartners: ["HCL", "Teleperformance", "Genpact", "ICICI Bank", "AU Small Finance Bank"],
    faqs: [
      { q: "Is VGU Distance valid for Rajasthan govt jobs?", a: "Yes. VGU Distance is approved by UGC-DEB, making degrees fully valid for all state and national government jobs." }
    ]
  },

  "suresh-gyan-vihar": {
    id: "suresh-gyan-vihar",
    slug: "suresh-gyan-vihar",
    name: "Suresh Gyan Vihar University (SGVU Distance)",
    shortName: "SGVU Distance",
    category: "distance",
    mode: "Distance & ODL Mode",
    logo: gyanLogo,
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A Grade",
    location: "Jaipur, Rajasthan",
    establishedYear: "2008",
    rating: "4.6",
    reviewsCount: "29",
    tagline: "Rajasthan's Premier NAAC 'A' Graded Distance Learning University",
    aboutTitle: "About SGVU Distance Education",
    description: "Suresh Gyan Vihar University (SGVU) is a leading NAAC 'A' accredited distance education university in Rajasthan, providing flexible learning modules, regional center support, and recognized degrees.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A Grade"],
    highlights: [
      { label: "Established In", value: "2008" },
      { label: "Location", value: "Jaipur, Rajasthan" },
      { label: "Accreditation", value: "NAAC A Grade" }
    ],
    programs: [
      { name: "Distance MBA (Finance, Marketing, HR, Operation)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Graduation with min 45%", monthlyEmi: "₹3,900 / month", totalFee: "₹88,000", description: "Comprehensive management degree with printed books." },
      { name: "Distance BBA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 in any stream", monthlyEmi: "₹2,400 / month", totalFee: "₹58,000", description: "Business fundamentals with flexible self-study." },
      { name: "Distance B.Com", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 from recognized board", monthlyEmi: "₹2,100 / month", totalFee: "₹52,000", description: "Commerce degree for accounts and administration." }
    ],
    hiringPartners: ["HDFC Bank", "Axis Bank", "Reliance", "Tata Motors", "Infosys BPO"],
    faqs: [
      { q: "How do I get my study material?", a: "Printed study material is dispatched to your address, and digital copies are accessible on the portal." }
    ]
  },

  "gla-distance": {
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
    hiringPartners: ["TCS", "Wipro", "HCL", "Tech Mahindra"],
    faqs: [
      { q: "Is GLA Distance degree valid for government examinations?", a: "Yes. Degrees are approved by UGC-DEB and valid across government recruitments." }
    ]
  },

  "lpu-distance": {
    id: "lpu-distance",
    slug: "lpu-distance",
    name: "Lovely Professional University (LPU Distance)",
    shortName: "LPU Distance",
    category: "distance",
    mode: "Distance & ODL Mode",
    logo: "https://logo.clearbit.com/lpu.in",
    badge: "UGC-DEB Approved",
    naacGrade: "NAAC A++ Grade",
    location: "Phagwara, Punjab",
    establishedYear: "2005",
    rating: "4.7",
    reviewsCount: "44",
    tagline: "India's Largest NAAC A++ Distance Education Network",
    aboutTitle: "About LPU Distance Education",
    description: "LPU Centre for Distance Education delivers affordable, top-rated distance programs with printed study books, dedicated e-portal access, and recognized higher education degrees.",
    approvals: ["UGC-DEB", "AICTE", "NAAC A++", "NIRF Top 50"],
    highlights: [
      { label: "Established In", value: "2005" },
      { label: "Accreditation", value: "NAAC A++ Grade" },
      { label: "Portal", value: "LPU e-Connect Digital LMS" }
    ],
    programs: [
      { name: "Distance MBA (Dual Specializations)", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Graduation in any discipline", monthlyEmi: "₹3,400 / month", totalFee: "₹76,000", description: "Dual specialization MBA with LPU e-Connect access." },
      { name: "Distance MCA", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "BCA / B.Sc with Maths", monthlyEmi: "₹3,200 / month", totalFee: "₹72,000", description: "Postgraduate computing degree." },
      { name: "Distance BBA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 from recognized board", monthlyEmi: "₹2,100 / month", totalFee: "₹50,000", description: "Foundational business degree." },
      { name: "Distance B.Com", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 in Commerce / Arts", monthlyEmi: "₹1,900 / month", totalFee: "₹45,000", description: "Commerce curriculum." }
    ],
    hiringPartners: ["Amazon", "Cognizant", "Capgemini", "Wipro", "Infosys"],
    faqs: [
      { q: "Is LPU Distance recognized by UGC?", a: "Yes. LPU Distance is approved by UGC-DEB and accredited with NAAC A++ Grade." }
    ]
  },

  "isbm-university": {
    id: "isbm-university",
    slug: "isbm-university",
    name: "ISBM University",
    shortName: "ISBM Distance",
    category: "distance",
    mode: "Distance & Flexible Mode",
    logo: isbmLogo,
    badge: "UGC Recognized",
    naacGrade: "Approved University",
    location: "Gariyaband, Chhattisgarh",
    establishedYear: "2016",
    rating: "4.3",
    reviewsCount: "14",
    tagline: "Accessible Higher Education & Vocational Distance Programs",
    aboutTitle: "About ISBM University",
    description: "ISBM University offers career-oriented distance education programs designed to foster professional knowledge and accessible higher education for students nationwide.",
    approvals: ["UGC Recognized", "AIU Member"],
    highlights: [
      { label: "Established In", value: "2016" },
      { label: "Recognitions", value: "UGC Recognized, AIU Member" },
      { label: "Mode", value: "Flexible Study Schedule" }
    ],
    programs: [
      { name: "Executive MBA / Distance MBA", level: "Postgraduate", category: "PG Courses", duration: "2 Years", eligibility: "Graduation from recognized university", monthlyEmi: "₹3,200 / month", totalFee: "₹72,000", description: "Flexible executive management curriculum." },
      { name: "Distance BA", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 in any stream", monthlyEmi: "₹1,800 / month", totalFee: "₹42,000", description: "Undergraduate arts degree." },
      { name: "Distance B.Com", level: "Undergraduate", category: "UG Courses", duration: "3 Years", eligibility: "10+2 from recognized board", monthlyEmi: "₹1,900 / month", totalFee: "₹45,000", description: "Undergraduate commerce degree." }
    ],
    hiringPartners: ["Tata Business", "SBI Life", "HDFC Sales", "Kotak"],
    faqs: [
      { q: "What is the admission procedure for ISBM?", a: "Divine Institute provides end-to-end documentation check and university registration assistance." }
    ]
  },

  "xibms-jaipur": {
    id: "xibms-jaipur",
    slug: "xibms-jaipur",
    name: "Xaviers Institute of Business Management (XIBMS)",
    shortName: "XIBMS Autonomous",
    category: "autonomous",
    mode: "Distance Executive & Certifications",
    logo: xibmsLogo,
    badge: "Autonomous B-School",
    naacGrade: "ISO 9001:2015",
    location: "Jaipur / Multi-City Campus",
    establishedYear: "2009",
    rating: "4.6",
    reviewsCount: "27",
    tagline: "Premier Autonomous B-School for Fast-Track Executive Certifications",
    aboutTitle: "About XIBMS",
    description: "XIBMS is an autonomous premier management institute specializing in fast-track executive diplomas, certifications, and customized management programs for working executives via distance learning.",
    approvals: ["Autonomous B-School", "ISO 9001:2015 Certified", "Corporate Executive Partner"],
    highlights: [
      { label: "Established In", value: "2009" },
      { label: "Focus", value: "Fast-Track Executive Programs" },
      { label: "Certifications", value: "ISO 9001:2015 Quality Certified" }
    ],
    programs: [
      { name: "Executive MBA (Fast-Track for Professionals)", level: "Executive PG", category: "PG Courses", duration: "1 Year / Fast Track", eligibility: "Graduation / Diploma with work experience", monthlyEmi: "₹3,500 / month", totalFee: "₹35,000", description: "Fast-track executive MBA for working professionals." },
      { name: "Executive PGDM", level: "Postgraduate Diploma", category: "PG Courses", duration: "1 - 2 Years", eligibility: "Graduation with corporate experience", monthlyEmi: "₹3,800 / month", totalFee: "₹38,000", description: "Postgraduate diploma in management." },
      { name: "Advance Diploma in Business Management", level: "Advance Diploma", category: "UG Courses", duration: "1 Year", eligibility: "10+2 / Diploma with work background", monthlyEmi: "₹2,200 / month", totalFee: "₹22,000", description: "Advance 1-year management diploma." }
    ],
    hiringPartners: ["Reliance Retail", "Aditya Birla", "ICICI Bank", "L&T Infotech"],
    faqs: [
      { q: "Can I complete my course in fast-track mode?", a: "Yes. XIBMS offers flexible fast-track options for working executives with prior industry experience." }
    ]
  }
};
