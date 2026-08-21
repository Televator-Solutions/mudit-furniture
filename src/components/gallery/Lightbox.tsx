import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare, Phone } from 'lucide-react';
import { GalleryItem } from '../../types/gallery';
import { Button } from '../common/Button';
import { getWhatsAppUrl, getPhoneCallUrl } from '../../lib/contact';

export interface LightboxProps {
  isOpen: boolean;
  activeItem: GalleryItem | null;
  currentIndex: number | null;
  totalCount: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  activeItem,
  currentIndex,
  totalCount,
  onClose,
  onNext,
  onPrev,
}) => {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !activeItem || currentIndex === null) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      onNext();
    } else if (diff < -50) {
      onPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-950/90 backdrop-blur-md select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox preview"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Backdrop dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Bar Controls */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20 pointer-events-none">
        <div className="px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-sm pointer-events-auto">
          {currentIndex + 1} / {totalCount} &bull; {activeItem.categoryLabel}
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors pointer-events-auto focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Previous image (Left arrow)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Next image (Right arrow)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative z-10 max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center p-2">
        <div className="relative overflow-hidden rounded-2xl bg-charcoal-900 border border-charcoal-800 shadow-2xl max-h-[70vh] flex items-center justify-center">
          <img
            src={activeItem.image}
            alt={activeItem.title}
            className="max-h-[70vh] w-auto object-contain rounded-xl animate-fade-in"
          />
        </div>

        {/* Caption & Actions */}
        <div className="w-full mt-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold text-white">
              {activeItem.title}
            </h3>
            <p className="text-xs text-sand-300 mt-0.5">
              {activeItem.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              href={getWhatsAppUrl(undefined, activeItem.title)}
              isExternal
              variant="whatsapp"
              size="sm"
              leftIcon={<MessageSquare className="w-3.5 h-3.5" />}
              className="text-xs"
            >
              Ask Price on WhatsApp
            </Button>
            <Button
              href={getPhoneCallUrl()}
              variant="secondary"
              size="sm"
              leftIcon={<Phone className="w-3.5 h-3.5 text-wood-800" />}
              className="text-xs"
            >
              Call Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
