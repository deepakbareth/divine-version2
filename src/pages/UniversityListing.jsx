import React, { useState } from 'react';
import { universitiesData, approvalFilters } from '../Data/universitiesData';
import SectionHeader from '../Components/reusable/SectionHeader';
import LeadEnquiryForm from '../Components/reusable/LeadEnquiryForm';
import UniversityCard from '../Components/Universities/UniversityCard';
import UniversityFilters from '../Components/Universities/UniversityFilters';
import { Building2 } from 'lucide-react';

const UniversityListing = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [activeUniversityName, setActiveUniversityName] = useState('');

  // Filtering Logic
  const filteredUniversities = universitiesData.filter((uni) => {
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'ugc-deb') return matchesSearch && uni.approvals.some(a => a.includes('UGC'));
    if (selectedFilter === 'naac-aplus') return matchesSearch && (uni.naacGrade.includes('A+') || uni.naacGrade.includes('A++'));
    if (selectedFilter === 'rajasthan') return matchesSearch && uni.location.toLowerCase().includes('rajasthan');

    return matchesSearch;
  });

  const handleOpenModal = (uniName) => {
    setActiveUniversityName(uniName);
    setShowLeadModal(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-22 sm:py-22 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Section Header */}
        <SectionHeader
          badgeText="Recognized Academic Partners"
          title="Explore Top Distance & Online"
          titleHighlight="Partner Universities"
          description="Discover UGC-DEB recognized & NAAC A+ accredited partner universities offering flexible degree and diploma programs for working professionals."
        />

        {/* Modular Search Bar & Filter Controls */}
        <UniversityFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          approvalFilters={approvalFilters}
        />

        {/* Universities Card Grid */}
        {filteredUniversities.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredUniversities.map((uni) => (
              <UniversityCard
                key={uni.id}
                university={uni}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 mb-16">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-800 font-serif">No universities found matching your search.</h3>
            <p className="text-slate-500 text-sm mt-2">Try clearing your search query or selecting another approval filter.</p>
          </div>
        )}

        {/* Bottom Lead Enquiry Form Banner */}
        <div className="max-w-3xl mx-auto">
          <LeadEnquiryForm
            title="Need Help Comparing Partner Universities?"
            subtitle="Connect with our lead academic counsellors to get university fee breakdowns, approval letters & brochure PDFs."
            buttonText="Get Free University Consultation"
          />
        </div>

      </div>

      {/* Counselling Modal Popup */}
      {showLeadModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full relative">
            <button
              onClick={() => setShowLeadModal(false)}
              className="absolute -top-10 right-0 text-white font-bold text-sm bg-white/10 px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 cursor-pointer"
            >
              ✕ Close
            </button>
            <LeadEnquiryForm
              title={`Inquire About ${activeUniversityName}`}
              subtitle="Fill your details below to receive the official university fee structure and approval prospectus."
              buttonText="Request University Prospectus"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityListing;
