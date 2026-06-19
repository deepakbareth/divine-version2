import React from 'react';

const LogoTicker = () => {
  // Using Clearbit Logo API to pull real logos directly from their website domains
  const universities = [
    { id: 1, name: "Alliance University", src: "https://www.alliance.edu.in/uploads/media_image/dummy_img.jpg" },
    { id: 2, name: "Sharda University", src: "/" },
    { id: 3, name: "GLA University", src: "/" },
    { id: 4, name: "Uttaranchal University", src: "/" },
    { id: 5, name: "Galgotias University", src: "/" },
    { id: 6, name: "O.P. Jindal Global University", src: "/" },
    { id: 7, name: "UPES", src: "/" },
    { id: 8, name: "Andhra University", src: "/" },
  ];

  return (
    <div className="w-full bg-white py-8 relative overflow-hidden border-y border-gray-100">

      {/* Inline styles for Right-to-Left infinite loop */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-ticker {
            /* 30s controls the speed. Change to 20s for faster, 40s for slower */
            animation: scroll-left 30s linear infinite;
          }
          
          /* Pauses the slider when the user hovers over it */
          .animate-ticker:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Left Edge Fade */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

      {/* Ticker Container */}
      <div className="flex w-max animate-ticker items-center">

        {/* We map the array TWICE to create the seamless infinite loop */}
        {[...universities, ...universities].map((uni, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 md:mx-14 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
          >
            <img
              src={uni.src}
              alt={uni.name}
              className="h-12 md:h-16 w-auto object-contain max-w-[150px]"
              // Fallback text just in case an image fails to load
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden font-bold text-gray-700 text-sm md:text-base whitespace-nowrap">
              {uni.name}
            </span>
          </div>
        ))}

      </div>

      {/* Right Edge Fade */}
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>


    </div>
  );
};

export default LogoTicker;