import React from 'react';

const CounsellingInfo = () => {
  return (
    <div className="flex flex-col text-left">
      <h2 className="text-4xl md:text-5xl font-medium text-gray-800 tracking-tight leading-tight">
        Still Confused?
      </h2>
      
      <div className="flex items-center gap-2 mt-3">
        <p className="text-xl md:text-2xl text-gray-800 font-normal">
          Get 1:1 free counselling Now
        </p>
        {/* WhatsApp Icon */}
        <div className="bg-green-500 rounded-full p-1 w-6 h-6 flex items-center justify-center">
          <svg fill="white" viewBox="0 0 24 24" className="w-4 h-4">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.125-.303-.137-.736-.312-1.429-.63-1.17-.534-1.929-1.393-1.986-1.472-.057-.078-.475-.632-.475-1.206 0-.573.298-.854.404-.967.106-.113.23-.142.307-.142.077 0 .153.003.22.006.072.003.167-.028.262.198.098.234.331.81.36.868.029.057.049.124.015.195-.034.07-.052.113-.105.176-.051.064-.108.136-.153.191-.05.056-.104.118-.04.228.064.11 2.285 1.34 2.285 1.34s.15.228.375.143c.224-.085.952-1.118 1.209-1.5.257-.383.513-.321.725-.241.212.08 1.346.634 1.576.748.23.114.383.171.439.266.056.096.056.551-.088.956z"/>
          </svg>
        </div>
      </div>

      {/* Illustration */}
      <div className="mt-10 w-full max-w-sm">
        {/* Replace this with your actual image asset */}
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7DPiaVKSkz_xHjax7R_enJJUdVpjb3yKwQ&s" 
          alt="1:1 Counselling" 
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default CounsellingInfo;