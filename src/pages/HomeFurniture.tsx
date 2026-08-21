import React from 'react';
import { Home } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductCard } from '../components/products/ProductCard';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';
import { Button } from '../components/common/Button';
import { useEnquiryModal } from '../components/layout/Layout';
import { CTASection } from '../components/home/CTASection';

export const HomeFurniture: React.FC = () => {
  const { openEnquiryModal } = useEnquiryModal();

  const livingProducts = PRODUCTS.filter((p: Product) => p.categorySlug === 'living-room');
  const bedroomProducts = PRODUCTS.filter((p: Product) => p.categorySlug === 'bedroom');
  const diningAndStorage = PRODUCTS.filter(
    (p: Product) => p.categorySlug === 'dining' || p.categorySlug === 'storage'
  );

  return (
    <>
      <SEO
        title="Home Furniture in Agra | Sofas, Beds, Wardrobes | Mudit Furnitures"
        description="Explore premium home furniture in Agra. Handcrafted wooden beds, sofas, sofa cum beds, dining sets, orthopedic mattresses & wardrobes at Mudit Furnitures."
        canonicalPath="/home-furniture"
      />

      {/* Header */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-sand-100/80 to-sand-50 border-b border-sand-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-wood-100 text-wood-800 text-xs font-semibold uppercase tracking-wider mb-3.5 border border-wood-200">
              <Home className="w-3.5 h-3.5" /> Residential Comfort
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
              Home Furniture for Everyday Living
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Transform your living rooms, bedrooms, and dining spaces with durable woods, comfortable upholstery, and versatile space-saving furniture in Agra.
            </p>
          </div>
        </Container>
      </section>

      {/* Living Room Section */}
      <section className="py-14 sm:py-18 bg-sand-50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <SectionHeading
              badge="Living Room"
              title="Sofas, Sofa Cum Beds & Tables"
              subtitle="Plush cushioning, high-durability fabrics, and space-saving convertibles."
              align="left"
              className="mb-0"
            />
            <Button
              onClick={() => openEnquiryModal(undefined, 'Living Room Furniture')}
              variant="outline"
              size="sm"
            >
              Get Living Room Quote
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {livingProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Bedroom Section */}
      <section className="py-14 sm:py-18 bg-sand-100/50 border-y border-sand-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <SectionHeading
              badge="Bedroom Sanctuary"
              title="King & Queen Beds, Mattresses & Wardrobes"
              subtitle="Solid hydraulic storage beds, zero-sag mattresses, and spacious organized closets."
              align="left"
              className="mb-0"
            />
            <Button
              onClick={() => openEnquiryModal(undefined, 'Bedroom Furniture & Mattresses')}
              variant="outline"
              size="sm"
            >
              Get Bedroom Quote
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bedroomProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Dining & Storage */}
      <section className="py-14 sm:py-18 bg-sand-50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <SectionHeading
              badge="Dining & Storage"
              title="Dining Tables & Steel Almirahs"
              subtitle="Solid wood family dining sets and heavy-duty steel almirahs with safety lockers."
              align="left"
              className="mb-0"
            />
            <Button
              onClick={() => openEnquiryModal(undefined, 'Dining & Almirah Requirements')}
              variant="outline"
              size="sm"
            >
              Get Almirah & Dining Quote
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diningAndStorage.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};
