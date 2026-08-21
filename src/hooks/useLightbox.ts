import { useState, useCallback, useEffect } from 'react';
import { GalleryItem } from '../types/gallery';

export function useLightbox(items: GalleryItem[]) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setCurrentIndex(null);
    document.body.style.overflow = '';
  }, []);

  const nextImage = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! + 1) % items.length);
    }
  }, [currentIndex, items.length]);

  const prevImage = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! - 1 + items.length) % items.length);
    }
  }, [currentIndex, items.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, closeLightbox, nextImage, prevImage]);

  return {
    isOpen: currentIndex !== null,
    currentIndex,
    activeItem: currentIndex !== null ? items[currentIndex] : null,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
  };
}
