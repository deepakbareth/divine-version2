import React, { useState, useMemo, useEffect } from 'react';
import EnquiryModal from '../Components/reusable/EnquiryModal';
import FaqHero from '../Components/Faq/FaqHero';
import FaqCategories from '../Components/Faq/FaqCategories';
import FaqList from '../Components/Faq/FaqList';
import { faqsData } from '../Data/faqsData';

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Set document title for SEO
  useEffect(() => {
    document.title = "FAQs | Divine Institute - UGC-Approved Online Degrees Guidance";
  }, []);

  // Filter FAQs strictly based on active category
  const filteredFaqs = useMemo(() => {
    if (activeCategory === 'all') return faqsData;
    return faqsData.filter((faq) => faq.category === activeCategory);
  }, [activeCategory]);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  // Structured Data Schema for Search Engine SEO
  const faqSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqsData.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-24 lg:py-28 font-sans text-slate-800">
      
      {/* Structured FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Ask an Academic Counselor"
        subtitle="Have a question that is not answered below? Connect directly with our senior admission advisor."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Matching Website SectionHeader Theme) */}
        <FaqHero />

        {/* Category Tabs */}
        <FaqCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onSelectCategory={() => setOpenIndex(0)}
        />

        {/* Accordion FAQ List (Matching Website FaqAccordion Theme) */}
        <FaqList
          faqs={filteredFaqs}
          openIndex={openIndex}
          toggleAccordion={toggleAccordion}
        />

      </div>
    </div>
  );
};

export default Faq;
