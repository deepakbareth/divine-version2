import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryLightbox = ({
  activeItem,
  itemsList,
  onClose,
  onPrev,
  onNext
}) => {
  if (!activeItem) return null;

  const currentIndex = itemsList.findIndex((item) => item.id === activeItem.id);

  // Keyboard Navigation (ESC to close, Left/Right arrows to navigate)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
      {/* Top Header Bar */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20 text-white">
        <div className="bg-white/10 backdrop-blur-md text-white font-bold text-xs px-3.5 py-1.5 rounded-full border border-white/15">
          {currentIndex + 1} of {itemsList.length}
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Left Navigation Arrow */}
      {itemsList.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#59c28a] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer z-20 shadow-xl"
          title="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div className="w-full h-full flex items-center justify-center p-2 sm:p-6">
        <div className="relative shadow-2xl border border-white/10 max-h-[88vh] max-w-[85vw] flex items-center justify-center">
          <img
            src={activeItem.image}
            alt="Gallery Preview"
            className="max-h-[96vh] w-auto object-contain "
          />
        </div>
      </div>

      {/* Right Navigation Arrow */}
      {itemsList.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#59c28a] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer z-20 shadow-xl"
          title="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default GalleryLightbox;
