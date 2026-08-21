import React from 'react';
import { Camera } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Container } from '../components/common/Container';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { GALLERY_ITEMS } from '../data/gallery';
import { CTASection } from '../components/home/CTASection';

export const Gallery: React.FC = () => {
  return (
    <>
      <SEO
        title="Showroom Gallery & Finished Projects | Mudit Furnitures Agra"
        description="Browse real photos of handcrafted sofas, wooden beds, office chairs, dining tables, steel almirahs and custom interiors by Mudit Furnitures in Agra."
        canonicalPath="/gallery"
      />

      {/* Header */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-sand-100/80 to-sand-50 border-b border-sand-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-wood-100 text-wood-800 text-xs font-semibold uppercase tracking-wider mb-3.5 border border-wood-200">
              <Camera className="w-3.5 h-3.5" /> Visual Showcase
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
              Furniture Gallery & Showroom Showcase
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Explore our finished installations, showroom displays, and custom pieces crafted for homes and offices in Agra. Click any photo to view in high resolution.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-14 sm:py-20 bg-sand-50">
        <Container>
          <GalleryGrid items={GALLERY_ITEMS} />
        </Container>
      </section>

      <CTASection />
    </>
  );
};
