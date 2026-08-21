import React, { useState } from 'react';
import { Maximize2, Tag } from 'lucide-react';
import { GalleryItem } from '../../types/gallery';
import { OptimizedImage } from '../common/OptimizedImage';
import { Lightbox } from './Lightbox';
import { useLightbox } from '../../hooks/useLightbox';

export interface GalleryGridProps {
  items: GalleryItem[];
}

const GALLERY_CATEGORIES = [
  { slug: 'all', label: 'All' },
  { slug: 'living-room', label: 'Living Room' },
  { slug: 'bedroom', label: 'Bedroom' },
  { slug: 'office', label: 'Office' },
  { slug: 'chairs', label: 'Chairs' },
  { slug: 'tables', label: 'Tables' },
  { slug: 'cabinets', label: 'Cabinets' },
  { slug: 'custom', label: 'Custom Furniture' },
];

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredItems = selectedFilter === 'all'
    ? items
    : items.filter((item) => item.category === selectedFilter);

  const {
    isOpen,
    currentIndex,
    activeItem,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
  } = useLightbox(filteredItems);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start md:justify-center">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setSelectedFilter(cat.slug)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              selectedFilter === cat.slug
                ? 'bg-wood-700 text-white shadow-soft font-semibold'
                : 'bg-white text-charcoal-700 hover:bg-sand-200 border border-sand-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative rounded-2xl overflow-hidden bg-white border border-sand-200 shadow-card hover:shadow-card-hover cursor-pointer transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden bg-sand-100 relative">
              <OptimizedImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="w-12 h-12 rounded-full bg-white/90 text-charcoal-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5 text-wood-800" />
                </div>
              </div>

              {/* Category Pill */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-charcoal-900 text-[11px] font-semibold backdrop-blur-sm border border-sand-200 flex items-center gap-1">
                <Tag className="w-3 h-3 text-wood-700" />
                <span>{item.categoryLabel}</span>
              </div>
            </div>

            <div className="p-4 bg-white">
              <h3 className="font-serif text-base font-semibold text-charcoal-900 group-hover:text-wood-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-charcoal-600 mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={isOpen}
        activeItem={activeItem}
        currentIndex={currentIndex}
        totalCount={filteredItems.length}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};
