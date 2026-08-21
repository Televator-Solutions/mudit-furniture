import React from 'react';
import { Sliders, ArrowRight, MessageSquare } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { useEnquiryModal } from '../components/layout/Layout';
import { getWhatsAppUrl } from '../lib/contact';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { ContactForm } from '../components/contact/ContactForm';
import { CTASection } from '../components/home/CTASection';

export const CustomFurniture: React.FC = () => {
  const { openEnquiryModal } = useEnquiryModal();

  const customCategories = [
    {
      title: 'Custom Beds',
      desc: 'Bespoke headboard designs, specialized hydraulic lifts, king/queen dimensions tailored to room corners.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Custom Wardrobes & Closets',
      desc: 'Ceiling-height sliding wardrobes, modular shelving, integrated shoe racks, and vanity sections.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Custom Cabinets & Partitions',
      desc: 'Living room TV display units, mandir cabinets, crockery storage, and decorative divider screens.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Custom Tables & Work Desks',
      desc: 'Solid wood study desks, conference tables, and executive corner L-desks built to exact blueprint.',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Share Your Dimensions',
      desc: 'Tell us your space size, room photos, or layout sketch on WhatsApp or through our form.',
    },
    {
      num: '02',
      title: 'Material & Polish Selection',
      desc: 'Select your preferred hardwood/plywood, laminate finish, PU polish, and fabric colors.',
    },
    {
      num: '03',
      title: 'Precision Crafting',
      desc: 'Our craftsmen construct your piece with exact tolerances and quality reinforcement.',
    },
    {
      num: '04',
      title: 'Delivery & Setup in Agra',
      desc: 'On-time delivery and careful assembly right inside your room for a seamless finish.',
    },
  ];

  return (
    <>
      <SEO
        title="Custom Furniture in Agra | Made to Order | Mudit Furnitures"
        description="Get furniture customized according to your space, style and requirements in Agra. Custom beds, wardrobes, cabinets, tables & modular setups from Mudit Furnitures."
        canonicalPath="/custom-furniture"
      />

      {/* Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-sand-100/80 to-sand-50 border-b border-sand-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-wood-100 text-wood-800 text-xs font-semibold uppercase tracking-wider mb-3.5 border border-wood-200">
              <Sliders className="w-3.5 h-3.5" /> Tailored to Your Home
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
              Have Something Specific in Mind?
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal-600 leading-relaxed">
              Get furniture customized according to your space, style and requirements. Every home in Agra is unique — your furniture should fit like a glove.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                onClick={() => openEnquiryModal(undefined, 'Custom Furniture Blueprint Discussion')}
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss Your Requirement
              </Button>
              <Button
                href={getWhatsAppUrl('Hello Mudit Furnitures, I want to share a custom furniture drawing/photo.')}
                isExternal
                variant="whatsapp"
                size="lg"
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                WhatsApp Blueprint Photo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Custom Categories Grid */}
      <section className="py-16 sm:py-20 bg-sand-50">
        <Container>
          <SectionHeading
            badge="Custom Possibilities"
            title="What We Customize in Agra"
            subtitle="Choose your dimensions, colors, finishes, and storage layout."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customCategories.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-sand-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-sand-100">
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Button
                    onClick={() => openEnquiryModal(undefined, `Custom Order: ${item.title}`)}
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                  >
                    Customise This
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 sm:py-20 bg-sand-100/60 border-y border-sand-200">
        <Container>
          <SectionHeading
            badge="Simple Workflow"
            title="How Custom Orders Work"
            subtitle="From your initial sketch to final delivery at your doorstep in Agra."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-sand-200 shadow-card flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-wood-700 block mb-3">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Custom Requirement Submission Form Card */}
      <section className="py-16 sm:py-20 bg-sand-50">
        <Container size="narrow">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sand-200 shadow-card">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wood-100 text-wood-800 text-xs font-semibold uppercase tracking-wider mb-2 border border-wood-200">
                Direct Showroom Estimate
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                Submit Your Custom Furniture Requirement
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-2">
                Our Agra design team will review your specifications and contact you with material advice & quotation.
              </p>
            </div>

            <ContactForm defaultRequirement="Customized / Made-to-Order Furniture" />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};
