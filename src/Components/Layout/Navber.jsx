import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 'href' ki jagah ab hum 'path' use karenge
  const navLinks = [
    { name: 'Home', path: '/divine/' },
    { name: 'About Us', path: '/divine/about' },
    { name: 'Courses', path: '/divine/courses' },
    { name: 'Universities', path: '/divine/#universities' },
    { name: 'Blog', path: '/divine/#blog' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/divine/" className="text-3xl font-extrabold tracking-tighter text-slate-900 font-serif">
              <img src={logo} alt="" className='w-38 h-auto' />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-slate-600 hover:text-blue-600 text-xl font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                {/* Underline Hover Effect */}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              to="/divine/#apply"
              className="bg-[#6abd8d] text-gray-900 font-bold px-6 py-2.5 rounded-full  hover:bg-[#6abd8d] transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none transition-colors"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)} // Click karne par menu close ho jaye
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-2">
                <Link
                  to="/divine/#apply"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-[#6abd8d] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#6abd8d] transition-colors shadow-md shadow-blue-600/20"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;