import React from 'react';
import SectionHeader from '../Components/reusable/SectionHeader';
import ContactInfoCards from '../Components/Contact/ContactInfoCards';
import ContactForm from '../Components/Contact/ContactForm';
import ContactSidebar from '../Components/Contact/ContactSidebar';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24 lg:py-28 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          badgeText="We're Here To Help"
          title="Contact Divine"
          titleHighlight="Academic Desk"
          description="Have questions about UGC-approved online degrees, fee structures, or eligibility? Connect with our senior counselors today."
        />

        {/* Top 4 Contact Info Cards */}
        <ContactInfoCards />

        {/* Dual Column Layout: Contact Form & Brand Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactSidebar />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
