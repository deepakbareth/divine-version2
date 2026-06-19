import React from 'react';
import CounsellingInfo from './CounsellingInfo';
import CounsellingForm from './CounsellingForm';

const CounsellingSection = () => {
  return (
    <section className="py-6 px-4 md:px-10 bg-white font-sans">
      <div className="max-w-[95%] mx-auto">
        {/* Main Gradient Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FDF2F2] via-[#F3A5AF] to-[#A30D1A] shadow-xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 md:p-12 items-center">
            {/* Left Child: Text and Illustration */}
            <CounsellingInfo />

            {/* Right Child: The Form Card */}
            <div className="flex justify-end">
              <CounsellingForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CounsellingSection;