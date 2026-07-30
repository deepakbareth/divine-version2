import React, { useState } from 'react';
import SectionHeader from '../Components/reusable/SectionHeader';
import GalleryLightbox from '../Components/Gallery/GalleryLightbox';

// Direct Image Imports
import g1 from '../assets/gallery/g1.jpg';
import g2 from '../assets/gallery/g2.jpg';
import g3 from '../assets/gallery/g3.jpg';
import g4 from '../assets/gallery/g4.jpg';
import g5 from '../assets/gallery/g5.jpg';
import g6 from '../assets/gallery/g6.jpg';
import g7 from '../assets/gallery/g7.jpg';
import g8 from '../assets/gallery/g8.jpg';
import g9 from '../assets/gallery/g9.jpg';
import g10 from '../assets/gallery/g10.jpg';
import g11 from '../assets/gallery/g11.jpg';
import g12 from '../assets/gallery/g12.jpg';
import g13 from '../assets/gallery/g13.jpg';
import g14 from '../assets/gallery/g14.jpg';
import g15 from '../assets/gallery/g15.jpg';
import g16 from '../assets/gallery/g16.jpg';

const galleryImages = [
  { id: 1, image: g1 },
  { id: 2, image: g2 },
  { id: 3, image: g3 },
  { id: 4, image: g4 },
  { id: 5, image: g5 },
  { id: 6, image: g6 },
  { id: 7, image: g7 },
  { id: 8, image: g8 },
  { id: 9, image: g9 },
  { id: 10, image: g10 },
  { id: 11, image: g11 },
  { id: 12, image: g12 },
  { id: 13, image: g13 },
  { id: 14, image: g14 },
  { id: 15, image: g15 },
  { id: 16, image: g16 },
];

const Gallery = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = galleryImages.findIndex((item) => item.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setActiveItem(galleryImages[prevIndex]);
  };

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = galleryImages.findIndex((item) => item.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setActiveItem(galleryImages[nextIndex]);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-22 sm:py-22 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Section Header */}
        <SectionHeader
          badgeText="Our Moments & Memories"
          title="Divine Institute"
          titleHighlight="Photo Gallery"
          description="Explore campus events, seminars, convocations, and student activities at Divine Institute."
        />

        {/* Simple Direct Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative h-[260px] sm:h-[280px] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200/80"
            >
              <img
                src={item.image}
                alt={`Gallery photo ${item.id}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Preview */}
        {activeItem && (
          <GalleryLightbox
            activeItem={activeItem}
            itemsList={galleryImages}
            onClose={() => setActiveItem(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}



      </div>
    </div>
  );
};

export default Gallery;
