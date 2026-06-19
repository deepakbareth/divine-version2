import React from 'react';

const newsArticles = [
  { 
    id: 1, 
    source: "ANI", 
    title: "Divine.com: Simplifying Online Education in 3 Clicks",
    thumb: "https://www.collegesathi.com/_next/image?url=https%3A%2F%2Fmedia.collegesathi.com%2Fimages%2F1775111854204-programhero.webp&w=3840&q=75"
  },
  { 
    id: 2, 
    source: "The Tribune", 
    title: "Divine Overview: Services Focused on Online Higher Education Support",
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzydExc5r8fHei5p7CsTCyDkHHPp2MQiZ6A&s"
  },
  { 
    id: 3, 
    source: "CNBC TV18", 
    title: "Divine Explains: How Rising Costs are Reshaping Higher Education Financing?",
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfuPuI4bz1zWPTnt_sZggZjX4l6DJeq05bqw&s"
  }
];

const MediaRight = () => {
  return (
    <div className="flex flex-col space-y-8">
      {newsArticles.map((article) => (
        <div 
          key={article.id} 
          className="flex gap-6 items-center pb-8 border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition p-3 rounded-lg cursor-pointer"
        >
          <div className="flex-1">
            {/* White News Badge */}
            <div className="bg-white text-black px-3 py-1 text-[10px] font-black inline-block rounded-sm mb-4">
              {article.source}
            </div>
            <h3 className="text-lg md:text-xl font-bold leading-snug">
              {article.title}
            </h3>
          </div>

          {/* Right-side News Image/Screenshot */}
          <div className="w-28 h-20 md:w-36 md:h-24 bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={article.thumb} 
              alt="Article" 
              className="w-full h-full object-cover opacity-60" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaRight;