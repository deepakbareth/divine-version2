import React from "react";

const MediaSlider = () => {
  const mediaOutlets = [
    {
      id: 1,
      name: "The Tribune",
      domain: "tribuneindia.com",
    },
    {
      id: 2,
      name: "The Wire",
      domain: "thewire.in",
    },
    {
      id: 3,
      name: "The Times of India",
      domain: "timesofindia.indiatimes.com",
    },
    {
      id: 4,
      name: "Sikkim News",
      domain: "sikkimexpress.com",
    },
    {
      id: 5,
      name: "The Hindu",
      domain: "thehindu.com",
    },
    {
      id: 6,
      name: "ANI",
      domain: "ani.in",
    },
    {
      id: 7,
      name: "Hindustan Times",
      domain: "hindustantimes.com",
    },
    {
      id: 8,
      name: "India News",
      domain: "indianews.in",
    },
    {
      id: 9,
      name: "Jammu Kashmir News",
      domain: "jknewsline.com",
    },
  ];

  return (
    <section className="w-full bg-black py-6 relative overflow-hidden border-y border-zinc-800">
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            animation: marquee 25s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 md:w-40 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />

      {/* Slider */}
      <div className="flex w-max marquee-track items-center">
        {[...mediaOutlets, ...mediaOutlets].map((media, index) => (
          <div
            key={`${media.id}-${index}`}
            className="flex-shrink-0 mx-4 md:mx-8"
          >
            <div className="bg-white rounded-md shadow-lg px-4 py-3 h-14 md:h-16 min-w-[120px] md:min-w-[160px] flex items-center justify-center">
              <img
                src={`https://www.google.com/s2/favicons?sz=128&domain=${media.domain}`}
                alt={media.name}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-10 h-full w-20 md:w-40 bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none" />
    </section>
  );
};

export default MediaSlider;