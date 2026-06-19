import React from 'react';

const CounsellingForm = () => {
  return (
    <div className="bg-white rounded-3xl  p-8 w-full  shadow-2xl relative">
      <form className="flex flex-col space-y-5">
        
        {/* Full Name */}
        <div>
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 placeholder-gray-400"
          />
        </div>

        {/* Preferred Program Dropdown */}
        <div className="relative">
          <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 text-gray-500 appearance-none bg-white">
            <option value="" disabled >Preferred program</option>
            <option value="mba">MBA</option>
            <option value="bba">BBA</option>
            <option value="bca">BCA</option>
          </select>
          {/* Custom Dropdown Arrow */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        {/* Email */}
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 placeholder-gray-400"
          />
        </div>

        {/* Number & OTP Row */}
        <div className="grid grid-cols-[2fr_1fr] gap-3">
          {/* Number Field with integrated OTP button */}
          <div className="relative">
            <input 
              type="tel" 
              placeholder="Number" 
              className="w-full border border-gray-200 rounded-lg pl-4 pr-16 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 placeholder-gray-400"
            />
            <button 
              type="button"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#d60000] text-white text-[11px] font-bold px-3 py-1.5 rounded-md hover:bg-red-700 transition"
            >
              OTP
            </button>
            
            {/* No Spam Badge positioned right under the number field */}
            <div className="absolute -bottom-6 right-0 flex items-center gap-1 bg-[#eaffeb] text-[#1a8523] px-2 py-0.5 rounded text-[10px] font-semibold border border-[#bbf7d0]">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM9.707 10.293a1 1 0 00-1.414 0l-2 2a1 1 0 001.414 1.414L9 12.414l3.293 3.293a1 1 0 001.414-1.414l-4-4z" clipRule="evenodd" /></svg>
              No Spam. Ever.
            </div>
          </div>

          {/* OTP Input Field */}
          <div>
            <input 
              type="text" 
              placeholder="OTP" 
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 placeholder-gray-400 text-center bg-gray-50/50"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button 
            type="submit" 
            className="w-full md:w-4/5 mx-auto block bg-gradient-to-r from-[#cc0000] to-[#800000] text-white font-medium text-lg py-3 rounded-full shadow-[0_8px_20px_rgba(204,0,0,0.4)] hover:shadow-[0_10px_25px_rgba(204,0,0,0.6)] transform hover:-translate-y-0.5 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CounsellingForm;