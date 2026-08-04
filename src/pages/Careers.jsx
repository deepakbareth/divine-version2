import React, { useState } from 'react';
import CareerHero from '../Components/Careers/CareerHero';
import CareerPerks from '../Components/Careers/CareerPerks';
import JobListings from '../Components/Careers/JobListings';
import HREnquiryBox from '../Components/Careers/HREnquiryBox';
import JobApplicationModal from '../Components/Careers/JobApplicationModal';

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleOpenApplyModal = (job = null) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleScrollToJobs = () => {
    const element = document.getElementById('open-positions-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-22 sm:py-22 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Page Header & Stats Highlights */}
        <CareerHero onExploreClick={handleScrollToJobs} />

        {/* 2. Perks & Work Culture Grid */}
        <CareerPerks />



        {/* 4. Direct HR Box & Walk-in Office Info */}
        <HREnquiryBox onDirectApplyClick={() => handleOpenApplyModal(null)} />

      </div>

    </div>
  );
};

export default Careers;
