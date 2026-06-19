import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white font-sans relative pt-24 mt-20">

      {/* 1. Floating CTA Banner (Top) */}
      <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[95%] max-w-7xl pb-4 md:pb-0">
        <div className="bg-[#1a2b4c] rounded-xl flex flex-col md:flex-row items-center justify-between p-8 md:px-12 md:py-10 shadow-2xl relative overflow-hidden">
          {/* Subtle background wave patterns (simulated with CSS gradients) */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl font-bold text-white z-10 mb-6 md:mb-0">
            Get Clarity with Us!
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 z-10">
            <button className="flex items-center justify-center gap-2 border border-white/70 hover:bg-white hover:text-[#1a2b4c] text-white px-6 py-3 rounded-md transition-all font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Schedule Your Call
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#e6192b] hover:bg-red-700 text-white px-6 py-3 rounded-md transition-all font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Let's Talk Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-16">

        {/* 2. Primary Links Grid (Top Section) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Column 1: Logo, Socials, Contact */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="text-3xl font-bold tracking-tight text-white flex items-center mt-15 md:mt-0">
              <span className="text-xs font-normal uppercase mr-1 tracking-widest mt-1">The</span>
              Divine<span className="text-xs font-normal uppercase ml-1 tracking-widest mt-1">Company</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { name: 'Youtube', path: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29.01 29.01 0 001 11.75a29.01 29.01 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29.01 29.01 0 00.46-5.33 29.01 29.01 0 00-.46-5.33z M9.75 15.02V8.48l6.5 3.27-6.5 3.27z' },
                { name: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { name: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M21.5 6.51A1.5 1.5 0 1120 5 1.5 1.5 0 0121.5 6.51z M17.34 22H6.66A4.66 4.66 0 012 17.34V6.66A4.66 4.66 0 016.66 2h10.68A4.66 4.66 0 0122 6.66v10.68A4.66 4.66 0 0117.34 22z' },
                { name: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 110-4 2 2 0 010 4z' }
              ].map((icon, i) => (
                <a key={i} href="#" className="bg-[#e6192b] p-2 rounded-full hover:bg-red-700 transition">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d={icon.path}></path></svg>
                </a>
              ))}
            </div>

            {/* Contact Box */}
            <div className="relative border border-gray-600 rounded-md p-4 mt-4 w-max">
              <div className="absolute -top-3 left-3 bg-[#e6192b] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                Talk to an Expert
              </div>
              <div className="text-xl font-bold tracking-widest mt-1">
                <a href="tel:+919828477772" className="hover:text-slate-300 transition">+91 98284 77772</a>

              </div>
            </div>
          </div>

          {/* Column 2: About the Company */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-medium border-b border-[#e6192b] pb-2 mb-4">About the Company</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm text-gray-300">
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-red-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-red-400 transition">Contact Us</a></li>
                <li className="flex flex-col items-start gap-1">
                  <a href="#" className="hover:text-red-400 transition">CS Careers</a>
                  <span className="bg-[#4ade80] text-black text-[9px] font-bold px-1.5 py-0.5 rounded">Yes, We are Hiring</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-red-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-400 transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-red-400 transition">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-medium border-b border-[#e6192b] pb-2 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm text-gray-300">
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-red-400 transition">Top Online Universities</a></li>
                <li><a href="#" className="hover:text-red-400 transition">Blogs</a></li>
              </ul>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-red-400 transition">Scholarship</a></li>
                <li><a href="#" className="hover:text-red-400 transition">FAQs</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Wrapping the Mega Menu & Legal in a container with the silhouette background */}
      <div className="relative border-t border-gray-700">

        {/* Silhouette Background Overlay Effect */}
        <div
          className="absolute inset-0 opacity-[0.15] bg-center bg-cover bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop')" }}
        // Using a generic city backdrop. It blends with the dark background perfectly.
        ></div>

        {/* Gradient fade to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16">
          {/* 3. Mega Directory Grid (Middle Section) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

            {/* Col 1 */}
            <div className="space-y-10">
              <FooterList title="Popular PG Programs" links={["Online MBA", "Online MCA", "Dual MBA", "Online BBA + MBA", "1-Year Online MBA"]} />
              <FooterList title="Trending Online Universities" links={["Amity Online University", "NMIMS CDOE", "Online Manipal", "Jain University Online", "Sharda Online University", "Chandigarh Online University", "LPU Online", "DY Patil Vidyapeeth Online"]} />
            </div>

            {/* Col 2 */}
            <div className="space-y-10">
              <FooterList title="Trending UG Programs" links={["Online BBA", "Online BCA", "Online B.Com", "Online BA", "Distance B.Com"]} />
              <FooterList title="In Demand MBA Specializations" links={["HR Management", "Marketing Management", "Finance Management", "Fintech Management", "International Business", "Project Management", "Logistic and Supply chain", "Healthcare Management"]} />
            </div>

            {/* Col 3 */}
            <div className="space-y-10">
              <FooterList title="Doctorate Programs" links={["Online DBA", "Global DBA", "DNP", "EdD", "MBA + DBA"]} />
              <FooterList title="In Demand MCA Specializations" links={["Artificial Intelligence", "Cyber Security", "Cloud Computing", "Data Science and Analytics", "Computer Science and IT", "Full Stack Development", "Block Chain"]} />
            </div>

            {/* Col 4 */}
            <div className="space-y-10">
              <FooterList title="Executive Programs" links={["Executive MBA", "Executive DBA", "Executive PGDBA", "Executive PGDM", "Executive PGCM"]} />
              <FooterList title="Top Certification Programs" links={["PGCM", "Certificate in UI & UX", "Certificate in Data Science", "Certificate in Project Management", "Certificate in Text Mining & NLP", "Certificate in Big Data Analytics", "Certificate in HR Analytics", "Certificate in Financial Analytics"]} />
            </div>

          </div>

          {/* 4. Legal & Copyright Section (Bottom) */}
          <div className="mt-20 pt-8 border-t border-gray-600/50 text-center text-sm text-gray-300">
            <div className="flex justify-center gap-2 mb-6">
              <a href="#" className="hover:text-white transition">Disclaimer</a>
              <span className="text-gray-500">/</span>
              <a href="#" className="hover:text-white transition">Terms and Conditions</a>
              <span className="text-gray-500">/</span>
              <a href="#" className="hover:text-white transition">Our Policy</a>
            </div>

            <p className="text-gray-400 leading-relaxed text-[13px] max-w-6xl mx-auto mb-6">
              Divine aims to provide unbiased and precise information to aspirants, along with comparative guidance on universities and their programs. The content on the Divine website, including text, graphics, images, blogs, videos, and university logos, is meant for informational purposes only and should not be considered a substitute for official information provided by academic partners. While we make every effort to keep the information accurate and up to date, Divine does not guarantee the completeness or reliability of the content and is not responsible for any errors, omissions, or losses resulting from its use.
            </p>

            <p className="text-gray-300 font-medium">
              © Divine 2026. All Rights Reserved.
            </p>
          </div>

          <div className="mt-4 px-4 py-2  backdrop-blur-sm rounded-full shadow text-sm text-gray-500 text-center">
            Powered by
            <a
              href="https://premiumbusinesswebsites.com/"
              target='_blank'
              className="ml-1 font-semibold text-blue-600 hover:underline"
            >
              Premiumbusinesswebsites
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

// Helper component for rendering the mega directory lists to keep code clean
const FooterList = ({ title, links }) => (
  <div>
    <h4 className="text-[15px] font-medium border-b border-[#e6192b] pb-2 mb-4 inline-block w-full">{title}</h4>
    <ul className="space-y-3 text-sm text-gray-300 font-light">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href="#" className="hover:text-[#e6192b] transition-colors duration-200">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;