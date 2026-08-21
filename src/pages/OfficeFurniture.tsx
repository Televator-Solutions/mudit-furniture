import React from 'react';
import { Briefcase, PhoneCall } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductCard } from '../components/products/ProductCard';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';
import { Button } from '../components/common/Button';
import { useEnquiryModal } from '../components/layout/Layout';
import { getWhatsAppUrl, getPhoneCallUrl } from '../lib/contact';
import { CTASection } from '../components/home/CTASection';

export const OfficeFurniture: React.FC = () => {
  const { openEnquiryModal } = useEnquiryModal();

  const officeProducts = PRODUCTS.filter((p: Product) => p.categorySlug === 'office');

  const officeCategories = [
    { title: 'Executive & Boss Chairs', desc: 'High-back ergonomic lumbar support with breathable mesh & synchro-tilt.' },
    { title: 'Director & Work Desks', desc: 'Spacious wooden desks with integrated side runners and lockable drawers.' },
    { title: 'Modular Workstations', desc: 'Space-optimized 2, 4 & 6-seater modular workstation setups with wire routing.' },
    { title: 'Steel Filing Cabinets', desc: 'Heavy-gauge steel cabinets and multi-tier lockers for document safety.' },
    { title: 'Conference Tables', desc: 'Sturdy boardroom and meeting tables built to customized client capacities.' },
  ];

  return (
    <>
      <SEO
        title="Office Furniture Agra | Ergonomic Chairs & Desks | Mudit Furnitures"
        description="Furnish your commercial workspace in Agra with ergonomic office chairs, director desks, modular workstations, conference tables and steel filing cabinets from Mudit Furnitures."
        canonicalPath="/office-furniture"
      />

      {/* Header */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-sand-100/80 to-sand-50 border-b border-sand-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-wood-100 text-wood-800 text-xs font-semibold uppercase tracking-wider mb-3.5 border border-wood-200">
              <Briefcase className="w-3.5 h-3.5" /> Corporate & Commercial
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
              Office Furniture Engineered for Productivity
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Equip your corporate office, clinic, educational institution, or home workspace with ergonomic seating, executive tables, and durable steel storage in Agra.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button
                onClick={() => openEnquiryModal(undefined, 'Turnkey Office Furniture Quotation')}
                variant="primary"
                size="md"
              >
                Get Office Furniture Quote
              </Button>
              <Button
                href={getWhatsAppUrl('Hello Mudit Furnitures, I am looking for office furniture in Agra.')}
                isExternal
                variant="whatsapp"
                size="md"
              >
                WhatsApp Office Requirements
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Office Categories Showcase */}
      <section className="py-14 sm:py-18 bg-sand-50">
        <Container>
          <SectionHeading
            badge="Workspace Solutions"
            title="Commercial Range Available in Agra"
            subtitle="Built to withstand daily heavy usage with durable hardware and comfortable ergonomics."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {officeCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-sand-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-wood-100 text-wood-800 flex items-center justify-center text-xs font-bold font-mono mb-3.5">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Office Products */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                Popular Office Furniture Models
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                Direct showroom pricing for single pieces or bulk commercial orders.
              </p>
            </div>
            <Button
              onClick={() => openEnquiryModal(undefined, 'Bulk Commercial Enquiry')}
              variant="outline"
              size="sm"
            >
              Bulk Quantity Pricing
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Corporate Trust Callout */}
      <section className="py-12 bg-sand-100 border-y border-sand-200">
        <Container>
          <div className="p-8 rounded-2xl bg-white border border-sand-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-serif text-xl font-bold text-charcoal-900">
                Setting Up a New Office or Clinic in Agra?
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600">
                We provide free measurement consultation, custom layout planning, and punctual delivery.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button
                onClick={() => openEnquiryModal(undefined, 'Office Setup Consultation')}
                variant="primary"
                size="md"
              >
                Request Consultation
              </Button>
              <Button
                href={getPhoneCallUrl()}
                variant="secondary"
                size="md"
                leftIcon={<PhoneCall className="w-4 h-4" />}
              >
                096397 53121
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};
